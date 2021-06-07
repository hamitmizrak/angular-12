import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// componentler  import
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ExamplesComponent } from './examples/examples.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';




// componentler  use
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ExamplesComponent,
    OnewayComponent,
    TwowayComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //AppComponent baslangic
  bootstrap: [AppComponent]
})
export class AppModule { }

//module=componentler+componentler+....
