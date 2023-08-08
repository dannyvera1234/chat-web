import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sidebar';

  @ViewChild('barralateral') barralateralde: ElementRef;
  @ViewChild('mainmenu') mainmenu: ElementRef;
  @ViewChild('switchblack') switchblack: ElementRef;
  constructor(private renderer: Renderer2) {
    this.setupMediaQueryListener();
  }

  onClickIcono() {
    const classCurrent: any[] = [
      ...this.barralateralde.nativeElement.classList,
    ];

    if (classCurrent.includes('mini-barra-lateral')) {
      this.renderer.removeClass(
        this.barralateralde.nativeElement,
        'mini-barra-lateral'
      );
    } else {
      this.renderer.addClass(
        this.barralateralde.nativeElement,
        'mini-barra-lateral'
      );
    }

    this.onToggleMainMenu();
  }

  onToggleMainMenu() {
    const classCurrent: any[] = [...this.mainmenu.nativeElement.classList];

    if (classCurrent.includes('min-main')) {
      this.renderer.removeClass(this.mainmenu.nativeElement, 'min-main');
    } else {
      this.renderer.addClass(this.mainmenu.nativeElement, 'min-main');
    }
  }
  onSwitchBlack() {
    const body = document.body;

    const listClassBody = Array.from(body.classList);

    if (listClassBody.includes('dark-mode')) {
      this.renderer.removeClass(body, 'dark-mode');
    } else {
      this.renderer.addClass(body, 'dark-mode');
    }
    this.onCirculo();
  }
  onCirculo() {
    const classCurrent: any[] = [...this.switchblack.nativeElement.classList];

    if (classCurrent.includes('prendido')) {
      this.renderer.removeClass(this.switchblack.nativeElement, 'prendido');
    } else {
      this.renderer.addClass(this.switchblack.nativeElement, 'prendido');
    }
  }
  onOcultar() {
    const classCurrent: any[] = [
      ...this.barralateralde.nativeElement.classList,
    ];

    if (classCurrent.includes('max-barra-lateral')) {
      this.renderer.removeClass(
        this.barralateralde.nativeElement,
        'max-barra-lateral'
      );
    } else {
      this.renderer.addClass(
        this.barralateralde.nativeElement,
        'max-barra-lateral'
      );
    }
  }

  setupMediaQueryListener() {
    const mediaQuery = window.matchMedia('(max-width: 600px)'); // Define tu consulta de medios aquí

    // Agregar un oyente para los cambios en la consulta de medios
    mediaQuery.addEventListener('change', (event) => {
      /**
       * Si la pantalla en menor a 600px siempre se mostrara la barra lateral completa
       */

      const classCurrent: any[] = [
        ...this.barralateralde.nativeElement.classList,
      ];

      if (classCurrent.includes('mini-barra-lateral')) {
        this.renderer.removeClass(
          this.barralateralde.nativeElement,
          'mini-barra-lateral'
        );
      }
      this.renderer.removeClass(
        this.barralateralde.nativeElement,
        'max-barra-lateral'
      );

      this.renderer.removeClass(this.mainmenu.nativeElement, 'min-main');
    });
  }
}
