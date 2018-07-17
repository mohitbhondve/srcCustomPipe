import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousPipePipe } from './marvellous-pipe.pipe';
import { PipedemoPipe } from './pipedemo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousPipePipe,
    PipedemoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
