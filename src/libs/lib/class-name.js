'use strict';

export function addToClassname(obj, className) {
	if (obj) {
    if (!obj.className) obj.className = '';
		if (!obj.className.match(new RegExp(' ?' + className + '(?: |$)' ))) {
			obj.className += ' ' + className;
		}
	}
  return obj;
}

export function removeFromClassName(obj, className) {
	if (obj && obj.className) {
		obj.className = obj.className.replace(new RegExp(' ?' + className + '(?: |$)' ), '');
	}
  return obj;
  
}

