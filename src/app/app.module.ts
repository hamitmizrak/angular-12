import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// componentler  import
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ExamplesComponent } from './examples/examples.component';
import { PipeComponent } from './pipe/pipe.component';

// componentler  use
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ExamplesComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //AppComponent baslangic
  bootstrap: [AppComponent]
})
export class AppModule { }

//module=componentler+componentler+....
