(function(exports) {
  function Controller() {
    this.peepsModel = new PeepsModel();

  }

  Controller.prototype.showPeepList = function () {
    this.peepsModel.fetchPeeps();
  };

  exports.Controller = Controller;
})(this);
