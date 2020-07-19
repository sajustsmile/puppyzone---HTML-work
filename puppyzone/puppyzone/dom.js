       // EXAMINE THE DOCUMENT OBJECT //
//   console.dir(document);
//   console.log(document.domain);
//  console.log(document.URL); 
// console.log(document.title);
//  document.title = 123;
//  console.log(document.doctype);
// console.log(document.head);
//  console.log(document.body);
//  console.log(document.all);
//  console.log(document.all[10]);
//  document.all[20].textContent = 'Hello';
//  console.log(document.links);
//  console.log(document.images);

      // GET ELEMENT BY ID //
//  console.log(document.getElementById('main-footer'));
//  var mainFooter = document.getElementById('main-footer');
//  console.log(mainFooter);
//   console.log(document.getElementById('main-header'));
//    var mainHeader = document.getElementById('main-header');
//   console.log(mainHeader);
  console.log(document.getElementById('showcase'));
  var showcase = document.getElementById('showcase');
//   console.log(showcase);
//  mainHeader.textContent = 'Header';
//  mainHeader.innerHTML = "Footer";
//  console.log(mainHeader.innerText);
// mainHeader.innerHTML = '<h1>Hello</h1>';
 showcase.style.borderBottom = 'solid 3px #000';
 showcase.style.borderTop = 'solid 3px #000';

 // GET ELEMENT BY CLASS NAME //
 var navbar = document.getElementsByClassName('list-group-item');
 console.log(navbar);
 console.log[1];
//  navbar[1].textContent = 'Hello 2';
//  navbar[1].style.fontWeight = 'bold';
//  navbar[1].style.backgroundColor = 'yellow';
 navbar[1].style.Color = 'yellow';

// // Gives error
//  items.style.backgroundColor = '#f4f4f4';

//FOR-LOOP

//   for (var i = 1; i < navbar.length; i++){
    //  navbar[i].style.backgroundColor = 'pink';
//   }

// GET ELEMENT BY NAME //
  var option = document.getElementsByTagName('option');
  console.log(option);
// var aside = document.getElementsByTagName('aside');
// console.log(aside);

 option[0].style.backgroundColor = '#fefd97';
  option[1].style.backgroundColor = '#feed97';
 option[2].style.backgroundColor = '#a5f8ce';
  option[3].style.backgroundColor = '#fec9a7';
 option[4].style.backgroundColor = '#caa7bd';

// QUERY SELECTOR //
// var input = document.querySelector('input');
// input.value = 'Test 1';

//  var submit = document.querySelector('input[type="submit"]');
//  submit.value = "SEND";
// console.log(document.querySelector('.list-group-item'));
// var navbar = document.querySelector('.list-group-item');
// navbar.style.color = 'red';


//  var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

//  var secondItem = document.querySelector('.list-group-item: nth-cild(2)');
//  secondItem.style.color = 'coral';


// QUERYSELECTOR //
 var header = document.querySelector('#main-header');
  header.style.borderBottom = 'solid 4px #ccc';

 // var input = document.querySelector('input');  
 // input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var navbar = document.querySelector('.list-group-item');
// navbar.style.color = 'red';

//  var lastItem = document.querySelector('.list-group-item:last-child');
//  lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
  // var titles = document.querySelectorAll('.title');

  // console.log(titles);
 // titles[0].textContent = 'Hello';

 // var odd = document.querySelectorAll('li:nth-child(odd)');
 // var even= document.querySelectorAll('li:nth-child(even)');

 // for(var i = 0; i < odd.length; i++){
    // odd[i].style.backgroundColor = '#f4f4f4';
    // even[i].style.backgroundColor = '#ccc';
    // }

    // TRAVERSING THE DOM//
    var itemList = document.querySelector('#items');
    // parentNode
    // console.log(itemList.parentNode);
    // itemList.parentNode.style.backgroundColor = '#f4f4f4';
    // console.log(itemList.parentNode.parentNode);

 // //parentElement
    //  console.log(itemList.parentElement);
    //  itemList.parentElement.style.backgroundColor = '#f4f4f4';
    // console.log(itemList.parentNode.parentNode);

    // // childNodes
  //   console.log(itemList.children);
  //   console.log(itemList.children[1]);
  //  itemList.children[1].style.backgroundColor = 'yellow';
 
  // // FirstChild
  // console.log(itemList.firstChild);
  // // firstElementChild
  // // itemList.firstElementChild.textContent = 'Hello';

  // //  lastChild
  // // console.log(itemList.lastChild);
  // //  lastElementChild
  // console.log(itemList.lastElementChild);
  //  itemList.lastElementChild.textContent = 'Hello';

  // nextSibling
  // console.log(itemList.nextSibling);
  // nextElementSibling
  // console.log(itemList.nextElementSibling);

    // previousSibling
    // console.log(itemList.previousSibling);

    // previousElementSibling
    // console.log(itemList.previousElementSibling);
    // itemList.previousElementChild.style.color = 'green';

    // createElement

    // Create a div
    // var newDiv  = document.createElement('div');

    // //  Add Class
    // newDiv.className= 'Hello';
    // //  Add id
    // newDiv.id = 'hello1';

    // //   //Add attr
    // newDiv.setAttribute('title', 'Hello Div');

    // //   //Create text node
    // var newDivText = document.createTextNode('Hello World');

    // //   //Add text to div
    // newDiv.appendChild(newDivText);

    // var container  = document.querySelector('header .container');
    // var h1 = document.querySelector('header h1');
    
    // console.log(newDiv);

    // newDiv.style.fontSize= '30px';

    // container.insertBefore(newDiv, h1);

  // var submit = document.querySelector('input[type="submit"]');
  // submit.value = "SEND";
  // submit.style.backgroundColor = 'grey';
  var box =document.getElementById('box');
  box.addEventListener('mousemove', runEvent);

function runEvent(e){
  console.log('EVENT TYPE: '+e.type);
  // output.innerHTML= '<h3>MouseY: ' +e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';
document.body.style.backgroundColor ="rgb("+e.offsetX+","+e.offsetY+", 40)";
}