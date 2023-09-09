// js slides

const back = document.querySelector ('#back');
const next = document.querySelector ("#next");

const photos = ["img_5941.png","img_5942.png","img_5943.png","img_5944.png","img_5945.png"];

console.log (photos[1]);

let i=0;
next.addEventListener ('click',()=> {
    i++;
    if (i>photos.length -1) {
        i=0;
    }

    document.querySelector ('#pictures').src = photos [i];
})

back.addEventListener ('click',()=> {
    i--;
    if (i < 0) {
        i = photos.length -1;

    }
    document.querySelector ('#pictures').src = photos[i];  
})

// выписала код для второго элемента

const backTwo = document.querySelector ('#backTwo');
const nextTwo = document.querySelector ("#nextTwo");
const photosThailand = ["img_5946.png","img_5947.png","img_5948.png","img_5949.png","img_5950.png","img_5951.png","img_5952.png"];

 console.log (photosThailand[1]);

let a=0;
nextTwo.addEventListener ('click',()=> {
    a++;
    if (a>photosThailand.length -1) {
        a=0;
    }
    document.querySelector ('#picturesTwo').src = photosThailand [a];
})

backTwo.addEventListener ('click',()=> {
    a--;
    if (a < 0) {
        a = photosThailand.length -1;
    }
    document.querySelector ('#picturesTwo').src = photosThailand[a]; 
})

// код для третьего элемента

const backThree = document.querySelector ('#backThree');
const nextThree = document.querySelector ("#nextThree");
const photosTuscany = ["tuscany1.png","tuscany2.png","tuscany3.png","tuscany4.png","tuscany5.png","tuscany6.png","tuscany7.png","tuscany8.png","tuscany9.png","tuscany10.png"];

console.log (photosTuscany[1]);

let b=0;
nextThree.addEventListener ('click',()=> {
    b++;
    if (b>photosTuscany.length -1) {
        b=0;
    }
    document.querySelector ('#picturesThree').src = photosTuscany [b];
})

backThree.addEventListener ('click',()=> {
    b--;
    if (b < 0) {
        b = photosTuscany.length -1;
    }
    document.querySelector ('#picturesThree').src = photosTuscany[b]; 
})

// код для четвертого элемента

const backFour = document.querySelector ("#backFour");
const nextFour = document.querySelector ("#nextFour");
const photosParis = ["paris1.png","paris2.png","paris3.png","paris4.png","paris5.png","paris6.png","paris7.png"];

console.log (photosParis[1]);

let c = 0;
nextFour.addEventListener ('click',()=> {
    c++;
    if (c>photosParis.length -1) {
        c = 0;
    }
    document.querySelector ('#picturesFour').src = photosParis [c];
})

backFour.addEventListener ('click',()=> {
    c--;
    if (c < 0) {
        c = photosParis.length -1;
    }
    document.querySelector ('#picturesFour').src = photosParis[c]; 
})

// код для пятого элемента

const backFive = document.querySelector ("#backFive");
const nextFive = document.querySelector ("#nextFive");
const photosGreece = ["greece1.png","greece2.png","greece3.png","greece4.png","greece5.png","greece6.png","greece7.png"];

console.log (photosGreece[1]);

let d = 0;
nextFive.addEventListener ('click',()=> {
    d++;
    if (d>photosGreece.length -1) {
        d = 0;
    }
    document.querySelector ('#picturesFive').src = photosGreece [d];
})

backFive.addEventListener ('click',()=> {
    d--;
    if (d < 0) {
        d = photosGreece.length -1;
    }
    document.querySelector ('#picturesFive').src = photosGreece[d]; 
})

// код для шестого элемента

const backSix = document.querySelector ("#backSix");
const nextSix = document.querySelector ("#nextSix");
const photosTurkey = ["turkey1.png","turkey2.png","turkey3.png"];

console.log (photosTurkey[1]);

let e = 0;
nextSix.addEventListener ('click',()=> {
    e++;
    if (e>photosTurkey.length -1) {
        e = 0;
    }
    document.querySelector ('#picturesSix').src = photosTurkey [e];
})

backSix.addEventListener ('click',()=> {
    e--;
    if (e < 0) {
        e = photosTurkey.length -1;
    }
    document.querySelector ('#picturesSix').src = photosTurkey[e]; 
})

// код для седьмого элемента

const backSeven = document.querySelector ("#backSeven");
const nextSeven = document.querySelector ("#nextSeven");
const photosSwitzerland = ["switzh1.png","switzh2.png","switzh3.png","switzh4.png","switzh5.png"];

console.log (photosSwitzerland[1]);

let f = 0;
nextSeven.addEventListener ('click',()=> {
    f++;
    if (f>photosSwitzerland.length -1) {
        f = 0;
    }
    document.querySelector ('#picturesSeven').src = photosSwitzerland [f];
})

backSeven.addEventListener ('click',()=> {
    f--;
    if (f < 0) {
        f = photosSwitzerland.length -1;
    }
    document.querySelector ('#picturesSeven').src = photosSwitzerland[f]; 
})

// код для восьмого элемента

const backEight = document.querySelector ("#backEight");
const nextEight = document.querySelector ("#nextEight");
const photosDolomiti = ["dolomiti1.png","dolomiti2.png","dolomiti3.png","dolomiti4.png","dolomiti5.png","dolomiti6.png","dolomiti7.png","dolomiti8.png"];

console.log (photosDolomiti[1]);

let g = 0;
nextEight.addEventListener ('click',()=> {
    g++;
    if (g>photosDolomiti.length -1) {
        g = 0;
    }
    document.querySelector ('#picturesEight').src = photosDolomiti [g];
})

backEight.addEventListener ('click',()=> {
    g--;
    if (g < 0) {
        g = photosDolomiti.length -1;
    }
    document.querySelector ('#picturesEight').src = photosDolomiti[g]; 
})

// код для девятого элемента

const backNine = document.querySelector ("#backNine");
const nextNine = document.querySelector ("#nextNine");
const photosSardinia = ["sardinia1.png","sardinia2.png","sardinia3.png","sardinia4.png","sardinia5.png","sardinia6.png","sardinia7.png","sardinia8.png"];

console.log (photosSardinia[1]);

let k = 0;
nextNine.addEventListener ('click',()=> {
    k++;
    if (k>photosSardinia.length -1) {
        k = 0;
    }
    document.querySelector ('#picturesNine').src = photosSardinia [k];
})

backNine.addEventListener ('click',()=> {
    k--;
    if (k < 0) {
        k = photosSardinia.length -1;
    }
    document.querySelector ('#picturesNine').src = photosSardinia[k]; 
})

// код для десятого элемента

const backTen = document.querySelector ("#backTen");
const nextTen = document.querySelector ("#nextTen");
const photosMaldives = ["maldives1.png","maldives2.png","maldives3.png","maldives4.png","maldives5.png","maldives6.png","maldives7.png","maldives8.png"];

console.log (photosMaldives[1]);

let l = 0;
nextTen.addEventListener ('click',()=> {
    l++;
    if (l>photosMaldives.length -1) {
        l = 0;
    }
    document.querySelector ('#picturesTen').src = photosMaldives [l];
})

backTen.addEventListener ('click',()=> {
    l--;
    if (l < 0) {
        l = photosMaldives.length -1;
    }
    document.querySelector ('#picturesTen').src = photosMaldives[l]; 
})


// code for travel search
const searchInput = document.querySelector ("#search");
const divs = document.querySelectorAll (".travelPlaces");


searchInput.addEventListener ("keyup", function (event) {
    const word = event.target.value.toLowerCase();

    divs.forEach (item => {
        item.querySelector ("p").textContent.toLowerCase().includes (word) ?
         (item.style.display = "block"): (item.style.display = "none");
    })
})
