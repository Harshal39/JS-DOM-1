let windowInfo = window;
console.log(windowInfo);//Gives information of window

let documentInfo = document;
console.log(documentInfo);//Gives information of document

let element_1 = document.getElementById('title');
console.log(element_1);//To access element of a web page by id name

element_1 = document.getElementById('title').className;
console.log(element_1);//To display the class name of particular web page element using id name

element_1 = document.getElementById('title').getAttribute('id');
console.log(element_1);//To get the attribute of html tag attributes can be className etc

element_1 = document.getElementById('title').setAttribute('class','test');
console.log(element_1);//It will overwrite the previous class name and give new class name.
/*
Syntax:- document.getElementById('idName').setAttribute('class','newName');
*/

element_1 = document.getElementById('title').setAttribute('class','test heading');
console.log(element_1);//It will add new class test along with heading class

element_1 = document.getElementById('title');
element_1.style.backgroundColor = 'green';//It will change the styling that is background color of title id in web page
element_1.style.padding = "15px";//It will change padding of title id on web page
element_1.style.borderRadius = "15px";//It will change the border radius of title id on web page
//In this way we can access element and give it styling using javascript

console.log(element_1.innerHTML);//It displays the overall HTML structure of webpage
console.log(element_1.innerText);//It displays only the visible content of web page
console.log(element_1.textContent);//It displays all the content of id even if text is hidden

console.log(document.querySelector('#title'));//Selecting id of web page using query selector it will access only first tag or title or className of web page
console.log(document.querySelectorAll('h2'));//It will select all the h2 elements of web page
console.log(document.querySelector('input[type="password"]'));//It will select input type element

const list = document.querySelectorAll('h2');
list[0].style.backgroundColor = "yellow";//Manipulating a particular h2 tag when there are multiple h2 tags
list.forEach(function(list) {
  list.style.color = "blue"; //It will iterate over all the h2 elements and make their text color blue
})

const listItem = document.getElementsByClassName('list-item');
console.log(listItem);//It will give html collection of list item

const arrayForm = Array.from(listItem);
console.log(arrayForm);//Converting HTML collection to array form.
arrayForm.forEach(function(list){
    list.style.color = "orange";
})//All the list elements with be converted into orange color text

//querySelector command gives nodelist
//document.getElementById('idName') gives HTML collection


const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);//It will display HTML collection
console.log(parent.children[1].innerHTML);//Specific children of a parent class

/*for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML);//Displaying all the child elements of parent class
}*/

parent.children[1].style.color = "orange";

const child = parent.firstElementChild;
console.log(child.innerHTML);//Gives first child of parent element
const lastChild = parent.lastElementChild;
console.log(lastChild.innerHTML);//Gives last child of parent element

const parentInfo = child.parentElement;
console.log(parentInfo.innerHTML); //Displays parent element from child element
const sibling = child.nextElementSibling;
console.log(sibling.innerHTML); //Displays sibling element of child element

const nodeList = ("NODES: ", parent.childNodes);
console.log(nodeList); //Shows node list


/*
A NodeList and an HTMLCollection are both types of objects that represent collections of DOM nodes in a web document, but they have some key differences:

1. Type of Nodes Contained:
NodeList:
A NodeList can contain any type of nodes, including elements, text nodes, comments, etc. For example, if you use document.querySelectorAll(), you'll get a NodeList that contains only elements, but NodeLists can also contain other node types depending on the method used to generate them.
HTMLCollection:
An HTMLCollection contains only elements. It is a live collection of HTML elements in the document.

2. Live vs. Static:
NodeList:
A NodeList can be either live or static depending on how it was created. For example, document.querySelectorAll() returns a static NodeList that does not automatically update when the document changes. However, NodeList objects returned by Node.childNodes are live, meaning they will automatically update as the DOM changes.
HTMLCollection:
An HTMLCollection is always live. It automatically updates to reflect changes in the DOM. For example, if elements are added or removed from the document, the HTMLCollection will reflect these changes immediately.

3. Accessing Items:
Both NodeList and HTMLCollection:
Items in both NodeList and HTMLCollection can be accessed by index, similar to arrays (e.g., collection[0]).
HTMLCollection:
In addition to accessing elements by index, you can also access elements in an HTMLCollection by their name or id attributes if they are present (e.g., collection["elementName"]).

4. Methods Available:
NodeList:
In modern browsers, NodeList has the forEach() method, which allows you to iterate over its items directly. It also supports methods like entries(), keys(), and values() when converted to an iterable.
HTMLCollection:
HTMLCollection does not have the forEach() method, and it cannot be directly iterated over using for...of unless you convert it to an array first.

5. Array-Like Behavior:
Both NodeList and HTMLCollection:
Both are array-like objects, meaning they have a length property and can be accessed by index. However, they are not true arrays, so array methods like map(), filter(), or reduce() do not work directly on them without conversion to an array.

Summary:
NodeList: Can contain any node type, can be live or static, has the forEach() method, but is not inherently live unless created by a method like childNodes.
HTMLCollection: Contains only element nodes, is always live, and allows access by index and by name or id attributes.
*/