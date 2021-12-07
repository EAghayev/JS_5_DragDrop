let boxes = document.querySelectorAll('.box')
let mainBox = document.getElementById('mainBox')

// box.ondragstart=function(){
//     console.log("Drag strated")
// }

// box.ondragend = ()=>console.log("Drag finished")
// // box.ondrag=()=>console.log('dragging')

// mainBox.ondragenter=()=>{console.log("entered")};
// mainBox.ondragleave=()=>{console.log("leave")};
// mainBox.ondrop=()=>{console.log("dropped")};

// mainBox.ondragover=function(ev){
//     console.log(ev.offsetX)
//     console.log(ev.offsetY)
//     ev.preventDefault();
//     console.log(ev.target)
// }

let draggedItemOrder;

boxes.forEach(x=>x.ondragstart=function(ev){
    draggedItemOrder = this.getAttribute('data-order')
    console.log(draggedItemOrder)
})



mainBox.ondragover = (ev) => { ev.preventDefault() }

mainBox.ondrop = function (ev) {
    let draggedItem = document.querySelector('[data-order="'+draggedItemOrder+'"]')
    this.appendChild(draggedItem)
}



