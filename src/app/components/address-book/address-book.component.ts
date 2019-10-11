import { Component, OnInit } from '@angular/core';

import { Contact } from '../../model/contact';
import { AddressProviderService } from '../../model/address-provider.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  friends: Contact[];

  constructor(private provider: AddressProviderService) {
    
  }

  ngOnInit() {
    this.friends = this.provider.getFriends();
  }

}
