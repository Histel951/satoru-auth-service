import { ConsumeMessage } from "amqplib";
import { RegisterMemberContentI } from "@/interfaces/auth/RegisterMemberContentI";
import register from "@/utils/auth/register";
import { IPlayerSchema } from "@/interfaces/schemas/IPlayer";

export default async (msg: ConsumeMessage | null): Promise<IPlayerSchema | null> => {
    const content = msg?.content.toString();

    if (!content) {
        return null;
    }

    try {
        const { dotaId, discordId }: RegisterMemberContentI = JSON.parse(content);

        const player = await register(discordId, dotaId);

        return player ? {
            name: player.name,
            team: player.team,
            steamAccountId: player.steamAccountId,
            lastMatchDate: player.lastMatchDate,
            leaderboardRank: player.leaderboardRank,
            position: player.position,
            discordId: player.discordId,
            rank: player.rank,
        } : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
