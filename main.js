function lineThrough(){
    let items = document.querySelectorAll('ul li');
    items[0].style.textDecoration = 'line-through';
}

lineThrough();

function changeSource(str, url){
    document.querySelector(`#${str}`).src = `${url}`
}

changeSource('image-1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TNZPc0ZU92KAInH8sB_dnnp5sR5D31Z29g&usqp=CAU')

changeSource('image-2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3iNRcBqFMr2fJnxIH1WfT_hx6B47IqpEzQ&usqp=CAU')

changeSource('image-3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgpHm5l2qAR5ScXmzV2GUtl4A-lYkdCakEsg&usqp=CAU')



function removeFirst(){
   let items = document.querySelectorAll('ul li');
   items[0].remove();
}

removeFirst()
removeFirst()

function changeFontSize(elementID, fontSize){
    document.querySelector(`#${elementID}`).style.fontSize = fontSize
}

changeFontSize('big', '30px');

function appendArgument(elem){
    document.querySelector('ul').append(elem);
}

let newImage = document.createElement('img');
newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLM-PXPV4uHgr5QOzyyCQnqRmTyJ07cODP3g&usqp=CAU';

appendArgument(newImage)

function changeHeight(elem){
    elem.style.height = '30px';
}

changeHeight(newImage)

function makeInvisible(element){
    element.classList.add('invisible')
}

thisIsInvisible = document.querySelector('textarea');

makeInvisible(thisIsInvisible)



function newListItem(str){
    let newitem = document.createElement('li');
    newitem.innerText = str
    return newitem
}

let thisItem = newListItem('This is a list item')

appendArgument(thisItem)

function headerText(size, str){
    let header = document.createElement(`h${size}`)
    header.innerText = str
    return header
}

let newHeader = headerText('2', 'My New Header');

appendArgument(newHeader)














