function insertTextAtCursor(el, text, offset) {
    var val = el.value, endIndex, range, doc = el.ownerDocument;
    if (typeof el.selectionStart == "number"
            && typeof el.selectionEnd == "number") {
        endIndex = el.selectionEnd;
        el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
        el.selectionStart = el.selectionEnd = endIndex + text.length+(offset?offset:0);
    } else if (doc.selection != "undefined" && doc.selection.createRange) {
        el.focus();
        range = doc.selection.createRange();
        range.collapse(false);
        range.text = text;
        range.select();
    }
}
function insert(info, tab) {
	insertTextAtCursor(document.getElementById('out'),'Привет');
};

chrome.contextMenus.create({
'type': 'separator', 
'title': 'Text insert',
'contexts':['editable','page'],
'onclick': insert
});
chrome.contextMenus.create({
	'title': 'Test parent item',
	'contexts':['editable'],
	'onclick': insert
});