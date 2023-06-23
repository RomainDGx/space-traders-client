import axios from 'axios';
import { Cooldown, ScannedShip } from '../../schemas';

type ScanShipsResponse = {
    data: {
        cooldown: Cooldown;
        ships: ScannedShip[];
    };
}

export async function scanShipsAsync(shipSymbol: string): Promise<ScanShipsResponse['data']> {
    const response = await axios.post<ScanShipsResponse>(`/my/ships/${shipSymbol}/scan/ships`);
    return response.data.data;
}
