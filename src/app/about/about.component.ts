import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

interface IdViewModel {
  valid: true;
  value?: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  id$?: Observable<IdViewModel>;

  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.id$ = this.ar.paramMap.pipe(
      map((pm) => {
        const id = pm.get('id');
        const regex = /^[0-9]*$/;

        console.log(id !== null && regex.test(id));

        if (id !== null && regex.test(id)) {
          return {
            valid: true,
            value: +id,
          } as IdViewModel;
        }

        const improperId = {
          valid: false,
        };

        return improperId as IdViewModel;
      })
    );
  }
}
