function PeepsModel () {
  this.peepsView = new PeepsView();
}

PeepsModel.prototype.fetchPeeps = function() {
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json())
    .then(peeps => this.peepsView.wrapInHTML(peeps))
    .then(wrappedPeeps => document.getElementById('peep-list').innerHTML = wrappedPeeps);
};
