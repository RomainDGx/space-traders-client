import axios from 'axios';
import { Meta, System } from '../../schemas';

type ListSystemsResponse = {
    data: Array<System>;
    meta: Meta;
}

export async function listSystempsAsync(limit: number, page: number): Promise<ListSystemsResponse['data']> {
    const response = await axios.get<ListSystemsResponse>('/systems', { params: { limit, page } });
    return response.data.data;
}
