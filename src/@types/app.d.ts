declare module 'react-notifications';

declare interface Window {
	connector: IConnector
	google: any
	clipboardData: any
}

declare interface RpcRequestType {
	jsonrpc: "2.0"
	method: string
	params: Array<any>
	id: string | number
}

declare interface RpcResponseType {
	jsonrpc: "2.0"
	id: string | number
	result?: any
	error?: string
}

declare interface WebFileType {
	mime: string
	data: Buffer
}

declare interface ServerResponse {
	result?: any
	error?: string | number
}

declare type OrderType = 'all' | 'active' | 'missing' | 'delivered' | 'disputed' | 'completed' | 'cancelled'
// declare type ORDER_MISSING = 0
// declare type ORDER_ACTIVE = 1
// declare type ORDER_DELIVERED = 2
// declare type ORDER_DISPUTED = 3
// declare type ORDER_COMPLETED = 4
// declare type ORDER_CANCELLED = 5
declare type OrderDetailType = 'activity' | 'details' | 'requirements' | 'delivery'

