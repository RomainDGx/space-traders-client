import axios from 'axios';
import { Contract } from '../../schemas';

export async function getContract(contractId: string): Promise<Contract> {
    const response = await axios.get<{ data: Contract; }>(`/me/contracts/${contractId}`);
    return response.data.data;
}
