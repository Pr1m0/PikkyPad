import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/memorygame/memorygame.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth.guard';
import { HomePrivateComponent } from './home-private/home-private.component';
import{WelcomeComponent} from './welcome/welcome.component';
import { GoalComponent } from './goal/goal.component';
import { ChildSelectorComponent } from './child-selector/child-selector.component';
import { MathComponent } from './game/math/math.component';

export const routes: Routes = [

    {path: '', component:WelcomeComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    {path:'memorygame', component:GameComponent, canActivate:[authGuard]},
    {path: 'about', component:AboutComponent},
    {path :"home-private", component: HomePrivateComponent},
    {path: "welcome", component:WelcomeComponent},
    {path: "goal", component:GoalComponent},
    {path:"child-selector",component:ChildSelectorComponent},
    {path:"math", component:MathComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

