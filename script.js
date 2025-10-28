let imgtag = document.getElementById('imgtag')
let h3tag = document.getElementById('h3tag')
let ptag = document.getElementById('ptag')

let fit1 = document.getElementById('fit1')
let fit2 = document.getElementById('fit2')

let mus1 = document.getElementById('mus1')
let mus2 = document.getElementById('mus2')

let bod1 = document.getElementById('bod1')
let bod2 = document.getElementById('bod2')

let yoga1 = document.getElementById('yoga1')
let yoga2 = document.getElementById('yoga2')

let adv1 = document.getElementById('adv1')
let adv2 = document.getElementById('adv2')




function FirstTraning() {    
    imgtag.src = './Asset/training-image-01.jpg'
    h3tag.innerHTML = 'First Training Class'
    ptag.innerHTML ='First Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. <br>Sed suscipit suscipit erat, sed vehicula ligula.  Aliquam ut sem fermentum sem tincidunt lacinia <br> gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.'
}
function SecondTraning() {    
    imgtag.src = './Asset/training-image-02.jpg'
    h3tag.innerHTML = 'Second Training Class'
    ptag.innerHTML ='Second Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. <br>Sed suscipit suscipit erat, sed vehicula ligula.  Aliquam ut sem fermentum sem tincidunt lacinia <br> gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.'
}
function ThirdTraning() {    
    imgtag.src = './Asset/training-image-03.jpg'
    h3tag.innerHTML = 'Third Training Class'
    ptag.innerHTML ='Third Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. <br>Sed suscipit suscipit erat, sed vehicula ligula.  Aliquam ut sem fermentum sem tincidunt lacinia <br> gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.'
}

function FourthTraining() {
    imgtag.src = './Asset/training-image-04.jpg'
    h3tag.innerHTML = 'Fourth Training Class'
    ptag.innerHTML = 'Fourth Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit.<br>Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia <br> gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.'
}


function Monday() {
    fit1.innerHTML = '10:00AM - 11:30AM'
    bod2.innerHTML = '2:00PM - 3:30PM'
    fit2.innerHTML = ' '
    mus1.innerHTML = ' '
    mus2.innerHTML = ' '
    bod1.innerHTML = ' '
    yoga1.innerHTML = ' '
    yoga2.innerHTML = ' '
    adv1.innerHTML = ' '
    adv2.innerHTML = ' '
}

function Tuesday() {
    fit2.innerHTML = '2:00PM - 3:30PM'
    bod1.innerHTML = '10:00AM - 11:30AM'
    fit1.innerHTML = ' '
    mus1.innerHTML = ' '
    mus2.innerHTML = ' '
    bod2.innerHTML = ' '
    yoga1.innerHTML = ' '
    yoga2.innerHTML = ' '
    adv1.innerHTML = ' '
    adv2.innerHTML = ' '
}

function Wednesday() {
    yoga1.innerHTML = '10:00AM - 11:30AM'
    adv2.innerHTML = '2:00PM - 3:30PM'
    fit1.innerHTML = ' '
    fit2.innerHTML = ' '
    mus1.innerHTML = ' '
    mus2.innerHTML = ' '
    bod1.innerHTML = ' '
    bod2.innerHTML = ' '
    yoga2.innerHTML = ' '
    adv1.innerHTML = ' '
}

function Thursday() {
    mus2.innerHTML = '2:00PM - 3:30PM'
    adv1.innerHTML = '10:00AM - 11:30AM'
    fit1.innerHTML = ' '
    fit2.innerHTML = ' '
    mus1.innerHTML = ' '
    bod1.innerHTML = ' '
    bod2.innerHTML = ' '
    yoga1.innerHTML = ' '
    yoga2.innerHTML = ' '
    adv2.innerHTML = ' '

}

function Friday() {
    mus1.innerHTML = '10:00AM - 11:30AM'
    yoga2.innerHTML = '2:00PM - 3:30PM'
    fit1.innerHTML = ' '
    fit2.innerHTML = ' '
    mus2.innerHTML = ' '
    bod1.innerHTML = ' '
    bod2.innerHTML = ' '
    yoga1.innerHTML = ' '
    adv1.innerHTML = ' '
    adv2.innerHTML = ' '
}

function ScrollBar() {
    let navbar = document.getElementById('narbar2')
    let stickyPoint = 500
    if (pageYOffset > stickyPoint) {
        navbar.classList.add('narbartwu-container')
    } else {
        navbar.classList.remove('narbartwu-container')
    }
}
window.addEventListener('scroll', ScrollBar )

function ResponsiveBars() {
    let baricons = document.getElementById('baricons')
    console.log(baricons);
    let bar = document.getElementById('bar')
    console.log(bar);
    
    if (baricons.classList.contains('fa-bars')) {
        baricons.classList.remove('fa-bars')
        baricons.classList.add('fa-xmark')
        bar.classList.remove('hidden')
        
    } else {
        baricons.classList.remove('fa-xmark')
        baricons.classList.add('fa-bars')
        bar.classList.add('hidden')

        
    }
}

function Bars() {
    alert('yeeee')
}