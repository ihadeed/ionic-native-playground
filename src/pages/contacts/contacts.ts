import { Component } from '@angular/core';
import {Contact, ContactField, ContactName, Contacts, ContactFindOptions, ContactFieldType} from "@ionic-native/contacts";


@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {

  result;
  error;

  constructor(
    private contacts: Contacts
  ) {}

  createContact() {

    const contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6476476477', true)];

    contact.save()
      .then(v => this.result = v)
      .catch(v => this.error = v);

  }

  pickContact() {
    this.contacts.pickContact()
      .then(v => this.result = v)
      .catch(v => this.error = v);
  }

  findContacts() {
    const options = new ContactFindOptions();
    options.filter = 'John';
    options.multiple = true;
    options.hasPhoneNumber = true;
    const fields: ContactFieldType[] = ['name'];
    this.contacts.find(fields, options)
      .then(v => this.result = v)
      .catch(v => this.error = v);
  }

}
