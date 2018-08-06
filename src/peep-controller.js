(function(exports) {
  function Controller() {
    this.peepsView = new PeepsView();
  }

  Controller.prototype.showPeepList = function () {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(response => response.json())
      .then(peeps => this.peepsView.wrapInHTML(peeps))
      .then(wrappedPeeps => document.getElementById('peep-list').innerHTML = wrappedPeeps);
  };

  exports.Controller = Controller;
})(this);
