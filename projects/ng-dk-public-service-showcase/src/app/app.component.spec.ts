import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BattingSessionComponent } from './component/batting-session/batting-session.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './service/util/local-storage/local-storage.service';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				BattingSessionComponent
			],
			imports: [
				ReactiveFormsModule,
				HttpClientModule
			],
			providers: [
				LocalStorageService
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'ng-dk-public-service-showcase'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('ng-dk-public-service-showcase');
	});
});
