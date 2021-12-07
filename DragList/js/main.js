let listItems = document.querySelectorAll('#firstList li');
let secondList = document.getElementById('secondList')

secondList.ondragover = (ev)=>ev.preventDefault();

secondList.ondrop=function(ev){
    console.log("drop olundu");
}

listItems.forEach(x=>x.ondragstart=function(ev){
    ev.dataTransfer.setData('dataOrder',this.getAttribute('data-order'));
})

secondList.ondrop=function(ev){
    let order = ev.dataTransfer.getData('dataOrder');
    let elem = document.querySelector('#firstList [data-order="'+order+'"]')


    ev.target.appendChild(elem)
}

let textBox = document.getElementById('text-box');

textBox.ondragover = (ev)=>ev.preventDefault();

textBox.ondrop = function(ev){
    let order = ev.dataTransfer.getData('dataOrder');
    let elem = document.querySelector('#firstList [data-order="'+order+'"]');


    alert(elem.innerText)
}