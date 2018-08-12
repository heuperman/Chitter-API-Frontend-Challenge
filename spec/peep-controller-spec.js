describe('PeepsController', function() {
  describe('.showPeeps', function () {
    it('calls the fetchPeeps function of the model',() => {
      var mockPromise = function() {};
      var mockPeepsListModel = function() {};
      mockPeepsListModel.fetchPeeps = function() {};
      mockPromise.then = function() { return mockPromise; };
      spyOn(mockPeepsListModel, 'fetchPeeps').and.returnValue(mockPromise);
      var mockPeepsListView = jasmine.createSpy('mockPeepsListView');
      var mockObject = { innerHTML: "" };
      var mockDocument = { getElementById: function () { return mockElement; } };
      var peepsController = new PeepsController(mockPeepsListModel, mockPeepsListView);
      peepsController.showPeepsList(mockObject);

      expect(mockPeepsListModel.fetchPeeps).toHaveBeenCalled();
    });
  });
});
