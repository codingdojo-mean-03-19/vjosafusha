import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorService } from './service/author.service';
import { HomeComponent } from './author/home/home.component';

import { routing } from './routes/author-routes';
import { NewComponent } from './author/new/new.component';
import { AddComponent } from './author/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewComponent, AddComponent],
  imports: [BrowserModule, HttpClientModule, routing, FormsModule],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
