import { HttpClient } from '@angular/common/http';
import { AbstractSyncableDTOV2, AbstractSyncableDTOV3, AbstractSyncableDTOV4 } from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';

import { ResourceMapping as routes } from '~lib/enum/resource-mapping.enum';

export abstract class AbstractResourceService<
	T extends AbstractSyncableDTOV2|AbstractSyncableDTOV3|AbstractSyncableDTOV4>
{

	constructor(protected http: HttpClient, protected version: number, protected endpoint: string) {}

	public create(item: T, params?: {}): Observable<T> {
		return this.http.post<T>(`/${this.getVersionString()}/${this.endpoint}`, item, { params });
	}

	public readForActingUser(params?: {}): Observable<T> {
		return this.http.get<T>(`/${this.getVersionString()}/${this.endpoint}`, { params });
	}

	public read(uuid: string, params?: {}): Observable<T> {
		return this.http.get<T>(`/${this.getVersionString()}/${this.endpoint}/${uuid}`, { params });
	}

	public update(item: T, params?: {}): Observable<T> {
		return this.http.put<T>(`/${this.getVersionString()}/${this.endpoint}/${item.uuid}`, item, { params });
	}

	public delete(uuid: string, params?: {}): Observable<T> {
		return this.http.delete<T>(`/${this.getVersionString()}/${this.endpoint}/${uuid}`, { params });
	}

	public list(params?: {}): Observable<T[]> {
		return this.http.get<T[]>(`/${this.getVersionString()}/${this.endpoint}`, { params });
	}

	public listForUser(userUuid: string, params?: {}): Observable<T[]> {
		return this.http.get<T[]>(
			`/${this.getVersionString()}/${routes.USERS.getPath()}/${userUuid}/${this.endpoint}`,
			{ params }
		);
	}

	public getVersionString(): string {
		return `v${this.version}`;
	}

}
