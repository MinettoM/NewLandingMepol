import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPreviewComponent } from 'src/app/components/product-preview/product-preview.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CompraIndustriaComponent } from 'src/app/pages/compra-industria/compra-industria.component';
import { OfertasComponent } from 'src/app/pages/ofertas/ofertas.component';
import { MarcasExclusivasComponent } from 'src/app/pages/marcas-exclusivas/marcas-exclusivas.component';
import { RecienLlegadosComponent } from 'src/app/pages/recien-llegados/recien-llegados.component';
import { ServicioTecnicoComponent } from 'src/app/pages/servicio-tecnico/servicio-tecnico.component';
import { DisenoCocinasComponent } from 'src/app/pages/diseno-cocinas/diseno-cocinas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPreviewComponent,
    HeaderComponent,
    FooterComponent,
    CompraIndustriaComponent,
    OfertasComponent,
    MarcasExclusivasComponent,
    RecienLlegadosComponent,
    ServicioTecnicoComponent,
    DisenoCocinasComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot([]),
    BrowserModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
