import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../core/Model/User';

@Pipe({
  name: 'usersearchfilter'
})
export class UsersearchfilterPipe implements PipeTransform {

  transform(items: User[], searchvalue: string) {
    if (!searchvalue || !items) {


      return items
    }
    return items.filter(item => item.userName.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      item.role.toLocaleString().toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
  }

}
