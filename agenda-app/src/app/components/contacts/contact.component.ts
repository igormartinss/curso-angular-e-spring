import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];
  errors: [];
  form: FormGroup;
  columns = ['photo', 'id', 'name', 'email', 'favorite'];
  totalElements = 0;
  page = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10];

  constructor(
    private service: ContactsService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.prepareForm();
    this.loadContacts(this.page, this.pageSize);
  }

  prepareForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  submit(): void {
    const formValues = this.form.value;
    const contact: Contact = new Contact(formValues.name, formValues.email);
    this.service.save(contact).subscribe(ret => {
      this.loadContacts(this.page, this.pageSize);
      this.prepareForm();
    });
  }

  loadContacts(page, pageSize): void {
    this.service.list(page, pageSize).subscribe(response => {
      this.contacts = response.content;
      this.totalElements = response.totalElements;
      this.page = response.number;
    });
  }

  favorite(contact: Contact): void {
    this.service.favorite(contact).subscribe(response => {
      contact.favorite = !contact.favorite;
    });
  }

  uploadPhoto(event, contact: Contact): void {
    const files = event.target.files;
    if (files) {
      const photo = files[0];
      const formData: FormData = new FormData();
      formData.append("photo", photo);
      this.service.upload(contact, formData).subscribe(response => this.loadContacts(this.page, this.pageSize));
      this.loadContacts(this.page, this.pageSize);
    }
  }

  showContactDetails(contact: Contact): void {
    this.dialog.open(ContactDetailsComponent, {
      width: '400px',
      height: '400px',
      data: contact
    })
  }

  paginate(event): void {
    this.page = event.pageIndex;
    this.loadContacts(this.page, this.pageSize);
  }

}
