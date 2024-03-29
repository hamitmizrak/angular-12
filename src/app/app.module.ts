import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { HttpClientModule} from '@angular/common/http';


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
import { ApiAngularComponent } from './api-angular/api-angular.component';
import { RouterComponent } from './router/router.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { TodoListComponent } from './todo-list/todo-list.component';


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
    RxjsComponent,
    ApiAngularComponent,
    RouterComponent,
    IndexComponent,
    PageNotFoundComponent,
    RegisterComponent,
    TodoListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  //AppComponent baslangic
  bootstrap: [AppComponent]
})
export class AppModule { }

//module=componentler+componentler+....
