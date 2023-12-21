import IHeaders from '../../fetch/types/IHeaders.js';

export default interface ICachableResponse {
	status: number;
	statusText: string;
	url: string;
	headers: IHeaders;
	body: Buffer | null;
	waitingForBody: boolean;
}