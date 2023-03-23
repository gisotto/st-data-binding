import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public url: string = 'http://loiane.com';
  public urlImagem: string = 'http://lorempixel.com.br/400/200'
  public cursoAngular: boolean = true;

  constructor() { }

  public getValor(): number {
    return 1;
  }

  public getCurtirCurso(): boolean {
    return true;
  }
}
