import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styles: ``,
})
export class SearchComponent {
  @Output() searchNote = new EventEmitter<string>();
  searchQuery: string = '';

  onSearchChange() {
    this.searchNote.emit(this.searchQuery);
  }
}
