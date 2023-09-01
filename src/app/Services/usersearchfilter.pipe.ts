import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersearchfilter'
})
export class UsersearchfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
