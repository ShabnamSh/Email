import { NgModule ,ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./sidebar.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent],
  exports:[SidebarComponent]
})
export class SidebarModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SidebarModule,
    };
  }
 }
