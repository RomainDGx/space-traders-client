import axios from 'axios';
import { Cooldown, ScannedSystem } from '../../schemas';

type ScanSystemsResponse = {
    data: {
        cooldown: Cooldown;
        systems: ScannedSystem[];
    };
}

export async function scanSystemsAsync(shipSymbol: string): Promise<ScanSystemsResponse['data']> {
    const response = await axios.post<ScanSystemsResponse>(`/my/ships/${shipSymbol}/scan/systems`);
    return response.data.data;
}
