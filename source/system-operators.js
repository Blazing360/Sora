exports.SystemOperatorOverRide = function () {

    var SystemOperators = ['blakjack', 'onyxeagle'];

    Users.User.prototype.hasSysopAccess = function () {
        if (SystemOperators.indexOf(this.userid) > -1 && this.authenticated) {
        	return true;
        } else {
        	return false;
        }
    };
    
};
