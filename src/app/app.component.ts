import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExosAngular';

  showSpecialHeader: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Verifica si la ruta actual es una de las dos páginas que comparten el encabezado especial
      const currentRoute = this.activatedRoute.snapshot.firstChild;
      this.showSpecialHeader = currentRoute?.routeConfig?.path === 'homeBank' ||
                              currentRoute?.routeConfig?.path === 'idBank/:id';
    });
  }

}



