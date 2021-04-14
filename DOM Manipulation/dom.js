// EXAMINE THE DOCUMENT OBJECT //

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

//changing the title of the page
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);