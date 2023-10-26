import { Component, Input } from '@angular/core';

// type XO = "X" | "O" | undefined;

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value!: unknown ;
}
