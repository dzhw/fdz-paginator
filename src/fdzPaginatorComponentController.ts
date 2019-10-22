import {IAttributes, IComponentController} from 'angular';

export class FdzPaginatorComponentController implements IComponentController {
  static NAME: string = 'fdzPaginatorController';
  public options: any;
  public selectedPageOption!: number;
  public selectedSortOption!: string;
  public onUpdate: (args: any) => void;

  public $onInit(): void {
  }

  public previous(): void {
    if (this.options.pageObject.page > 1) {
      this.options.pageObject.page -= 1;
    }
    this.onUpdate({$event: 'previous', $option: this.options});
  };

  public next(): void {
    if (this.options.pageObject.page < this.getPages()) {
      this.options.pageObject.page += 1;
    }
    this.onUpdate({$event: 'next', $option: this.options});
  };

  public pageSize(): void {
    this.options.pageObject.page = 1;
    this.onUpdate({$event: '', $option: this.options});
    this.calculateCurrentPage();
  }

  public calculateCurrentPage(): number {
    let currentPages = this.options.pageObject.page * this.options.pageObject.size;
    // this.options.pageObject.page =1;
    return (currentPages >= this.options.pageObject.totalHits) ? this.options.pageObject.totalHits : currentPages;
  }

  private getPages() {
    return this.options.pageObject.totalHits / this.options.pageObject.size;
  }

}
