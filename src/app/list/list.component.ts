import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseModelService } from 'app/services/firebase-model.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  entity: string;
  objects: any;
  fields: string[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private model: FirebaseModelService,
  ) { }

  ngOnInit() {
    this.entity = this.route.snapshot.params['entity'];
    this.fields = this.model.fields(this.entity);
    console.log(this.fields);
    this.objects = this.model.read(this.entity);
    /*const data = {
      title: 'Prueba de noticia',
      content: 'Prueba de noticia texto',
      image: '',
      created: 1498807325,
      modified: 1498807325,
      user: ''
    }

    this.model.create(this.entity, data);*/

  }



}
