import axios from 'axios';
import { Meta, Ship } from '../../schemas';

type ListShipsResponse = {
    data: Array<Ship>;
    meta: Meta;
}

export async function listShipsAsync(limit: number, page: number): Promise<ListShipsResponse['data']> {
    const response = await axios.get<ListShipsResponse>('/my/ships', { params: { limit, page }});
    return response.data.data;
}
