import amqp, { Channel } from 'amqplib';

export default async (): Promise<Channel> => {
    try {
        const connection = await amqp.connect('amqp://rabbit-mq'); // amqp://rabbitmq-service.default.svc.cluster.local

        return await connection.createChannel();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
