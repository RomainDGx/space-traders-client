import axios from 'axios';
import { Contract, Meta } from '../../schemas';

type ListContractsResponse = {
    data: Array<Contract>;
    meta: Meta;
}

export async function listContractsAsync(limit: number, page: number): Promise<Array<Contract>> {
    const response = await axios.get<ListContractsResponse>('/my/contracts', { params: { limit, page } });
    return response.data.data;
}
