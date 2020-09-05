import { Pipe, PipeTransform } from '@angular/core';
const default_path = 'Capture.png';
@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(path: string,): string {
    if (path.trim().length===0){
    return default_path ;
  }
else {
  return path;
}
  }
}
