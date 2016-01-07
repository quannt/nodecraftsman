'use strict';

var greet = function(name){
	if (!name){
		name = 'world';
	}
	return 'Hello ' + name + '!';
};

module.exports = greet;