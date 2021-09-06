/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const targetNode=document.getElementById('navbar__list');
const newLi1=document.createElement('li');
const newLi2=document.createElement('li');
const newLi3=document.createElement('li');
const newLi4=document.createElement('li');
const link1=document.createElement('a');
const link2=document.createElement('a');
const link3=document.createElement('a');
const link4=document.createElement('a');
const li1=document.createTextNode('Section1');
const li2=document.createTextNode('Section2');
const li3=document.createTextNode('Section3');
const li4=document.createTextNode('Section4');
link1.appendChild(li1);
newLi1.appendChild(link1).setAttribute('href','#section1');
link1.setAttribute('class','section1 active');
targetNode.appendChild(newLi1);
link2.appendChild(li2);
newLi2.appendChild(link2).setAttribute('href','#section2');
link2.setAttribute('class','section2');
targetNode.appendChild(newLi2);
link3.appendChild(li3);
newLi3.appendChild(link3).setAttribute('href','#section3');
link3.setAttribute('class','section3');
targetNode.appendChild(newLi3);
link4.appendChild(li4);
newLi4.appendChild(link4).setAttribute('href','#section4');
link4.setAttribute('class','section4');
targetNode.appendChild(newLi4);
/**
 * End Global Variables
 * Start Helper Functions

*/


const sections=document.querySelectorAll('section');
const linkItems=document.querySelectorAll('a');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



window.addEventListener('scroll',()=>{
    let currentSection='';
    sections.forEach(section => {
      const top= section.offsetTop;
      const sectionHeight=section.clientHeight;
      if (pageYOffset>=(top-sectionHeight/3)) {
        currentSection=section.getAttribute('id');


      }

    })

linkItems.forEach(a => {
  a.classList.remove('active') ;
  if(a.classList.contains(currentSection)){
     a.classList.add('active');
  }

})

});