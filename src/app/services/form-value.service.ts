import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueBase } from '../models/value-base';
import { DropdownValue } from '../models/value-dropdown';
import { TextboxValue } from '../models/value-textbox';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormValueService {
  private _jsonURL = 'assets/myform.json';

  constructor(private readonly http: HttpClient) { }

  getFormValue(): Observable<ValueBase<any>[]> {
    return this.http.get<ValueBase<any>[]>(this._jsonURL).pipe(map(data => {
      let values: ValueBase<any>[] = data.map(c => {
        switch (c.controlType) {
          case 'textbox':
            return new TextboxValue({
              key: c.key,
              label: c.label,
              value: c.value,
              required: c.required,
              type: (c as TextboxValue).type,
              order: c.order
            });
          case 'dropdown':
            return new DropdownValue({
              key: c.key,
              label: c.label,
              options: (c as DropdownValue)?.options || [],
              value: c.value,
              required: c.required,
              order: c.order
            });
          default:
            // default textbox input
            return new TextboxValue({
              key: c.key,
              label: c.label,
              value: c.value,
              required: c.required,
              type: (c as TextboxValue).type,
              order: c.order
            });
        }
      });

      return values.sort((a, b) => a.order - b.order);

    }));

    // let values: ValueBase<any>[] = [

    //   new DropdownValue({
    //     key: 'group',
    //     label: 'My Group',
    //     options: [
    //       { key: 'work', value: 'Work' },
    //       { key: 'sport', value: 'Sport Group' },
    //       { key: 'food', value: 'Good Foods' },
    //       { key: 'friends', value: 'Meet friends' }
    //     ],
    //     order: 3
    //   }),

    //   new TextboxValue({
    //     key: 'firstName',
    //     label: 'First name',
    //     value: 'Alex',
    //     required: true,
    //     order: 1
    //   }),

    //   new TextboxValue({
    //     key: 'emailAddress',
    //     label: 'Email',
    //     type: 'email',
    //     order: 2
    //   }),

    //   new TextboxValue({
    //     key: 'age',
    //     label: 'Age',
    //     type: 'number',
    //     order: 4
    //   }),
    // ];

    // return values.sort((a, b) => a.order - b.order);
  }
}
