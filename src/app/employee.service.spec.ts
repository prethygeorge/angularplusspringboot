import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
