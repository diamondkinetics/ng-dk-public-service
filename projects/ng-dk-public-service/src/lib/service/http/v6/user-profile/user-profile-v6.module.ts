import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { UserProfileV6Service } from './user-profile-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class UserProfileV6Module {
  constructor(@Optional() @SkipSelf() parentModule: UserProfileV6Module) {
    if (parentModule) {
      throw new Error('UserProfileModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<UserProfileV6Module> {
    return {
      ngModule: UserProfileV6Module,
      providers: [UserProfileV6Service],
    };
  }
}
