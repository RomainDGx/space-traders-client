import axios from 'axios';
import { Ship } from '../../schemas';

export async function getShipAsync(shipSymbol: string): Promise<Ship> {
    const response = await axios.get<{ data: Ship; }>(`/my/ships/${shipSymbol}`);
    return response.data.data;
}
