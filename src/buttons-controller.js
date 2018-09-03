(function(exports) {
  function ButtonsController(buttonsModel, buttonsView) {
    this.buttonsModel = buttonsModel;
    this.buttonsView = buttonsView;
    window.addEventListener("hashchange", this.buttonsModel.createUser.bind(this));
  }

  ButtonsController.prototype.showButtons = function (object) {
    var buttons = this.buttonsModel.pickButtons();
    var wrappedButtons = this.buttonsView.wrapInHTML(buttons);
    object.getElementById('buttons')
          .innerHTML = wrappedButtons;
  };

  exports.ButtonsController = ButtonsController;
})(this);
