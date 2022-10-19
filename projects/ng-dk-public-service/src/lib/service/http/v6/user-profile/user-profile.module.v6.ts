import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { UserProfileServiceV6 } from './user-profile.service.v6';

@NgModule({
  imports: [CommonModule]
})
export class UserProfileModuleV6 {

  constructor(@Optional() @SkipSelf() parentModule: UserProfileModuleV6) {
    if (parentModule) {
      throw new Error('UserProfileModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<UserProfileModuleV6> {
    return {
      ngModule: UserProfileModuleV6,
      providers: [UserProfileServiceV6]
    }
  }
}
