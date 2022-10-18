import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AccountGroupServiceV6 } from './account-group.service.v6';

@NgModule({
  imports: [CommonModule]
})
export class AccountGroupModuleV6 {

  constructor(@Optional() @SkipSelf() parentModule: AccountGroupModuleV6) {
    if (parentModule) {
      throw new Error('AccountGroupModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<AccountGroupModuleV6> {
    return {
      ngModule: AccountGroupModuleV6,
      providers: [AccountGroupServiceV6]
    }
  }

}
