import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const entity = this.route.snapshot.params['entity'];
    console.log(entity);
  }

}
