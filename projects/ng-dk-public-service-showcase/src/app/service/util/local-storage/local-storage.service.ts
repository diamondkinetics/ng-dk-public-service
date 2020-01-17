import { Injectable } from '@angular/core';

import { environment } from './../../../../environments/environment';

const JWT_KEY = 'token';

@Injectable()
export class LocalStorageService {
	constructor() {}

	public setItem(key: string, value: any) {
		localStorage.setItem(`${environment.storagePrefix}${key}`, JSON.stringify(value));
	}

	public getItem(key: string) {
		return JSON.parse(localStorage.getItem(`${environment.storagePrefix}${key}`));
	}

	public removeItem(key: string) {
		localStorage.removeItem(`${environment.storagePrefix}${key}`);
	}

	public getJwtKey() {
		return JWT_KEY;
	}

	testLocalStorage() {
		const testValue = 'testValue';
		const testKey = 'testKey';
		let retrievedValue: string;
		const errorMessage = 'localStorage did not return expected value';

		this.setItem(testKey, testValue);
		retrievedValue = this.getItem(testKey);
		this.removeItem(testKey);

		if (retrievedValue !== testValue) {
			throw new Error(errorMessage);
		}
	}
}
