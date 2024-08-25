import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import Config from './config.json'

export const config = Config;

export interface ContextDataType {
	cookie: string
	loading: boolean
	emailSent: number
	connected: boolean
	createMilestoneStep: number
}

const initiContextData = {
	cookie: '',
	loading: false,
	connected: false,
	emailSent: 0,
	createMilestoneStep: 0
} as ContextDataType

interface ContextType extends ContextDataType {
	update(attrib: Partial<ContextDataType>): void
	showLoading(show: boolean): void
	setCookie(extra?: Partial<ContextDataType>): void
	logout(extra?: Partial<ContextDataType>): void
}

const Context = React.createContext<ContextType>(null!);

const getStore = (state: any) => {
	try {
		const buf = window.localStorage.getItem(config.appId);
		if (buf) {
			const json = JSON.parse(buf);
			for (let k in json) {
				if (state[k] !== undefined) {
					state[k] = json[k];
				}
			}
		}
		if (state.cookie === '') state.cookie = uuidv4()
		state.loading = false;
	} catch (err) {
		console.log(err);
	}
	return state;
}

const setStore = (state: any) => {
	window.localStorage.setItem(config.appId, JSON.stringify(state))
}

const setDocumentCookie = () => {
	const cookie = uuidv4();
	document.cookie = `${config.appId}=${cookie}; path=/; sameSite=true; expires=${new Date(+new Date() + 7 * 86400000).toUTCString()}`;
	return cookie;
}

export const Provider = ({ children }: any) => {
	const navigate = useNavigate()
	const [data, setData] = React.useState<ContextDataType>(getStore(initiContextData));


	const update = (attrib: Partial<ContextDataType>) => {
		const _data = { ...data, ...attrib }
		setData(_data)
		setStore(_data)
	}

	const setCookie = (extra?: Partial<ContextDataType>) => {
		const cookie = setDocumentCookie()
		update({ cookie, ...extra })
	}

	const logout = (extra?: Partial<ContextDataType>) => {
		setCookie({ /* account: null, */ ...extra })
		navigate('/')
	}

	const showLoading = (show: boolean) => update({ loading: show })
	return <Context.Provider value={{ ...data, setCookie, logout, showLoading, update }}>
		{children}
	</Context.Provider>
};

export default Context;
