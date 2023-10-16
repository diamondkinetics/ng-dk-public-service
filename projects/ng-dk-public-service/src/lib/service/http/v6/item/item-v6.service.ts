import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvatarCollectionResponseV6 } from '@diamondkinetics/dk-public-dto-ts';

@Injectable({providedIn: 'root'})
export class ItemV6Service {
  constructor(private httpClient: HttpClient) {}

  public getAllAvatars(page = 0, size = 20): Observable<AvatarCollectionResponseV6> {
    return this.httpClient.get<AvatarCollectionResponseV6>('/v6/avatars');
  }
}
