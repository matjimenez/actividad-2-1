import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'actividad2-1';
  public resultado: number = 0;
  public sumar(){
    this.resultado = this.resultado + 4;
  }
}
