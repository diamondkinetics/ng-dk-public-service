import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GroupDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { ResourceMappings as route } from '@lib/enum/resource-mappings.enum';
import { AbstractResourceService } from '@lib/service/http/abstract-resource.service';

@Injectable({ providedIn: 'root' })
export class GroupServiceV2 extends AbstractResourceService<GroupDTOV2> {

	constructor(protected http: HttpClient) {
		super(http, 2, route.GROUPS);
	}

	/**
	 * Searches groups by name. Does not include groups the acting user is a member of.
	 *
	 * @param   query The search query to find groups by.
	 *
	 * @returns       An observable array of GroupDTOV2 objects.
	 */
	public searchGroups(query: string): Observable<GroupDTOV2[]> {
		const params = { q: query };

		return this.http.get<GroupDTOV2[]>(`${this.getVersionString()}/${this.endpoint}`, { params });
	}

	/**
	 * Uploads an image for a group and saves the URL for display. The acting user must have group write access.
	 *
	 * @param   image     A blob of the image.
	 * @param   groupUuid The UUID of the group the image will be associated with.
	 * @param   fileName  The name of the file, include the file extension or it will be .blob.
	 *
	 * @returns           A GroupDTOV2 object with the new groupImageUrl populated.
	 */
	public uploadGroupImage(image: Blob, groupUuid: string, fileName: string): Observable<GroupDTOV2> {
		const formData = new FormData();
		formData.append('image', image, fileName);

		return this.http.post<GroupDTOV2>(
			`${this.getVersionString()}/${this.endpoint}/${groupUuid}/groupImage`,
			formData);
	}

}
