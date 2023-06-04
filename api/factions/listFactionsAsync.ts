import axios from 'axios';
import { Faction, Meta } from '../../schemas';

type ListFactionsResponse = {
    data: Array<Faction>;
    meta: Meta;
}

export async function listFactionsAsync(limit: number, page: number): Promise<Array<Faction>> {
    const response = await axios.get<ListFactionsResponse>('/factions', { params: { limit, page } });
    return response.data.data;
}
