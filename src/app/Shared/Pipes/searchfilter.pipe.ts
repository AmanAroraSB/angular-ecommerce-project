import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../core/Model/Item';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(items: Item[], searchvalue: string): Item[] {
    if (!searchvalue || !items) {
      console.log("if");

      return items
    }
    return items.filter(item => item.name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      item.price.toLocaleString().toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
  }

}
