import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DynamicSessionResultResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DynamicSessionResultV6Service {
  constructor(private httpClient: HttpClient) { }

  public getDynamicSessionResultForUser(
    userUuid: string,
    dynamicSessionUuid: string
  ): Observable<DynamicSessionResultResponseV6> {
    return this.httpClient.get<DynamicSessionResultResponseV6>(
      `/v6/users/${userUuid}/dynamicSessions/${dynamicSessionUuid}/result`
    );
  }
}
