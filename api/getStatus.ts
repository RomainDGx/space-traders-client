import { DateTime } from 'luxon';
import { API_URL } from './config';
import axios from 'axios';
import { AxiosHeaders } from 'axios';

export type ApplicationStatus = {
    status: string;
    version: string;
    resetDate: string;
    description: string;
    stats: {
        agents: number;
        ships: number,
        systemps: number;
        waypoints: number;
    };
    leaderboards: {
        mostCredits: Array<{
            agentSymbol: string;
            credits: number;
        }>;
        mostSubmittedCharts: Array<{
            agentSymbol: string;
            chartCount: number;
        }>
    };
    serverResets: {
        next: DateTime;
        frequency: string;
    };
    announcements: Array<{
        title: string;
        body: string;
    }>;
    links: Array<{
        name: string;
        url: string;
    }>;
}

const endpoint = API_URL;

export async function getStatusAsync(): Promise<ApplicationStatus> {
    const response = await axios.get<ApplicationStatus>(endpoint, { headers: new AxiosHeaders().setAccept('application/json') });
    if (response.status === 200) {
        response.data.serverResets.next = DateTime.fromISO(response.data.serverResets.next.toString());
        return response.data;
    }
    throw new Error(response.statusText);
}
