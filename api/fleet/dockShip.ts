import axios from 'axios';
import { ShipNav } from '../../schemas';

export async function dockShipAsync(shipSymbol: string): Promise<ShipNav> {
    const response = await axios.post<{ data: ShipNav; }>(`/my/ships/${shipSymbol}/dock`);
    return response.data.data;
}
