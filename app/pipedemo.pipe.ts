import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipedemo'
})
export class PipedemoPipe implements PipeTransform {

  transform(value: any, ...args): any 
  {
    let str = value

      if(args[0] == "Mohit")
      {
        str+= "I am Mohit Bhondve";
      }

    return str;
  }

}
