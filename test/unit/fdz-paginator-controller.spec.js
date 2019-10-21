describe('fdz-paginator component controller', function() {
  let $componentController;

  beforeEach(angular.mock.module('fdzPaginatorModule'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should call the `onUpdate` binding, when updating a property', function() {
    let onUpdateSpy = jasmine.createSpy('onUpdate');
    let bindings = {options: {}, onUpdate:onUpdateSpy};
    let ctrl = $componentController('fdzPaginator', null, bindings);
    ctrl.onUpdate({event:'test event', option: {}});
    expect(onUpdateSpy).toHaveBeenCalledWith({
      event: 'test event',
      option: ctrl.options,
    });
  });

  describe('previous method', function() {
    it('should decrement the page', function() {
      const options={
        pageObject: {
          page: 2
        }
      };
      const onUpdateSpy = jasmine.createSpy('onUpdate');
      const bindings = {options: options, onUpdate:onUpdateSpy};
      let ctrl = $componentController('fdzPaginator', null, bindings);
      ctrl.previous();
      expect(options.pageObject.page).toEqual(1);
    });
    it('should not decrement the page', function() {
      const options={
        pageObject: {
          page: 1
        }
      };
      const onUpdateSpy = jasmine.createSpy('onUpdate');
      const bindings = {options: options, onUpdate:onUpdateSpy};
      let ctrl = $componentController('fdzPaginator', null, bindings);
      ctrl.previous();
      expect(options.pageObject.page).toEqual(1);
    });
  });

  describe('next method', function() {
    it('should increment the page', function() {
      const options={
        pageObject : {
          totalHits: 20,
          size: 10,
          page: 1
        }
      };
      const onUpdateSpy = jasmine.createSpy('onUpdate');
      const bindings = {options: options, onUpdate:onUpdateSpy};
      let ctrl = $componentController('fdzPaginator', null, bindings);
      ctrl.next();
      expect(options.pageObject.page).toEqual(2);
    });
    it('should not increment the page', function() {
      const options={
        pageObject : {
          totalHits: 20,
          size: 10,
          page: 2
        }
      };
      const onUpdateSpy = jasmine.createSpy('onUpdate');
      const bindings = {options: options, onUpdate:onUpdateSpy};
      let ctrl = $componentController('fdzPaginator', null, bindings);
      ctrl.next();
      expect(options.pageObject.page).toEqual(2);
    });
  });

  describe('calculateCurrentPage method', function() {
    it('should display the current pages', function() {
      const options={
        pageObject : {
          totalHits: 20,
          size: 10,
          page: 1
        }
      };
      const onUpdateSpy = jasmine.createSpy('onUpdate');
      const bindings = {options: options, onUpdate:onUpdateSpy};
      let ctrl = $componentController('fdzPaginator', null, bindings);
      let result = ctrl.calculateCurrentPage();
      expect(result).toEqual(10);
    });
    it('should display the totalHits', function() {
      const options={
        pageObject : {
          totalHits: 20,
          size: 10,
          page: 3
        }
      };
      const onUpdateSpy = jasmine.createSpy('onUpdate');
      const bindings = {options: options, onUpdate:onUpdateSpy};
      let ctrl = $componentController('fdzPaginator', null, bindings);
      let result = ctrl.calculateCurrentPage();
      expect(result).toEqual(20);
    });
  });

  describe('pageSize method', function() {
    it('should set the current page to one', function() {
      const options={
        pageObject : {
          totalHits: 20,
          size: 10,
          page: 3
        }
      };
      const onUpdateSpy = jasmine.createSpy('onUpdate');
      const bindings = {options: options, onUpdate:onUpdateSpy};
      let ctrl = $componentController('fdzPaginator', null, bindings);
      ctrl.pageSize();
      expect(options.pageObject.page).toEqual(1);
    });
  });
});
