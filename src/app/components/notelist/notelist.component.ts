import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.model';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../note/note.component';
import { AddNoteComponent } from '../addnote/addnote.component';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NoteComponent, AddNoteComponent],
  templateUrl: './notelist.component.html',
})
export class NoteListComponent {
  @Input() notes: Note[] = [];
  @Output() addNote = new EventEmitter<string>();
  @Output() deleteNote = new EventEmitter<string>();

  onAddNote(text: string) {
    this.addNote.emit(text);
  }

  onDeleteNote(id: string) {
    this.deleteNote.emit(id);
  }
}
