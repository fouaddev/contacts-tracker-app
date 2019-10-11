import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressBookEntryComponent } from './components/address-book-entry/address-book-entry.component';
import { AddressBookAddEditComponent } from './components/address-book-add-edit/address-book-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddressBookEntryComponent,
    AddressBookAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
