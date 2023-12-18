import IHeaders from '../../fetch/types/IHeaders.js';

export default interface ICachablePreflightRequest {
	url: string;
	method: string;
	headers: IHeaders;
}
