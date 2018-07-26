import { 
Component, 
OnInit, 
Input,
Output,
EventEmitter 
} from '@angular/core';
 

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() produto: any;
  @Output() addCard = new EventEmitter<any>()

  onAddCart(){
    this.addCard.emit(this.produto)
  }

  ngOnInit() {
  }

}
