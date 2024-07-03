import { DotaApiClient } from "@/interfaces/dota-api/DotaApiClient";
import axios, {AxiosInstance, AxiosResponse} from "axios";
import { PlayerInfoOpenDotaResponseT } from "@/types/dota-api/open-dota/responses/PlayerInfoOpenDotaResponseT";

export default class implements DotaApiClient<PlayerInfoOpenDotaResponseT> {

    private readonly axios: AxiosInstance;

    // 'Content-Type': 'application/json; charset=utf-8',
    // 'Cache-Control': 'max-age=0'

    constructor() {
        this.axios = axios.create({
            baseURL: process.env['OPEN_DOTA_API_URL'],
            timeout: 1000,
        });
    }

    async playerInfo(playerId: number): Promise<PlayerInfoOpenDotaResponseT> {
        const response: AxiosResponse<PlayerInfoOpenDotaResponseT> = await this.axios.get(`/players/${playerId}`);

        return response.data;
    }
}
