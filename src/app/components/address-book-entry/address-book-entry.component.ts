import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../../model/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressProviderService } from '../../model/address-provider.service';

@Component({
  selector: 'app-address-book-entry',
  templateUrl: './address-book-entry.component.html',
  styleUrls: ['./address-book-entry.component.scss']
})
export class AddressBookEntryComponent implements OnInit {

  // Declares friend variable to store the contact data
  friend: Contact;

  // Declares variable to be used as a subscriber to the params observable
  sub: any;

  i: number = 0;

  // Declares a variable to refer to the total number of friends to be used
  // to limit the showing and hiding of the next and prev links in the template
  totalContacts: any;

  constructor(private provider: AddressProviderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('from init !!!');
    // Gets the lenth of all friends
    this.totalContacts = this.provider.getFriends().length;

    // Instantiates the sub variable as a subscriber to the params Observable of 
    // the route instance that was instantiated through the constructor
  	this.sub = this.route.params.subscribe(param => {
      console.log(param);
      // Assigns the id parameter in the emited params object to the id variable
      // whenever a new value is emited by params Observable to sub Subscriber
      let id: string = param.id;

      // Finds the friend with the matching id and assigns it to friend variable
      this.friend = this.provider.getFriend(+id);
    });
  }

  ngOnDestroy() {
    console.log("ngOnDestroyyy");
    this.sub.unsubscribe();
  }

  deleteFriend() {
    if(confirm("Are you sure to delete " + this.friend.name + "?")) {
      this.provider.deleteFriend(this.friend);
      this.router.navigate(['']);
    }
  }

}
