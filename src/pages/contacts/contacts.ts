import { Component } from '@angular/core';
import {Contact, ContactField, ContactName, Contacts, ContactFindOptions, ContactFieldType} from "@ionic-native/contacts";


@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  constructor(
    private contacts: Contacts
  ) {}

  createContact() {

    const contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6476476477', true)];

    contact.save()
      .then(res => console.log('Saved ', res))
      .catch(e => console.log(e));

  }

  pickContact() {
    this.contacts.pickContact()
      .then(contacts => {
        console.log(contacts);
      })
      .catch(e => console.error(e));
  }

  findContacts() {
    const options = new ContactFindOptions();
    options.filter = 'John';
    options.multiple = true;
    options.hasPhoneNumber = true;
    const fields: ContactFieldType[] = ['name'];
    this.contacts.find(fields, options)
      .then(contacts => {
        console.log(contacts);
      })
      .catch(e => console.error(e));
  }

}
