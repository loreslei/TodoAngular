import { Component } from '@angular/core';
import { TabelaComponent } from "../tabela/tabela.component";
import { InputsComponent } from "../inputs/inputs.component";
import { NavHeaderComponent } from "../nav-header/nav-header.component";

@Component({
  selector: 'app-home',
  imports: [TabelaComponent, InputsComponent, NavHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
