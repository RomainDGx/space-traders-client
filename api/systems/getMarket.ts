import axios from 'axios';
import { Market } from '../../schemas';

export async function getMarketAsync(systemSymbol: string, waypointSymbol: string): Promise<Market> {
    const response = await axios.get<{ data: Market; }>(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/market`);
    return response.data.data;
}
