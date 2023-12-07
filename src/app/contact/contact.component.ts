import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  qp$?: Observable<any>;

  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.qp$ = this.ar.queryParams;
  }
}
