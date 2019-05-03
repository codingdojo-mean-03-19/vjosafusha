import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Author } from '../../model/index';
import { AuthorService } from '../../service/author.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  authorForm: FormGroup;
  author: Author;

  constructor(
    private readonly authorService: AuthorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authorForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  onSubmit(data) {
    this.author = data;
    console.log(this.author);
    this.authorService.createAuthor(this.author).subscribe(response => {
      this.router.navigate(['/']);
    });
  }
}
