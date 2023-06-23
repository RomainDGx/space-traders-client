import axios from 'axios';
import { ShipNav } from '../../schemas';

export async function getShipNavAsync(shipSymbol: string): Promise<ShipNav> {
    const response = await axios.get<{ data: ShipNav; }>(`/my/ships/${shipSymbol}/nav`);
    return response.data.data;
}
