import connectRabbitMq from "@/utils/rabbitmq/connectRabbitMq";
import { ConsumeCallback } from "@/types/rabbitmq/ConsumeCallback";

export default async (queueName: string, callback: ConsumeCallback) => {
    const channel = await connectRabbitMq();

    await channel.assertQueue(queueName, { durable: true });

    await channel.consume(queueName, async msg => {
        if (!msg) {
            return;
        }

        try {
            const response = await callback(msg);

            if (!response) {
                channel.ack(msg);
                return;
            }

            channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
                correlationId: 'registerMember'
            });

            channel.ack(msg);
        } catch (error) {
            console.error(error);
        }
    });

    channel.on('error', (error) => {
        console.error('Ошибка в канале при прослушивании очереди:', error.message);
    });

    channel.on('close', () => {
        console.log('Канал закрыт.');
    });
}
