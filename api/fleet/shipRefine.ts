import axios from 'axios';
import { Cooldown, ShipCargo } from '../../schemas';

type ShipRefineResponse = {
    data: {
        cargo: ShipCargo;
        cooldown: Cooldown;
        producted: Array<{
            tradeSymbol: string;
            units: number;
        }>;
        consumed: Array<{
            tradeSymbol: string;
            units: number;
        }>;
    }
}

export async function shipRefineAsync(shipSymbol: string, produce: 'IRON' | 'COPPER' | 'SILVER' | 'GOLD' | 'ALUMINUM' | 'PLATINUM' | 'URANITE' | 'MERITIUM' | 'FUEL'): Promise<ShipRefineResponse['data']> {
    const response = await axios.post<ShipRefineResponse>(`/my/ships/${shipSymbol}/refine`, { produce });
    return response.data.data;
}
