import axios from 'axios';
import { Cooldown } from '../../schemas';

export async function getShipCooldownAsync(shipSymbol: string): Promise<Cooldown> {
    const response = await axios.get<{ data: Cooldown; }>(`/my/ships/${shipSymbol}/cooldown`);
    return response.data.data;
}
