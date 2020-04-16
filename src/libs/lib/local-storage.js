let oscLocalStorage = {};

oscLocalStorage.get = function(name) {

	var value = localStorage.getItem(name);

	try {
		value = JSON.parse(value);
	} catch(err) {}

	return value;

}

oscLocalStorage.set = function(name, value) {

	if ( typeof name != 'string' ) return;

	if ( typeof value == 'undefined' ) value = "";
	if ( typeof value == 'object' ) {
		try {
			value = JSON.stringify(value);
		} catch(err) {}
	};

	localStorage.setItem( name, value );

}


oscLocalStorage.remove = function(name) {
  localStorage.removeItem(name)
}

export default oscLocalStorage;
