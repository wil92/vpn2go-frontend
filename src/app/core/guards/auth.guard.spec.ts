import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';

class AuthServiceStub {
}

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    const router = {} as Router;
    guard = new AuthGuard(new AuthServiceStub() as any, router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
