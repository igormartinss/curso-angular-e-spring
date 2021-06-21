import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Paginator } from 'src/app/models/paginator.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  url: string = environment.apiBaseUrl + 'contacts';

  constructor(private http: HttpClient) { }

  save(contact: Contact): Observable<Contact> {
     return this.http.post<Contact>(this.url, contact);
  }

  list(page: string, pageSize: string): Observable<Paginator> {
    const params = new HttpParams()
                          .set('page', page)
                          .set('pageSize', pageSize);
    return this.http.get<any>(`${this.url}?${params.toString()}`);
  }

  favorite(contact: Contact): Observable<any> {
    return this.http.patch<any>(`${this.url}/${contact.id}/favorite`, null);
  }

  upload(contact: Contact, formData: FormData): Observable<any> {
    return this.http.put(`${this.url}/${contact.id}/photo`, formData, { responseType : 'blob'} );
  }
}
