import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupMembershipDTOV4, GroupMembershipSummaryDTOV4, RoleDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';

import { AbstractResourceService } from './../../abstract-resource.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class GroupMembershipServiceV4 extends AbstractResourceService<GroupMembershipDTOV4> {

	constructor(protected http: HttpClient) {
		super(http, 4, route.GROUP_MEMBERSHIPS.getPath);
	}

	public listSummaries(params?: {}): Observable<GroupMembershipSummaryDTOV4[]> {
		return this.http.get<GroupMembershipSummaryDTOV4[]>(`/${this.getVersionString()}/${route.GROUPS}`, { params });
	}

	public updateRole(role: RoleDTOV2, groupUuid: string, memberUuid: string): Observable<GroupMembershipDTOV4> {
		return this.http.post<GroupMembershipDTOV4>(
			`/${this.getVersionString()}/${route.GROUPS.getPath}/${groupUuid}/${memberUuid}/role`,
			role);
	}

}
