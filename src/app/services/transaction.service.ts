import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/Transaction';

@Injectable()
export class TransactionService {
  transitionsRef: AngularFireList<any>;
  transactions: Observable<any[]>;
  transaction: Observable<any>;

  constructor( private db: AngularFireDatabase ) {
    this.transitionsRef = this.db.list('transactions');
    this.transactions = this.transitionsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getTransactions() {
    return this.transactions;
  }
}
