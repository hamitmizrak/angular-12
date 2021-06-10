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
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ReturnvaluePipe } from './custom-pipe/returnvalue.pipe';
import { SearchTextPipe } from './custom-pipe/search-text.pipe';
import { LowerTextPipe } from './custom-pipe/lower-text.pipe';
import { ServisComponentComponent } from './servis-component/servis-component.component';
import { RxjsComponent } from './rxjs/rxjs.component';




// componentler  use
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ExamplesComponent,
    OnewayComponent,
    TwowayComponent,
    PipeComponent,
    CustomPipeComponent,
    ReturnvaluePipe,
    SearchTextPipe,
    LowerTextPipe,
    ServisComponentComponent,
    RxjsComponent
    
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
