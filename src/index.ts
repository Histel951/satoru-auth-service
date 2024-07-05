import listenToQueue from "@/utils/rabbitmq/listenToQueue";
import connectToDatabase from "@/database/connect";
import registerMember from "@/utils/queue/registerMember";
import mongoose from "mongoose";

void connectToDatabase();

mongoose.connection.once('open', async () => {
    console.log('Connected to the database');

    await listenToQueue('registerMember', registerMember);
});
