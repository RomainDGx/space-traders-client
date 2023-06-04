import axios from 'axios';
import { API_URL, useToken } from './axiosConfig';
import { Agent } from '../schemas/Agent';
import { Faction } from '../schemas/Faction';
import { Ship } from '../schemas/Ship';
import { Contract } from '../schemas';

export type RegisterResponse = {
    data: {
        token: string;
        agent: Agent;
        contract: Contract;
        faction: Faction;
        ship: Ship;
    };
}

export async function registerNewAgentAsync(symbol: string, faction: 'COSMIC' | 'VOID' | 'GALACTIC' | 'QUANTUM' | 'DOMINION', email?: string): Promise<RegisterResponse> {

    const response = await axios.post<RegisterResponse>(API_URL + '/register', { symbol, faction, ...email && { email } });

    if (response.status !== 200) {
        throw new Error(response.statusText);
    }

    useToken(response.data.data.token);

    return response.data;
}
