import axios from 'axios';
import { ShipNav } from '../../schemas';

export async function orbitShipAsync(shipSymbol: string): Promise<ShipNav> {
    const response = await axios.post<{ data: ShipNav; }>(`/my/ships/${shipSymbol}/orbit`);
    return response.data.data;
}
