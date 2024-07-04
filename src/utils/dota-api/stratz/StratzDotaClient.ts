import { DotaApiClient } from "@/interfaces/dota-api/DotaApiClient";
import { PlayerInfoStratzResponseT } from "@/types/dota-api/open-dota/responses/PlayerInfoStratzResponseT";
import { createClient, Client, cacheExchange, fetchExchange } from "urql";
import playerInfoQuery from "@/graphql/stratz/playerInfoQuery";
import * as process from "process";

export default class StratzDotaClient implements DotaApiClient<PlayerInfoStratzResponseT> {

    private readonly client: Client;

    constructor() {
        const token = process.env['STRATZ_DOTA_API_TOKEN'];
        const url = process.env['STRATZ_API_URL'];

        if (!token) {
            throw new Error('"STRATZ_DOTA_API_TOKEN" is undefined.');
        }

        if (!url) {
            throw new Error('"STRATZ_API_URL" is undefined.');
        }

        this.client = createClient({
            url,
            exchanges: [cacheExchange, fetchExchange],
            fetchOptions: () => ({
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                        'Cache-Control': 'max-age=0',
                        'Authorization': `bearer ${token}`,
                }
            }),
        });
    }

    async playerInfo(playerId: number): Promise<PlayerInfoStratzResponseT> {
        const response = await this.client.query(playerInfoQuery, { playerId }).toPromise();

        if (!response || !response.data) {
            throw new Error('Failed to fetch player info.');
        }

        return response.data;
    }
}
