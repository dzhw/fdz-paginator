import {FdzPaginatorComponentController} from './fdzPaginatorComponentController';
import {IAttributes, IComponentOptions, IScope} from 'angular';

export class FdzPaginatorComponent implements IComponentOptions {
  static NAME: string = 'fdzPaginator';
  public controller = FdzPaginatorComponentController;
  public bindings: any = {
    options: '<',
    onUpdate: '&?'
  };

  public templateUrl: any = ['$attrs', function ($attrs: IAttributes) {
    return $attrs['templateUrl'] || './fdzPaginatorTemplate.html';
  }];

}
