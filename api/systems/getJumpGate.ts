import axios from 'axios';
import { JumpGate } from '../../schemas';

export async function getJumpGateAsync(systemSymbol: string, waypointSymbol: string): Promise<JumpGate> {
    const response = await axios.get<{ data: JumpGate; }>(`/systems/${systemSymbol}/waypoints/${waypointSymbol}/jump-gate`);
    return response.data.data;
}
