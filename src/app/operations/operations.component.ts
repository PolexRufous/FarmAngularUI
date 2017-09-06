import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

}
