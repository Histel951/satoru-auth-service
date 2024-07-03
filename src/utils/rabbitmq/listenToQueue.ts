import connectRabbitMq from "@/utils/rabbitmq/connectRabbitMq";
import { ConsumeCallback } from "@/types/rabbitmq/ConsumeCallback";

export default async (queueName: string, callback: ConsumeCallback) => {
    const channel = await connectRabbitMq();

    await channel.assertQueue(queueName, { durable: true });

    await channel.consume(queueName, async msg => {
        if (!msg) {
            return;
        }

        const response = await callback(msg);

        if (!response) {
            channel.ack(msg);
            return;
        }

        console.log(response);
        channel.sendToQueue(msg.properties.replyTo, Buffer.from(JSON.stringify(response)), {
            correlationId: 'registerMember'
        });

        channel.ack(msg);
    });

    channel.on('error', (error) => {
        console.error('Ошибка в канале при прослушивании очереди:', error.message);
    });

    channel.on('close', () => {
        console.log('Канал закрыт.');
    });
}
