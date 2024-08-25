import { toast } from 'react-toastify';
import { NotificationManager } from 'react-notifications';

export const showToast = (html: string) => {
	toast(html, {
		position: "top-right",
		autoClose: 3000,
	});
}

export const showAlert = (type: "info" | "success" | "warning" | "error" = "info", text: string) => {
	switch (type) {
		case 'info':
			NotificationManager.info(text);
			break;
		case 'success':
			NotificationManager.success(text);
			break;
		case 'warning':
			NotificationManager.warning(text);
			break;
		case 'error':
			NotificationManager.error(text);
			break;
	}
}

export const loadExternal = (key: string, uri: string): Promise<boolean> => {
	if (key && key in window) return Promise.resolve(true)
	return new Promise(resolve => {
		const script = document.createElement("script");
		script.src = uri
		script.async = true;
		script.onload = () => resolve(true)
		document.body.appendChild(script);
	})
}

export const getUserIdNumber = (uid: string) => {
	return (Number.parseInt((uid?.substring(1) || '0'), 16) || 0)
}

export const NF = (n: string | number, p = 0) => {
	if (p === 0) return Number(n).toLocaleString('en')
	const x = String(n).split('.')
	const s = Number(x[1] || 0).toFixed(p)
	return Number(x[0]).toLocaleString('en') + s.slice(s.lastIndexOf('.'))
}

export const sliceText = (text: string, len: number) => {
	if (!text) return ''
	return (text.length > len ? text.slice(0, len) + '...' : text)
}

export const currentTime = () => Math.round(+new Date().getTime() / 1e3)
export const isHex = (hex: string) => /^0x[a-f0-9A-F]+$/.test(hex)
export const validateEmail = (email: string): boolean => email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
export const validateUsername = (username: string): boolean => /^[a-zA-Z0-9]{6,20}$/.test(username);

export const emailEllipse = (email: string) => {
	if (!email) return '';
	const p = email.lastIndexOf('@');
	return email.slice(0, 3) + '***@' + (p > 8 ? email.slice(p + 1) : email.slice(-8));
}

export const copyToClipboard = (text: string) => {
	var textField = document.createElement('textarea')
	textField.innerText = text
	document.body.appendChild(textField)
	textField.select()
	document.execCommand('copy')
	textField.remove()
};

export const getFileContents = (file: File, format?: 'dataUri' | 'binary'): Promise<ArrayBuffer | string | null> => {
	return new Promise(resolve => {
		let reader = new FileReader();
		reader.onloadend = e => resolve(!!e.target?.result ? e.target?.result as ArrayBuffer : null);
		reader.onabort = () => resolve(null)
		reader.onerror = () => resolve(null)
		if (format === 'binary') {
			reader.readAsArrayBuffer(file);
		} else {
			reader.readAsDataURL(file);
		}
	})
}

export const getImageContentFromUrl = (url: string | null): Promise<string | null> => {
	return new Promise(async resolve => {
		if (!url) return resolve(null);
		console.log(url)
		const img = new Image();
		img.setAttribute('crossOrigin', 'anonymous');
		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;
			const ctx = canvas.getContext("2d");
			ctx?.drawImage(img, 0, 0);
			const dataURL = canvas.toDataURL("image/png");
			resolve(dataURL)
		}
		img.src = url
		// return;
		// const config = {
		// 	headers: {
		// 	  "Access-Control-Allow-Origin": "*",
		// 	  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		// 	  "Access-Control-Expose-Headers": "Access-Control-*",
		// 	  "Access-Control-Allow-Headers": "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept",
		// 	  'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
		// 	},
		// 	responseType: 'arraybuffer'
		// };
		// const response = await axios(url, {...config, responseType: 'arraybuffer'})
		// const buffer64 = Buffer.from('', 'binary').toString('base64')
		// resolve(buffer64)
	})
}


export const getTotalPage = (count: number, perpage: number) => {
	return Math.ceil(count / perpage);
}


export const getUpdatedTime = (origin: string | undefined, y: number | string, m: number | string, d: number | 'start' | 'end') => {
	let i = new Date(origin || '');
	if (isNaN(i as any)) i = new Date();
	let yy = Number(y || i.getFullYear());
	let mm = Number(m || i.getMonth()) + 1;
	let dd = 0;
	if (d === 'start') {
		dd = 1;
	} else if (d === 'end') {
		const date = new Date(yy, mm, 0);
		dd = date.getDate();
	} else {
		dd = d;
	}
	return [yy, ('0' + mm).slice(-2), ('0' + dd).slice(-2)].join('-');
}

export const formatBytes = (bytes: any, decimals = 2) => {
	if (!+bytes) return '0 Bytes';
	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}
