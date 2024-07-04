import amqp, { Channel } from 'amqplib';
import * as process from "process";

export default async (): Promise<Channel> => {
    try {
        const connection = await amqp.connect(`amqp://${process.env['RABBITMQ_HOST']}`); // amqp://rabbitmq-service.default.svc.cluster.local

        return await connection.createChannel();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
