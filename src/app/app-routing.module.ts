import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {EnfantComponent} from "./enfant/enfant.component";
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";
import {TemplatedrivenComponent} from "./templatedriven/templatedriven.component";
import {ReactiveapprochComponent} from "./reactiveapproch/reactiveapproch.component";
import {TestPipeComponent} from "./test-pipe/test-pipe.component";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {ArticleConfectionComponent} from "./article-confection/article-confection.component";

const routes: Routes = [
  {
    path:'parent', component:ParentComponent
  },
  {
    path:'enfant', component:EnfantComponent,

   },

  {
    path:'a', component:AComponent,

  },
  {
    path:'b', component:BComponent
  },
  {
    path:'template', component:TemplatedrivenComponent
  },
  {
    path:'reactive', component:ReactiveapprochComponent
  },
  {
    path:'pipes', component:TestPipeComponent
  },
  {
    path:'navbar', component:NavbarComponent
  },

  {
    path:'',component:ArticleConfectionComponent, children:[

      {
        path:'articleConfection', component:ArticleConfectionComponent
      }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
