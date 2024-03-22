import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { CompraIndustriaComponent } from "src/app/pages/compra-industria/compra-industria.component";
import { DisenoCocinasComponent } from './pages/diseno-cocinas/diseno-cocinas.component';

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
            ], 
            { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
