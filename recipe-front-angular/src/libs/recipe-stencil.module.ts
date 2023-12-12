import { NgModule } from "@angular/core";

import {defineCustomElements} from '../../../recipe-stencil/loader';

import {MyCard} from './stencil-generated/proxies'

defineCustomElements()

@NgModule({
    imports: [],
    exports: [MyCard],
    declarations: [MyCard],
})
export class RecipeStencilModule {}