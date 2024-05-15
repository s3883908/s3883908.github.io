// const myHeading = document.querySelector("h1");
// console.log(myHeading);
// console.log(myHeading.textContent);
// console.log(myHeading.innerHTML);
// myHeading.style.backgroundColor = "limegreen";

// myHeading.textContent = "This is a new para"

const allMyPara = document.querySelectorAll("p")
console.log(allMyPara) ;

// for ( let i=0; i<3; i++)
// {
//     allMyPara[i].style.backgroundColor = "lightblue";
// }

allMyPara.forEach(changeColor);
function changeColor(item) {
    console.log(item.classlist);
    item.classlist.add("lime-box")
    // item.classlist.remove("inner")
    // item.style.backgroundColor = "hotpink";
}


// const myImage = document.querySelectorSelector("#my-image");
// console.log(myImage);
const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", toggleImage);

function toggleImage(){
    const myImage = document.querySelector("#my-image");
    console.log(myImage.CDATA_SECTION_NODE.catname);
    const myPara = document.querySelector("#greet");
    myPara.textContent = "Hi I am " + myImage.dataset.catname;
    myImage.classList.toggle("round");
}