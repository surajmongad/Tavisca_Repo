import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from '../../services/auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockUsers = [
    {
        id: '1',
        email: 'smongad@gmail.com',
        password: 'suraj2020',
    },
];

describe('AuthService', () => {
    let authService: AuthService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService],
        });
        this.authService = TestBed.inject(AuthService);
    });

    beforeEach(inject(
        [AuthService, HttpTestingController],
        (serviceName, httpMockName) => {
            authService = serviceName;
            httpTestingController = httpMockName;
        }
    ));

    it('should be created', () => {
        expect(authService).toBeTruthy();
    });

    it('login: should return an array containing the valid user', () => {
        const mockCheckLoginUser = {
            id: '1',
            email: 'smongad@gmail.com',
            password: 'suraj2020',
        };
        this.authService.login({
            email: 'smongad@gmail.com',
            password: 'suraj2020',
        })
            .subscribe((user: any) => {
                expect(user).toBeDefined();
                expect(user.length).toBe(1);
                expect(user.id).toBe(1);
            });
        const req = httpTestingController.expectOne(
            'http://localhost:3000/register?email=' + mockCheckLoginUser.email + '&password=' + mockCheckLoginUser.password
        );
        req.flush(mockUsers);
        httpTestingController.verify();
    });

    it('signup: should return an array containing the valid user', () => {
        const mockCheckLoginUser = {
            name: 'suraj',
            email: 'smongad@gmail.com',
            password: 'suraj2020',
        };
        this.authService.signUp(mockCheckLoginUser).subscribe((user: any) => {
            expect(user).toBeDefined();
            expect(user.id).toBeDefined();
            expect(user.name).toBe(mockCheckLoginUser.name);
            expect(user.email).toBe(mockCheckLoginUser.email);
            expect(user.password).toBe(mockCheckLoginUser.password);
        });
        const req = httpTestingController.expectOne(
            'http://localhost:3000/register'
        );
        req.flush(mockUsers);
        httpTestingController.verify();
    });
});
