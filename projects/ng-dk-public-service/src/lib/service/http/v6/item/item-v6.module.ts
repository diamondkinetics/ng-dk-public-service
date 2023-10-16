import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ItemV6Service } from './item-v6.service';

@NgModule({
  imports: [CommonModule]
})
export class ItemV6Module {
  constructor(@Optional() @SkipSelf() parentModule: ItemV6Module) {
    if (parentModule) {
      throw new Error('ItemV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  static forRoot(): ModuleWithProviders<ItemV6Module> {
    return {
      ngModule: ItemV6Module,
      providers: [ItemV6Service]
    }
  }
}
