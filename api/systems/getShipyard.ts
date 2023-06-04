import axios from 'axios';
import { Shipyard } from '../../schemas';

export async function getShipyardAsync(systemSymbol: string, waypointSymbol: string): Promise<Shipyard> {
    const response = await axios.get<{ data: Shipyard; }>(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/shipyard`);
    return response.data.data;
}
