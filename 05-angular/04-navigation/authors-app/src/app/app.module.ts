import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorService } from './service/author.service';
import { HomeComponent } from './author/home/home.component';

import { routing } from './routes/author-routes';
import { AddComponent } from './author/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AddComponent, EditComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
