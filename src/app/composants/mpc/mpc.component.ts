import { Component } from '@angular/core';

@Component({
  selector: 'app-mpc',
  templateUrl: './mpc.component.html'
})

export class MpcComponent{
  info = 'information quelconque';
  cnt = 0;
  unclick(){
    this.cnt++;
    alert("je viens de cliquer " + this.cnt + " fois sur le bouton");

  }
}

