import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {config} from "rxjs";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginComponent} from "./components/login/login.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {SignupComponent} from "./components/signup/signup.component";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'landingpage', component: LandingPageComponent},
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
]


@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),

  ],

  declarations: [
AppComponent,
    HomepageComponent,
    LoginComponent,
    LandingPageComponent,
    SignupComponent,
    DisplayhelloworldComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ],

  })

export class AppModule {}
