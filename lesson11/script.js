let backcol = prompt("write background color for body ");
document.body.style.background = backcol;

let ff = prompt("write Font-family(cursive,serif, system-ui)");
document.body.style.fontFamily = ff;

let siteh1 = prompt("Write value for text-align h1(left,center,right)");
let sh1 = document.getElementsByTagName('h1');
sh1[0].style.textAlign = siteh1;

let pbc = prompt("write background color for p");
let pp = document.getElementsByClassName("pcolor");
pp[0].style.background = pbc;

let colorp = prompt('write color for p');
pp[0].style.color = colorp;
let alink = document.getElementsByTagName('a');
for (const elem of alink) {
    elem.style.color = colorp;
}

let divcolor = prompt("write color for div");
let divsize = prompt("write size for div(...px)");
let divweight = prompt("write weight for div(100-900)");
let dd = document.getElementById("box");
dd.style.color = divcolor;
dd.style.fontSize = divsize;
dd.style.fontWeight = divweight;

let ultype = prompt("write type for ul(disc,decimal,circle,lower-latin)");
let ull = document.getElementsByTagName('ul');
ull[0].style.listStyleType = ultype;


for(let i = 0;i<alink.length;i++){
    let linkaa = prompt(`Write link for link${i + 1}`);
    alink[i].href = linkaa;
    alink[i].textContent = linkaa;
    alink[i].target = "_blank"
};


