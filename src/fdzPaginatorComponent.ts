import {FdzPaginatorComponentController} from './fdzPaginatorComponentController';
import {IComponentOptions} from 'angular';

export class FdzPaginatorComponent implements IComponentOptions {
  static NAME: string = 'fdzPaginator';
  public controller = FdzPaginatorComponentController;
  public bindings: any = {
    options: '<',
    onUpdate: '&?'
  };
  public templateUrl: any = function ($attrs: any) {
    return $attrs.templateUrl || './fdzPaginatorTemplate.html';
  };
}
