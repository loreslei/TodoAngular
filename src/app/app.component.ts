import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaComponent } from "./components/tabela/tabela.component";
import { NavComponent } from "./components/nav/nav.component";
import { InputsComponent } from "./components/inputs/inputs.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabelaComponent, NavComponent, InputsComponent, NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
