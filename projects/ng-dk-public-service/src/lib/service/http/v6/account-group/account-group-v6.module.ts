import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AccountGroupV6Service } from './account-group-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class AccountGroupV6Module {
  constructor(@Optional() @SkipSelf() parentModule: AccountGroupV6Module) {
    if (parentModule) {
      throw new Error('AccountGroupModuleV6 is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<AccountGroupV6Module> {
    return {
      ngModule: AccountGroupV6Module,
      providers: [AccountGroupV6Service],
    };
  }
}
