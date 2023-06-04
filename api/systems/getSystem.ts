import axios from 'axios';
import { System } from '../../schemas';

export async function getSystemAsync(systemSymbol: string): Promise<System> {
    const response = await axios.get<{ data: System; }>(`/systems/${systemSymbol}`);
    return response.data.data;
}
