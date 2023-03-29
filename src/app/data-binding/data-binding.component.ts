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

  public valorAtual: string = '';
  public valorSalvo: string = '';

  public isMouseOver: boolean = false;

  constructor() { }

  public getValor(): number {
    return 1;
  }

  public getCurtirCurso(): boolean {
    return true;
  }

  public botaoClicado(): void {
    alert('Clicou no botão');
  }

  public onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }
  public salvarValor(target: any): void {
    this.valorSalvo = (target as HTMLInputElement).value;

  }

  public onMouseOverOut(estado:boolean): void {
    this.isMouseOver = estado;

  }

}


