import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { UserToUserConnectionV6Service } from './user-to-user-connection-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class UserToUserConnectionV6Module {
  constructor(@Optional() @SkipSelf() parentModule: UserToUserConnectionV6Module) {
    if (parentModule) {
      throw new Error('UserToUserConnectionModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<UserToUserConnectionV6Module> {
    return {
      ngModule: UserToUserConnectionV6Module,
      providers: [UserToUserConnectionV6Service],
    };
  }
}
