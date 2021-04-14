// // EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// //changing the title of the page
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);



// #problem 3 


// //Difference b/w textContent and innerText is
// // innerText pays attention to the styling whereas
// //textContent does not 

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

// var elements = document.getElementsByClassName('title');
// elements[0].style.fontWeight = 'bold';
// elements[0].style.color = 'green';





var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';

for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
}
