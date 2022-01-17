import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExportEventSource, ExportEventType, ExportRequestDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractResourceService } from './../../abstract-resource.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class ExportRequestServiceV3 extends AbstractResourceService<ExportRequestDTOV3> {

	constructor(protected http: HttpClient) {
		super(http, 3, route.EXPORT_REQUESTS.getPath());
	}

	public getExportEventSources(): Observable<ExportEventSource[]> {
		return this.http.get<ExportEventSource[]>(`/${this.getVersionString()}/exportEventSources`);
	}

	public getExportEventTypes(): Observable<ExportEventType[]> {
		return this.http.get<ExportEventType[]>(`/${this.getVersionString()}/exportEventTypes`);
	}

	public getAllForUserAndGroup(groupUuid: string): Observable<ExportRequestDTOV3[]> {
		return this.http.get<ExportRequestDTOV3[]>(
			`/${this.getVersionString()}/${route.GROUPS}/${groupUuid}/exportRequests`);
	}

	public getPermissions(uuid: string): Observable<{}[]> {
		return this.http.get<{}[]>(`/${this.getVersionString()}/${this.endpoint}/${uuid}/permissions`);
	}

}
