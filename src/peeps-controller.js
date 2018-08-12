(function(exports) {
  function PeepsController(peepsListModel, peepsListView) {
    this.peepsListModel = peepsListModel;
    this.peepsListView = peepsListView;
  }

  PeepsController.prototype.showPeepsList = function (object) {
    this.peepsListModel.fetchPeeps()
      .then(peeps => this.peepsListView.wrapInHTML(peeps))
      .then(wrappedPeeps => object
        .getElementById('peeps-list')
        .innerHTML = wrappedPeeps);
  };

  exports.PeepsController = PeepsController;
})(this);
