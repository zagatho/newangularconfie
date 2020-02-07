import { Component, OnInit, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { CreditCard } from  './quote/shared/policy'

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input() creditCard: CreditCard;

  @Output() creditCardChange: EventEmitter<CreditCard> = new EventEmitter<CreditCard>();

  @Input("parentForm") form: NgForm;


  constructor() { }

  ngOnInit() {
  }

}