import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <article class="template">
      <h4>Sorry!</h4>
      <div>This page does not exist.</div>
    </article>
  `
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
