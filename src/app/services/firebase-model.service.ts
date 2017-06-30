import { model } from 'app/model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseModelService {

  constructor(public db: AngularFireDatabase) {
    console.log(model);
  }

  create(entity: string, data: any) {
    if(this.entityExists(entity)){
      const itemObservable = this.db.list('/' + entity + '/');
      itemObservable.push(data);
    }
  }

  read(entity: string){
    if(this.entityExists(entity)){
      return this.db.list('/' + entity, {
        query: {
          // limitToLast: 10,
          orderByKey: true
        }
      });
    }
    else{
      return [];
    }
  }

  update(entity: string, data: any) {
    if(this.entityExists(entity)){
      const itemObservable = this.db.object('/' + entity + '/' + data.$key);
      itemObservable.update(data);
    }
  }

  delete(entity: string, key: string) {
    if(this.entityExists(entity)){
      const itemObservable = this.db.list('/' + entity + '/');
      itemObservable.remove(key);
    }
  }

  fields(entity: string):any[] {
    if(this.entityExists(entity)){
      return model[entity].fields;
    }
    else{
      return [];
    }
  }

  private entityExists(entity: string) {
    var exists = model.hasOwnProperty(entity);
    if(!exists){
      console.log('Error: Entity no exists in model');
    }

    return exists;
  }
}
