import {NgModule} from '@angular/core'
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser'
import { StencilWrapperModule } from '../../../stencil-wrapper/src/public-api';

@NgModule({
   declarations:[AppComponent],
   imports:[BrowserModule, StencilWrapperModule],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}