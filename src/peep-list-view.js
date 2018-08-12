(function (exports) {
  function PeepsListView() {}

  PeepsListView.prototype.wrapInHTML = function (peeps) {
    var peeps_text = [];
    var i = 0;
    for (i; i < peeps.length; i++) {
      peeps_text.push("<li><div id='peepslist'>" + peeps[i].body + "</div></li>");
    }
    return "<ul>" + peeps_text.join("") + "</ul>";
  };

  exports.PeepsListView = PeepsListView;
})(this);
