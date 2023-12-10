import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveapprochComponent } from './reactiveapproch/reactiveapproch.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { ProductPipe } from './product.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TestinterceptorInterceptor} from "./testinterceptor.interceptor";
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ArticleConfectionComponent } from './article-confection/article-confection.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { ArticleConfectionPipe } from './article-confection/pipes/article-confection.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    ParentComponent,
    EnfantComponent,
    AComponent,
    BComponent,
    TemplatedrivenComponent,
    ReactiveapprochComponent,
    TestPipeComponent,
    ProductPipe,
    NavbarComponent,
    ArticleConfectionComponent,
    ArticleConfectionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [{
      provide:HTTP_INTERCEPTORS,
      useClass:TestinterceptorInterceptor,
      multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
