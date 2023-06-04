import axios from 'axios';
import { ShipCargo } from '../../schemas';

export async function getShipCargoAsync(shipSymbol: string): Promise<ShipCargo> {
    const response = await axios.get<{ data: ShipCargo; }>(`/my/ships/${shipSymbol}/cargo`);
    return response.data.data;
}
