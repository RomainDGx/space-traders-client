
import axios from 'axios';
import { ShipNav, ShipNavFlightMode } from '../../schemas';

export async function patchShipNavAsync(shipSymbol: string, flightMode: ShipNavFlightMode = 'CRUISE'): Promise<ShipNav> {
    const response = await axios.patch<{ data: ShipNav; }>(`/my/ships/${shipSymbol}/nav`, { flightMode });
    return response.data.data;
}
