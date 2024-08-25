import config from "./config.json";
const storeName = 'files'
let db: any;

export const initDatabase = (): Promise<boolean> => {
	return new Promise(resolve => {
		const request = window.indexedDB.open(config.appId, 1);

		request.onsuccess = (_e: Event) => {
			db = request.result;
			resolve(true)
			console.log("indexeddb - onsuccess")
		};

		request.onupgradeneeded = (e: any) => {
			const db = e.target.result;
			db.onerror = (_e: Event) => {
				console.log("onupgradeneeded error")
				//   note.innerHTML += "<li>Error loading database.</li>";
			};
			// Create an objectStore for this database
			db.createObjectStore(storeName, { keyPath: "_id" });
			// objectStore.createIndex("hours", "hours", { unique: false });
			// objectStore.createIndex("minutes", "minutes", { unique: false });
			// objectStore.createIndex("day", "day", { unique: false });
			// objectStore.createIndex("month", "month", { unique: false });
			// objectStore.createIndex("year", "year", { unique: false });
			// objectStore.createIndex("notified", "notified", { unique: false });
			console.log("indexeddb - onupgradeneeded")
		};

		request.onerror = (_e) => resolve(false);
	})
}

export const addRecord = (_id: string, raw: string): Promise<boolean> => {
	return new Promise(resolve => {
		const transaction = db.transaction(storeName, 'readwrite');
		transaction.oncomplete = (_e: Event) => {
			console.log('All the files added successfully')
			resolve(true)
		};

		transaction.onerror = (_e: Event) => {
			console.log('new record occured error', _e)
			resolve(false)
		};

		const objectStore = transaction.objectStore(storeName);
		const request = objectStore.put({ _id, raw });

		request.onsuccess = () => {
			console.log(`New record added`);
			resolve(true)
		}

		request.onerror = (err: any) => {
			console.error(`Error to add new record: ${err}`)
			resolve(false)
		}
	})
}

export const getRecord = (_id: string): Promise<string | null> => {
	return new Promise(resolve => {
		// open a read/write db transaction, ready for retrieving the data
		const transaction = db.transaction([storeName], "readwrite");

		// report on the success of the transaction completing, when everything is done
		transaction.oncomplete = (_event: Event) => {
			// note.innerHTML += "<li>Transaction completed.</li>";
		};

		transaction.onerror = (_event: Event) => {
			// note.innerHTML += `<li>Transaction not opened due to error: ${transaction.error}</li>`;
		};

		// create an object store on the transaction
		const objectStore = transaction.objectStore(storeName);

		// Make a request to get a record by key from the object store
		const request = objectStore.get(_id);

		request.onsuccess = (_e: Event) => {
			// report the success of our request
			// note.innerHTML += "<li>Request successful.</li>";

			// const myRecord = request.result;
			resolve(request.result?.raw);
		};
		request.onerror = (_e: Event) => {
			// report the success of our request
			// note.innerHTML += "<li>Request successful.</li>";

			// const myRecord = request.result;
			resolve(null);
		};
	})
}

export const deleteRecord = (_id: string): Promise<boolean> => {
	return new Promise(resolve => {
		const tx = db.transaction([storeName], "readwrite");
		tx.objectStore(storeName).delete(_id);
		tx.oncomplete = () => {
			console.log("delete record success #" + _id)
			resolve(true);
		}
		tx.onerror = () => {
			console.log("delete record failed #" + _id)
			resolve(false);
		}
	})
}