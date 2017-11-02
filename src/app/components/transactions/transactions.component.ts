import { Transaction } from '../../models/Transaction';
import { TransactionService } from '../../services/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: any[];

  constructor( private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(transactions => {
      console.log(transactions);
    });
  }

}
