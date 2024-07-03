import { ConsumeMessage } from "amqplib";

export type ConsumeCallback = (msg: ConsumeMessage | null) => any;
