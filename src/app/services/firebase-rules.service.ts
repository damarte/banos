import { config } from 'app/config';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FirebaseRulesService {

  constructor() {
    console.log(config.path.rules);
  }

  getRulesForEntity(entity) {
    //return this.http.get("YOUR_PATH_TO_THE_JSON_FILE").map((res:Response) => res.json().YOUR_JSON_HEADER); //records in this case
  }

  private readFile() {

  }

}
