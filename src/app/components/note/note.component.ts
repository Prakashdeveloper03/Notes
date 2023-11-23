import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note.component.html',
})
export class NoteComponent {
  @Input() note!: Note;
  @Output() deleteNote = new EventEmitter<string>();

  onDeleteNote() {
    this.deleteNote.emit(this.note.id);
  }
}
