import { Component, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';
import { Note } from './models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'anonymous-notes';
  notes: Note[];
  note: Note;
  noteForm: FormGroup;

  constructor(private readonly noteService: NoteService) {}

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      note: new FormControl(''),
    });
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes().subscribe(
      (response: Note[]) => {
        this.notes = response;
        this.notes.sort((a, b) => 0 - (a > b ? 1 : -1));
        console.log(this.notes);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onSubmit(data) {
    this.note = data;
    console.log(this.note);
    this.noteService.createNote(this.note).subscribe(response => {
      this.getNotes();
    });
  }
}
