import listenToQueue from "@/utils/rabbitmq/listenToQueue";
import connectToDatabase from "@/database/connect";
import { RegisterMemberContentI } from "@/interfaces/auth/RegisterMemberContentI";
import register from "@/utils/auth/register";

connectToDatabase();

console.log('Database ready!');

listenToQueue('registerMember', async (msg) => {
    const content = msg?.content.toString();

    if (!content) {
        return;
    }

    const { dotaId, discordId }: RegisterMemberContentI = JSON.parse(content);

    const player = await register(discordId, dotaId);

    if (player) {

        return {
            discordId: player.discordId,
            rank: player.rank,
        };
    }
});
