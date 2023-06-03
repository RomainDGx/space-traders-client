import { DateTime } from 'luxon';
import axios from 'axios';
import { stringToDateTime } from './util';

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

export async function getStatusAsync(): Promise<ApplicationStatus> {

    const response = await axios.get<ApplicationStatus>('/');
    response.data.serverResets.next = stringToDateTime(response.data.serverResets.next);
    return response.data;
}
