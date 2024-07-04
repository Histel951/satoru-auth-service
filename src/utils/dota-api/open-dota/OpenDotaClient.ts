import { DotaApiClient } from "@/interfaces/dota-api/DotaApiClient";
import axios, { AxiosInstance } from "axios";
import { PlayerInfoOpenDotaResponseT } from "@/types/dota-api/open-dota/responses/PlayerInfoOpenDotaResponseT";
import * as process from "process";

export default class implements DotaApiClient<PlayerInfoOpenDotaResponseT> {

    private readonly axios: AxiosInstance;

    constructor() {
        const baseURL = process.env['OPEN_DOTA_API_URL'];

        if (!baseURL) {
            throw new Error('"OPEN_DOTA_API_URL" is undefined.');
        }

        this.axios = axios.create({
            baseURL,
            timeout: 1000,
        });
    }

    async playerInfo(playerId: number): Promise<PlayerInfoOpenDotaResponseT> {
        const response = await this.axios.get(`/players/${playerId}`);

        if (!response || !response.data) {
            throw new Error('Failed to fetch player info.');
        }

        return response.data;
    }
}
