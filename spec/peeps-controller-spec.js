describe('PeepsController', function() {
  describe('.showPeeps', function () {

    var mockPeepsListModel = function() {};
    var mockPeepsListView = function() {};
    var peepsController = new PeepsController(mockPeepsListModel, mockPeepsListView);
    var mockPromise = function() {};
    var mockWrappedPromise = function() {};
    var mockObject = function() {};
    var mockElement = { innerHTML: "" };
    mockPeepsListModel.fetchPeeps = function() { return mockPromise; };
    mockPeepsListView.wrapInHTML = function() {};
    mockPromise.then = function(callback) {
      callback('result');
      return mockWrappedPromise;
     };
    mockWrappedPromise.then = function(callback) { callback('wrapped result'); };
    mockObject.getElementById = function(argument) {
       if (argument === 'peeps-list') { return mockElement; }
     };

    it('calls the fetchPeeps function of the model',() => {
      spyOn(mockPeepsListModel, 'fetchPeeps').and.returnValue(mockPromise);
      peepsController.showPeepsList(mockObject);
      expect(mockPeepsListModel.fetchPeeps).toHaveBeenCalled();
    });

    it('calls the wrapinHTML function of the view with the result of the models fetch',() => {

      spyOn(mockPeepsListView, 'wrapInHTML');
      peepsController.showPeepsList(mockObject);
      expect(mockPeepsListView.wrapInHTML).toHaveBeenCalledWith('result');
    });

    it('inserts the wrapped result into the passed object at "peeps-list"',() => {
      peepsController.showPeepsList(mockObject);
      expect(mockElement.innerHTML).toBe('wrapped result');
    });

  });
});
