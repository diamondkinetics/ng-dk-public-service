import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AbstractSyncableDTO } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractResourceService } from '~lib/service/http/abstract-resource.service';
import { RequestInterceptor } from '~test/util/request-interceptor/request.interceptor';
import { environment } from '~test/environments/environment';

export abstract class ResourceServiceTestSuite<T extends AbstractSyncableDTO, S extends AbstractResourceService<T>> {

	protected service: S;
	private httpTestingController: HttpTestingController;

	constructor(
		private readonly suiteName: string,
		private readonly resourceRoute: string,
		private readonly resourceClass: string,
		protected mockResource: T
	) {}

	public run(): void {
		describe(this.suiteName, () => {
		
			const dtoMatcher = (result: T) => expect(this.mockResource).toEqual(result);
			const uuidMatcher = (uuid: string) => expect(this.mockResource.uuid).toEqual(uuid);
			const dtoDeletedMatcher = (dto: T) => expect(dto.deleted).toEqual(true);
			const listMatcher = (dtoList: T[]) => expect([this.mockResource, this.mockResource, this.mockResource])
				.toEqual(dtoList);
			const postMatcher = (method: string) => expect(method).toEqual('POST');
			const getMatcher = (method: string) => expect(method).toEqual('GET');
			const putMatcher = (method: string) => expect(method).toEqual('PUT');
			const deleteMatcher = (method: string) => expect(method).toEqual('DELETE');
			
			beforeEach(() => {
				TestBed.configureTestingModule({
					providers: this.getProviders(),
					imports: [HttpClientTestingModule]
				});
		
				this.httpTestingController = TestBed.inject(HttpTestingController);
				this.service = this.getInjectedService();
			});
		
			afterEach(() => {
				this.httpTestingController.verify();
			});
		
			it('Should be created', () => {
				expect(this.getInjectedService()).toBeTruthy();
			});
		
			describe('create()', () => {
				it(`Should POST the correct ${this.resourceClass}`, () => {
					this.testCreate(dtoMatcher, postMatcher);
				});
			});
		
			describe('readForActingUser()', () => {
				it(`Should GET the correct ${this.resourceClass}`, () => {
					this.testReadForActingUser(dtoMatcher, getMatcher);
				});
			});
		
			describe('read()', () => {
				it(`Should GET the correct ${this.resourceClass}`, () => {
					this.testRead(uuidMatcher, getMatcher);
				});
			});
		
			describe('update()', () => {
				it(`Should PUT the correct ${this.resourceClass}`, () => {
					this.testUpdate(dtoMatcher, putMatcher);
				});
			});
		
			describe('delete()', () => {
				it(`Should DELETE the correct ${this.resourceClass}`, () => {
					this.testDelete(dtoDeletedMatcher, deleteMatcher);
				});
			});
		
			describe('list()', () => {
				it(`Should GET the correct ${this.resourceClass} collection`, () => {
					this.testList(listMatcher, getMatcher);
				});
			});
		
		});
	}

	private testCreate(dtoMatcher: (created: T) => void, requestMatcher: (method: string) => void): void {
		this.service.create(this.mockResource).subscribe((created: T): void => {
			dtoMatcher(created);
		});

		const req = this.httpTestingController.expectOne(
			`${environment.apiUrl}/${this.service.getVersionString()}/${this.resourceRoute}`
		);
		requestMatcher(req.request.method);
		req.flush(this.mockResource);
	}

	private testReadForActingUser(dtoMatcher: (created: T) => void, requestMatcher: (method: string) => void): void {
		this.service.readForActingUser().subscribe((dto: T): void => {
			dtoMatcher(dto);
		});

		const req = this.httpTestingController.expectOne(
			`${environment.apiUrl}/${this.service.getVersionString()}/${this.resourceRoute}`
		);
		requestMatcher(req.request.method);
		req.flush(this.mockResource);
	}

	private testRead(uuidMatcher: (uuid: string) => void, requestMatcher: (method: string) => void): void {
		this.service.read(this.mockResource.uuid).subscribe((dto: T): void => {
			uuidMatcher(dto.uuid);
		});

		const req = this.httpTestingController.expectOne(
			`${environment.apiUrl}/${this.service.getVersionString()}/${this.resourceRoute}/${this.mockResource.uuid}`
		);
		requestMatcher(req.request.method);
		req.flush(this.mockResource);
	}

	private testUpdate(dtoMatcher: (updated: T) => void, requestMatcher: (method: string) => void): void {
		this.service.update(this.mockResource).subscribe((dto: T): void => {
			dtoMatcher(dto);
		});

		const req = this.httpTestingController.expectOne(
			`${environment.apiUrl}/${this.service.getVersionString()}/${this.resourceRoute}/${this.mockResource.uuid}`
		);
		requestMatcher(req.request.method);
		req.flush(this.mockResource);
	}

	private testDelete(deletedMatcher: (deleted: T) => void, requestMatcher: (method: string) => void): void {
		const deleted: T = {
			...this.mockResource,
			deleted: true
		};

		this.service.delete(this.mockResource.uuid).subscribe((dto: T): void => {
			deletedMatcher(dto);
		});

		const req = this.httpTestingController.expectOne(
			`${environment.apiUrl}/${this.service.getVersionString()}/${this.resourceRoute}/${deleted.uuid}`
		);
		requestMatcher(req.request.method);
		req.flush(deleted);
	}

	private testList(listMatcher: (dtoList: T[]) => void, requestMatcher: (method: string) => void): void {
		const dtoList: T[] = [
			this.mockResource,
			this.mockResource,
			this.mockResource
		];

		this.service.list().subscribe((dtoResults: T[]): void => {
			listMatcher(dtoResults);
		});

		const req = this.httpTestingController.expectOne(
			`${environment.apiUrl}/${this.service.getVersionString()}/${this.resourceRoute}`
		);
		requestMatcher(req.request.method);
		req.flush(dtoList);
	}

	protected getRequestInterceptorProvider(): Provider {
		return {
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptor,
			multi: true
		};
	}

	protected abstract getInjectedService(): S;
	protected abstract getProviders(): Provider[];

}
