import { Component, Input } from '@angular/core';
import { square } from '../types/types.interface';


@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value!: square ;
}
