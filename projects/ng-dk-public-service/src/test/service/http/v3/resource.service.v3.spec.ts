import { HTTP_INTERCEPTORS, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AbstractSyncableDTO } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractResourceService } from '~lib/service/http/abstract-resource.service';
import { RequestInterceptor } from '~test/util/request-interceptor/request.interceptor';
import { environment } from '~test/environments/environment';

export abstract class ResourceServiceV3Suite<T extends AbstractSyncableDTO, S extends AbstractResourceService<T>> {

	constructor(
		private readonly suiteName: string,
		private readonly resourceRoute: string,
		private readonly serviceProvider: S
	) {}

	protected getSuiteName(): string {
		return this.suiteName;
	}

	protected getResourceRoute(): string {
		return this.resourceRoute;
	}

	protected getServiceProvider(): S {
		return this.serviceProvider;
	}

	protected run(): void {
		describe(this.suiteName, () => {
			let httpTestingController: HttpTestingController;
			let service: S;
			let mockResource: T;

			beforeEach(() => {
				TestBed.configureTestingModule({
					providers: [
						this.serviceProvider,
						this.getRequestInterceptorProvider()
					],
					imports: [HttpClientTestingModule]
				})
			});

			afterEach(() => {
				httpTestingController.verify();
			});

			it('Should be created', () => {
				expect(service).toBeTruthy();
			});

			describe('create()', () => {
				it('Should POST the correct DTO', () => {
					service.create(mockResource).subscribe((created: T): void => {
						expect(mockResource).toEqual(created);
					});

					const req = httpTestingController.expectOne(
						`${environment.apiUrl}/${service.getVersionString()}/${this.resourceRoute}`
					);
					expect(req.request.method).toEqual('POST');
					req.flush(mockResource);
				});
			});

			describe('readForActingUser()', () => {
				it('Should GET the correct DTO', () => {
					service.readForActingUser().subscribe((dto: T): void => {
						expect(mockResource).toEqual(dto);
					});

					const req = httpTestingController.expectOne(
						`${environment.apiUrl}/${service.getVersionString()}/${this.resourceRoute}`
					);
					expect(req.request.method).toEqual('GET');
					req.flush(mockResource);
				})
			});

			describe('read()', () => {

			});

			describe('update()', () => {

			});

			describe('delete()', () => {

			});

			describe('list()', () => {

			});
		});
	}

	protected getProviders(): Provider[] {
		return [, this.getRequestInterceptorProvider()];
	}

	protected getRequestInterceptorProvider(): Provider {
		return {
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptor,
			multi: true
		};
	}

	protected abstract getMock(): T;

}
