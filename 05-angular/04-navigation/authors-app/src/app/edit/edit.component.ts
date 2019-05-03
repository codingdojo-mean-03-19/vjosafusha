import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Author } from '../model';
import { AuthorService } from '../service/author.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  authorForm: FormGroup;
  author: Author;
  id: string;

  constructor(
    private readonly authorService: AuthorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => (this.id = params.id));
    this.getAuthor(this.id);
  }

  getAuthor(id: string) {
    console.log(id);
    this.authorService.getAuthorByID(id).subscribe((response: Author) => {
      this.author = response;
      console.log(this.author);
      this.authorForm = new FormGroup({
        _id: new FormControl(this.author._id),
        name: new FormControl(this.author.name),
      });
    });
  }
  onSubmit(data) {
    this.author = data;
    console.log(this.author);
    this.authorService.editAuthor(this.author).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
