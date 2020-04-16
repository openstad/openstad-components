let oscSessionStorage = {};

oscSessionStorage.get = function(name) {

	var value = sessionStorage.getItem(name);

	try {
		value = JSON.parse(value);
	} catch(err) {}

	return value;

}

oscSessionStorage.set = function(name, value) {

	if ( typeof name != 'string' ) return;

	if ( typeof value == 'undefined' ) value = "";
	if ( typeof value == 'object' ) {
		try {
			value = JSON.stringify(value);
		} catch(err) {}
	};

	sessionStorage.setItem( name, value );

}


oscSessionStorage.remove = function(name) {
  sessionStorage.removeItem(name)
}

export default oscSessionStorage;
