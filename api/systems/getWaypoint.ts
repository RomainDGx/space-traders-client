import axios from 'axios';
import { Waypoint } from '../../schemas';

export async function getWaypointAsync(systemSymbol: string, waypointSymbol: string): Promise<Waypoint> {
    const response = await axios.get<{ data: Waypoint; }>(`/systems/${systemSymbol}/waypoints/${waypointSymbol}`);
    return response.data.data;
}
