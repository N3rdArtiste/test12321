interface Locals {
	userid: string;
}

interface IApiQueryConfig {
	url: string;
	method: 'get' | 'post' | 'put' | 'delete';
	query?: {
		[key: string]: any;
	};
}

interface IApiGetQuery extends IApiQueryConfig {
	preloaded?: boolean;
}
interface IApiDataQuery extends IApiQueryConfig {
	body: {
		[key: string]: any;
	};
}

interface IApiExecuteQuery {
	url: string;
	query?: {
		[key: string]: any;
	};
	body?: {
		[key: string]: any;
	};
}
