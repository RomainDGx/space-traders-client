//#region Register

import axios, { AxiosHeaders } from 'axios';
import { API_URL } from './config';
import { Agent } from '../schemas/Agent';
import { Faction } from '../schemas/Faction';
import { Ship } from '../schemas/Ship';

export type RegisterResponse = {
    data: {
        token: string;
        agent: Agent;
        faction: Faction;
        ship: Ship;
    }
}

export async function registerNewAgentAsync(symbol: string, faction: 'COSMIC' | 'VOID' | 'GALACTIC' | 'QUANTUM' | 'DOMINION', email: string): Promise<string> {
    const response = await axios.post<string>(
        API_URL + 'register',
        { symbol, faction, email },
        { headers: new AxiosHeaders().setAccept('application/json').setContentType('application/json') }
    );
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return response.data;
}

//#endregion

