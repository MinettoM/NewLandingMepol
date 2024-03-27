import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { CompraIndustriaComponent } from "src/app/pages/compra-industria/compra-industria.component";
import { DisenoCocinasComponent } from './pages/diseno-cocinas/diseno-cocinas.component';
import { MarcasExclusivasComponent } from './pages/marcas-exclusivas/marcas-exclusivas.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: MainComponent,

            },
            { 
                path: 'compra-industria', 
                component: CompraIndustriaComponent,
              
            },
            { 
              path: 'diseno-cocinas', 
              component: DisenoCocinasComponent,
            
            },
            {
                path: 'marcas-exclusivas',
                component: MarcasExclusivasComponent,
            }
            ], 
            { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
