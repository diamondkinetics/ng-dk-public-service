import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ActivityDefinitionV6Service } from './activity-definition-v6.service';

@NgModule({
  imports: [CommonModule],
})
export class ActivityDefinitionV6Module {
  constructor(@Optional() @SkipSelf() parentModule: ActivityDefinitionV6Module) {
    if (parentModule) {
      throw new Error('ActivityDefinitionV6Module is already loaded. Import it in ServiceModuleV6 only.');
    }
  }

  public static forRoot(): ModuleWithProviders<ActivityDefinitionV6Module> {
    return {
      ngModule: ActivityDefinitionV6Module,
      providers: [ActivityDefinitionV6Service],
    };
  }
}
