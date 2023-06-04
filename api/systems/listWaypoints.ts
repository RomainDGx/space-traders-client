import axios from 'axios';
import { Meta, Waypoint } from '../../schemas';

type ListWaypointsResponse = {
    data: Array<Waypoint>;
    meta: Meta;
}

export async function listWaypointsAsync(systemSymbol: string, limit: number, page: number): Promise<ListWaypointsResponse['data']> {
    const response = await axios.get<ListWaypointsResponse>(`/systems/${systemSymbol}/waypoints`, { params: { limit, page }});
    return response.data.data;
}
