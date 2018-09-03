(function (exports) {
  function ButtonsView() {}

  ButtonsView.prototype.wrapInHTML = function (button) {
    return '<form action="#register" method="post">handle:<br>' +
    '<input type="text" name="handle"><br>' +
    'password :<br><input type="password" name="password">' +
    '<br><br><input type="submit" value="' + button + '"></form>';
  };

  exports.ButtonsView = ButtonsView;
})(this);
