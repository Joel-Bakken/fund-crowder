import { Pipe, PipeTransform } from '@angular/core';
import {Project} from './project.model';

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[], desiredCategory) {
    console.log("in the pipe" + desiredCategory);
    var output: Project[] = [];
    if(desiredCategory === "cookbooks") {
      console.log(desiredCategory + "should be cookbooks");
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Cookbooks") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "comics") {
      console.log(desiredCategory + "should be comics");
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Comics") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "documentary") {
      console.log(desiredCategory + "should be documentary");
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Documentary") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
