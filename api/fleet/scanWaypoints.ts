import axios from 'axios';
import { Cooldown, ScannedWaypoint } from '../../schemas';

type ScanWaypointsResponse = {
    data: {
        cooldown: Cooldown;
        waypoints: ScannedWaypoint[];
    };
}

export async function scanWaypointsAsync(shipSymbol: string): Promise<ScanWaypointsResponse['data']> {
    const response = await axios.post<ScanWaypointsResponse>(`/my/ships/${shipSymbol}/scan/waypoints`);
    return response.data.data;
}
