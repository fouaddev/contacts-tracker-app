import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../model/contact';
import { AddressProviderService } from '../../model/address-provider.service';

@Component({
  selector: 'app-address-book-add-edit',
  templateUrl: './address-book-add-edit.component.html',
  styleUrls: ['./address-book-add-edit.component.scss'],
  providers: [AddressProviderService]
})
export class AddressBookAddEditComponent implements OnInit {

	friend: Contact;
	title:  string;

  constructor(private route: ActivatedRoute, private router: Router, private provider: AddressProviderService) { }

  ngOnInit() {
    
  	let id = this.route.snapshot.params['id'];
    if (id) {
      this.title = 'Edit Contact';
      this.friend = this.provider.getFriend(id);
    } else {
      this.title = "Add Contact";
      this.friend = new Contact();
		}
		console.log(this.friend);
  }

  saveFriend() {

    if (this.isComplete()) {
      this.provider.saveFriend(this.friend);
      // redirect to info
      this.router.navigate(['details', this.friend.id]);
    }

  }

  private isComplete() {

    let f: Contact = this.friend;
    if (!this.findFriend() &&
      f.name && f.name.length > 0 && 
      f.address && f.address.length > 0 &&
      f.phone && f.phone.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  private findFriend(): boolean {
    let found = false;
    let friends:Contact[] = this.provider.getFriends();
  	let target: Contact = 
      friends.find(f => {return (f.id == this.friend.id)});
  	if (!target) {
  		return found;
  	} else {
      return !found;
    }
  }

}
