// app.module.ts
import { NgModule } from '@angular/core';
import { ComponentLibraryModule } from '../../../../dist/component-library/public-api';


@NgModule({
  imports: [ComponentLibraryModule],
})
export class AppModule {}