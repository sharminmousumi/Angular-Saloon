import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { TitleComponent } from './title/title.component';
import { TheUsualComponent } from './the-usual/the-usual.component';
import { BeverageComponent } from './beverage/beverage.component';
import { RightToBeForgottenComponent } from './right-to-be-forgotten/right-to-be-forgotten.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    TitleComponent,
    TheUsualComponent,
    BeverageComponent,
    RightToBeForgottenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
