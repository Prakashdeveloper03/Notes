import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addnote.component.html',
})
export class AddNoteComponent {
  @Output() addNote = new EventEmitter<string>();
  noteText: string = '';
  characterLimit: number = 200;

  onSaveClick() {
    if (this.noteText.trim().length > 0) {
      this.addNote.emit(this.noteText);
      this.noteText = '';
    }
  }
}
