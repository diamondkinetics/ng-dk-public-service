import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GroupSummaryDTOV4, GroupDTOV4 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractResourceService } from './../../abstract-resource.service';
import { ResourceMapping as route } from './../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class GroupServiceV4 extends AbstractResourceService<GroupDTOV4> {

	constructor(protected http: HttpClient) {
		super(http, 4, route.GROUPS.getPath);
	}

	public uploadGroupImage(groupUuid: string, file: Blob, fileName: string): Observable<GroupDTOV4> {
		const formData = new FormData();
		formData.append('image', file, fileName);

		return this.http.post<GroupDTOV4>(`/${this.getVersionString()}/${route.GROUPS}/${groupUuid}/groupImage`, formData);
	}

	public searchGroups(q: string): Observable<GroupSummaryDTOV4[]> {
		const params = { q };

		return this.http.get<GroupSummaryDTOV4[]>(`/${this.getVersionString()}/${route.GROUPS_SEARCH}`, { params });
	}

}
