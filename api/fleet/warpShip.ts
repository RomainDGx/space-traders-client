import axios from 'axios';
import { ShipFuel, ShipNav } from '../../schemas';

type WarpShipResponse = {
    data: {
        fuel: ShipFuel;
        nav: ShipNav;
    };
}

export async function warpShipAsync(shipSymbol: string, waypointSymbol: string): Promise<WarpShipResponse['data']> {
    const response = await axios.post<WarpShipResponse>(`/my/ships/${shipSymbol}/warp`, { waypointSymbol });
    return response.data.data;
}
