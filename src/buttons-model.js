(function (exports) {
  function ButtonsModel () {}

  ButtonsModel.prototype.pickButtons = function() {
    return "sign up" ;
   };

   ButtonsModel.prototype.createUser = function(handle, password) {
     var userdata =
     '{"user": {"handle":"' + handle +
     '", "password":"' + password + '"}}';

     fetch("https://chitter-backend-api.herokuapp.com/users", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(userdata)
     })
     .then(response => response.json())
     .catch(error => console.error(`Fetch Error =\n`, error));
   };

  exports.ButtonsModel = ButtonsModel;
})(this);
