import axios from 'axios';
import { Agent } from '../../schemas';

export async function myAgentDetailsAsync(): Promise<Agent> {
    const response = await axios.get<{ data: Agent; }>('/my/agent');
    return response.data.data;
}
