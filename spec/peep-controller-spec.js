describe('PeepsController', function() {
  describe('.showPeeps', function () {

    var mockPeepsListModel = function() {};
    var mockPeepsListView = function() {};
    var peepsController = new PeepsController(mockPeepsListModel, mockPeepsListView);
    var mockPromise = function() {};
    var mockObject = { innerHTML: "" };
    mockPeepsListModel.fetchPeeps = function() { return mockPromise; };
    mockPeepsListView.wrapInHTML = function() {};
    mockPromise.then = function() { return mockPromise; };

    it('calls the fetchPeeps function of the model',() => {
      spyOn(mockPeepsListModel, 'fetchPeeps').and.returnValue(mockPromise);
      peepsController.showPeepsList(mockObject);
      expect(mockPeepsListModel.fetchPeeps).toHaveBeenCalled();
    });

    it('calls the wrapinHTML function of the view with the result of the models fetch',() => {
      var mockWrappedPromise = function() {};
      mockWrappedPromise.then = function() {};
      mockPromise.then = function(callback) {
        callback('Peeps');
        return mockWrappedPromise;
       };
      spyOn(mockPeepsListView, 'wrapInHTML');
      peepsController.showPeepsList(mockObject);
      expect(mockPeepsListView.wrapInHTML).toHaveBeenCalledWith('Peeps');
    });
  });
});
