function postionFixed(){
    let postion = document.getElementById("postion2");
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue < 120){
        postion.classList.remove("postionFixed");
       
    }
    else{
        postion.classList.add("postionFixed");
     
    }
}
window.addEventListener("scroll", postionFixed);

// let home = document.querySelector("#home");
// let clickHome = home.addEventListener("click",clickHome);
// function clickHome(){
//     document.getElementById(home).src
// }


// ../../../Portfolio02/ASSETS/HTML/Index.html



// let classsub = document.querySelectorAll(".programeValu").length;
// function postionFixed(){
//     const studentList = document.getElementById("ulselect");

// const student1 = studentList.querySelectorAll("student3");
//     let scrollValue = window.scrollY;
//     console.log(scrollValue);
//     if(scrollValue < 200){
//         postion.classList.remove("experienceBodySectionInner ul li::after");
       
//     }
//     else{
//         postion.classList.add("experienceBodySectionInner ul li::after");
     
//     }
// }
// window.addEventListener("scroll", postionFixed);




 