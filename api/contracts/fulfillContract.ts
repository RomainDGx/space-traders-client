import axios from 'axios';
import { Agent, Contract } from '../../schemas';

type FulfillContractResponse = {
    data: {
        agent: Agent;
        contract: Contract;
    };
}

export async function fulfillContractAsync(contractId: string): Promise<FulfillContractResponse['data']> {
    const response = await axios.post<FulfillContractResponse>(`my/contracts/${contractId}/fulfill`);
    return response.data.data;
}
