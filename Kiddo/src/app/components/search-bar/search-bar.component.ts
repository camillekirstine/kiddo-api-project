import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchbarCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearchChange(e: SearchbarCustomEvent) {
    const query = e.detail.value;
    if (query) {
      this.search.emit(query);
      this.router.navigate(['/search-results'], { queryParams: { q: query } });
    }
  }

  constructor( private router: Router) {}

  ngOnInit() {}
}
