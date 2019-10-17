/// <reference path="./globals.d.ts" />
import {FdzPaginatorComponent} from './fdzPaginatorComponent';

// @ts-ignore
let fdzPaginator = angular
  .module('fdzPaginatorModule', [])
  .component(FdzPaginatorComponent.NAME, new FdzPaginatorComponent());

export default fdzPaginator;
