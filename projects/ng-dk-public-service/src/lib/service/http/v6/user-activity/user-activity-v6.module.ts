import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { UserActivityV6Service } from './user-activity-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class UserActivityV6Module {
  constructor(@Optional() @SkipSelf() parentModule: UserActivityV6Module) {
    if (parentModule) {
      throw new Error('UserActivityV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<UserActivityV6Module> {
    return {
      ngModule: UserActivityV6Module,
      providers: [UserActivityV6Service],
    };
  }
}
