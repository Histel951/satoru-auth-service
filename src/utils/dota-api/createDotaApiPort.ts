import DotaApiFactory from "./DotaApiFactory";
import { DotaApiPortI } from "@/interfaces/dota-api/DotaApiPortI";
import * as process from "process";

export default (): DotaApiPortI => {
    switch (process.env['DOTA_API_PORT']) {
        case 'open-dota':
            return DotaApiFactory.createOpenDotaPort();
        case 'stratz':
            return DotaApiFactory.createStratzDotaPort();
        default:
            return DotaApiFactory.createOpenDotaPort();
    }
}
