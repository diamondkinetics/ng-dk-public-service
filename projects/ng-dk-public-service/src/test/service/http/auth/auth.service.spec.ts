import {
  HTTP_INTERCEPTORS,
  HttpResponse,
  HttpHeaders,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { RegisterWithProfileRequestDTOV2, UserProfileDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { RequestInterceptor } from '~test/util/request-interceptor/request.interceptor';
import { environment } from '~test/environments/environment';
import { AuthService } from '~lib/service/http/auth/auth.service';
import { mockRegisterWithProfileRequestDTOV2 } from '~test/mock/v2/register-with-profile-request.dto.v2.mock';
import { mockUserProfileDTOV2 } from '~test/mock/v2/user-profile.dto.v2.mock';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;
  let service: AuthService;
  let mockRegisterRequest: RegisterWithProfileRequestDTOV2;
  let mockProfile: UserProfileDTOV2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: RequestInterceptor,
          multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(AuthService);
    mockRegisterRequest = mockRegisterWithProfileRequestDTOV2();
    mockProfile = mockUserProfileDTOV2();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login()', () => {
    it('Should POST the correct auth data and return an X-AUTH-TOKEN', () => {
      const mockXAuthToken = 'thisIsSuperSecretGuys';
      const mockResponseHeaders: HttpHeaders = new HttpHeaders({
        'X-AUTH-TOKEN': mockXAuthToken,
      });
      const mockResponse: HttpResponse<any> = new HttpResponse<any>({
        body: 'Ur logged in mayne',
        headers: mockResponseHeaders,
      });

      service.login('usernameOrEmail', 'password').subscribe((xAuthToken: string) => {
        expect(xAuthToken).toEqual(mockXAuthToken);
      });

      const req = httpTestingController.expectOne(`${environment.apiUrl}/api/user/login`);
      expect(req.request.method).toEqual('POST');
      req.flush(mockResponse.body, { headers: mockResponse.headers });
    });
  });

  describe('logout()', () => {
    it('Should POST nothing and return an HttpResponse', () => {
      const mockResponse: HttpResponse<{}> = new HttpResponse<{}>({});

      service.logout().subscribe((response: HttpResponse<{}>) => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(`${environment.apiUrl}/api/user/logout`);
      expect(req.request.method).toEqual('POST');
      req.flush(mockResponse);
    });
  });
});
