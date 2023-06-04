import axios from 'axios';
import { Faction } from '../../schemas';

export async function getFactionAsync(factionSymbol: string): Promise<Faction> {
    const response = await axios.get<{ data: Faction; }>(`/faction/${factionSymbol}`);
    return response.data.data;
}
