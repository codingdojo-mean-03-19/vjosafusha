import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../service/author.service';
import { Author } from '../../model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authors: Author[];
  author = Author;
  id: String;

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    this.authorService.getAuthors().subscribe(
      (response: Author[]) => {
        this.authors = response;
        console.log(this.authors);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onDelete(id: String) {
    this.authorService.deleteAuthor(id).subscribe((response: Author) => {
      console.log('Removing a author', response);
      this.getAuthors();
    });
  }
}
