// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentLibraryModule, MyComponent } from 'component-library3';


@NgModule({
  declarations: [MyComponent] ,
  imports: [ComponentLibraryModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}