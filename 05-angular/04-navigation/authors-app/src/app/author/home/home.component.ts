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

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    // this.authorService.getAuthors().subscribe(authors => {
    //   this.authors = authors['authors'];
    //   console.log(authors);
    // });
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

  // onDelete(event: Event, author: Author) {
  //   event.stopPropagation();
  //   console.log('Author id', author._id);
  //   this.authorService.deleteAuthor(author._id).subscribe(removedAuthor => {
  //     console.log('deleted author', removedAuthor);
  //     this.authors = this.authors.filter(
  //       // tslint:disable-next-line: no-shadowed-variable
  //       author => author._id !== removedAuthor._id
  //     );
  //   });
}
