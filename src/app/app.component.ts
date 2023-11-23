import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { Note } from './models/note.model';
import { NoteComponent } from './components/note/note.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { AddNoteComponent } from './components/addnote/addnote.component';
import { NoteListComponent } from './components/notelist/notelist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NoteComponent,
    SearchComponent,
    HeaderComponent,
    AddNoteComponent,
    NoteListComponent,
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  notes: Note[] = [];

  searchText: string = '';
  filteredNotes: Note[] = [];
  darkMode: boolean = false;

  ngOnInit() {
    this.loadNotes();
    this.filteredNotes = [...this.notes];
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  searchNotes(query: string) {
    this.searchText = query.toLowerCase();
    this.filteredNotes = this.notes.filter((note) =>
      note.text.toLowerCase().includes(this.searchText),
    );
  }

  addNote(text: string) {
    const date = new Date();
    const newNote: Note = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    this.notes.push(newNote);
    this.saveNotes();
    this.filteredNotes = [...this.notes];
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.saveNotes();
    this.filteredNotes = [...this.notes];
  }

  private saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  private loadNotes() {
    const savedNotesString = localStorage.getItem('notes');
    const savedNotes = savedNotesString ? JSON.parse(savedNotesString) : null;
    this.notes = savedNotes || [];
  }
}
