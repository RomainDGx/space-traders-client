import axios from 'axios';
import { ShipMount } from '../../schemas';

/**
 * Get the mounts installed on a ship.
 * @param shipSymbol The ship's symbol.
 * @returns Got installed mounts.
 */
export async function shipMountsAsync(shipSymbol: string): Promise<ShipMount[]> {
    const response = await axios.get<{ data: ShipMount[]; }>(`/my/ships/${shipSymbol}/mounts`);
    return response.data.data;
}
