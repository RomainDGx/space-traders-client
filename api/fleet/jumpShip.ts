import axios from 'axios';
import { Cooldown, ShipNav } from '../../schemas';

type JumpShipResponse = {
    data: {
        cooldown: Cooldown;
        nav: ShipNav;
    };
}

export async function jumpShipAsync(shipSymbol: string, systemSymbol: string): Promise<JumpShipResponse['data']> {
    const response = await axios.post<JumpShipResponse>(`/my/ships/${shipSymbol}/jump`, { systemSymbol });
    return response.data.data;
}
