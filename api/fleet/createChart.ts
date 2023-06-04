import axios from 'axios';
import { Chart, Waypoint } from '../../schemas';

type CreateChartResponse = {
    data: {
        chart: Chart;
        waypoint: Waypoint;
    };
}

export async function createChartAsync(shipSymbol: string): Promise<CreateChartResponse['data']> {
    const response = await axios.post<CreateChartResponse>(`/my/ships/${shipSymbol}/chart`);
    return response.data.data;
}
