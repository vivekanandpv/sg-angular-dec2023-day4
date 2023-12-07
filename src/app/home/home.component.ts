import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  constructor(private router: Router) {}

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  toContact() {
    this.router.navigate(['contact'], {
      queryParams: {
        lang: 'kn',
        country: 'india',
        year: 2023,
      },
    });
    // this.router.navigateByUrl('contact');
  }
}
