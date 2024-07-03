import createDotaApiPort from "@/utils/dota-api/createDotaApiPort";
import { Player } from "@/database/models";
import { IPlayer } from "@/interfaces/schemas/IPlayer";

export default async (discordId: string, dotaId: string): Promise<IPlayer | null> => {
    const dotaApi = createDotaApiPort();
    const data = await dotaApi.playerInfo(Number(dotaId));

    const player  = await Player.findOneAndUpdate(
        { discordId },
        {
            $set: {
                name: data.name,
                lastMatchDate: data.lastMatchDate,
                rank: data.rank,
                leaderboardRank: data.leaderboardRank,
            }
        },
        {
            new: true,
            upsert: true,
            lean: true,
            includeResultMetadata: true
        },
    ).exec();

    return player.value;
}
