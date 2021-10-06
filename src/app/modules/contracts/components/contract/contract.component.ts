import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  datesTable: any = [
    { name: 'Darlene Robertson', type: 'Traditional', date: 'Mar 4, 2021', amount: '$200 USD', status: 'Active', statu: 1 },
    { name: 'Darlene Robertson', type: 'Traditional', date: 'Mar 4, 2021', amount: '$200 USD', status: 'Active', statu: 1 },
    { name: 'Darlene Robertson', type: 'Traditional', date: 'Mar 4, 2021', amount: '$200 USD', status: 'Signature pending', statu: 2 },
  ]


  constructor() {

  }

  ngOnInit() {

  }

}
