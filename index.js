var intro = document.querySelector("#intro");
var count=0;
var list = ['HI','I','Am',"Abisaya Nepolian"];
var time=setInterval(() => {
    console.log("hi");
    console.log(count);
    if(count>3){
        console.log("hi");
        clearTimeout(time);
        document.querySelector("#content2>main").style="display:flex;"
        
    }
    else{
        intro.innerHTML=list[count];
    }
    count++;
}, 800);
window.addEventListener('load', () => {

const targetElement = document.querySelector('#content1');
targetElement.scrollIntoView({ behavior: 'smooth' });
targetElement.style="height:100vh"
    
});
 function starting() {

const targetElement = document.querySelector('#content1');
targetElement.scrollIntoView({ behavior: 'smooth' });
targetElement.style="height:100vh"
    
};
starting();
document.querySelectorAll('#navbar ul li').forEach(item => {
    item.addEventListener('click', (event) => {
        const targetId = event.target.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.style="height:100vh"
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});