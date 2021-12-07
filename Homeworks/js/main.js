let circle = document.getElementById('circle')
let world = document.getElementById('world')

console.log(circle)

let isEnterPressed=false;



window.addEventListener('keydown',function(ev){

    if(ev.keyCode==39){
            toRight(circle)
    }
    else if(ev.keyCode==40){
        toBottom(circle)
    }
    else if(ev.keyCode==37){
        toLeft(circle)
    }
    else if(ev.keyCode==38){
        toTop(circle)
    }
    else if(ev.keyCode==13){

        isEnterPressed=true;
        let childCircle = document.createElement('span');
        childCircle.className='childCircle';
        childCircle.style.left = circle.offsetLeft+13+'px';
        childCircle.style.top = circle.offsetTop+13+'px';

        world.appendChild(childCircle)
    }
})

window.addEventListener('keyup',function(ev){
    if(ev.keyCode==13){
        isEnterPressed=false
    }
})

function toRight(elem){

    if(elem.offsetLeft>400){
        elem.style.left='-39px'
    }

    elem.style.left = elem.offsetLeft+2+'px'
}

function toBottom(elem){
    if(elem.offsetTop>300){
        elem.style.top='-39px'
    }

    if(isEnterPressed){
        let childCircle = document.createElement('span');
        childCircle.className='childCircle';
        childCircle.style.left = circle.offsetLeft+13+'px';
        childCircle.style.top = circle.offsetTop+13+'px';

        world.appendChild(childCircle)
    }
    elem.style.top = elem.offsetTop+2+'px'
}

function toLeft(elem){

    if(elem.offsetLeft<-39){
        elem.style.left='399px'
    }
    elem.style.left = elem.offsetLeft-2+'px'
}


function toTop(elem){
    if(elem.offsetTop<-39){
        elem.style.top='300px'
    }
    elem.style.top = elem.offsetTop-2+'px'
}


world.addEventListener('click',function(ev){
    // console.log('pageY',ev.pageY)
    // console.log('clientY',ev.clientY)
    // console.log('offsetY',ev.offsetY)
    // console.log('screenY',ev.screenY)

    circle.style.left = ev.offsetX-20+'px'
    circle.style.top = ev.offsetY-20+'px'

})

