import axios from 'axios';
import { ShipFuel, ShipNav } from '../../schemas';

type NavigateShipResponse = {
    data: {
        fuel: ShipFuel;
        nav: ShipNav;
    };
}

export async function navigateShipAsync(shipSymbol: string, waypointSymbol: string): Promise<NavigateShipResponse['data']> {
    const response = await axios.post<NavigateShipResponse>(`/my/ships/${shipSymbol}/navigate`, { waypointSymbol });
    return response.data.data;
}
