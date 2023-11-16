import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwingPerformanceComparisonResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwingPerformanceSummaryV6Service {
  constructor(private httpClient: HttpClient) {}

  public read(userUuid: string): Observable<SwingPerformanceComparisonResponseV6> {
    return this.httpClient.get<SwingPerformanceComparisonResponseV6>(
      `/v6/${ResourceMapping.USERS}/${userUuid}/${ResourceMapping.SWING_PERFORMANCE_SUMMARY}`
    );
  }
}
