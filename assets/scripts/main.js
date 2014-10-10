function walk(node) {
	'use strict';
	var child, next;
	switch (node.nodeType){
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			var assmar = node.nodeValue;

			assmar = assmar.replace(/asthma/g, 'ass-mar');
			assmar = assmar.replace(/Asthma/g, 'Ass-mar');
			assmar = assmar.replace(/ASTHMA/g, 'ASS-MAR');

			node.nodeValue = assmar;
			break;
	}
}

walk(document.body);