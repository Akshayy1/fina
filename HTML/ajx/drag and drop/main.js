const image=document.querySelector(".content");
const item=document.querySelectorAll(".content_box");
image.addEventListener('dragstart', (e) =>{
console.log("drag start");
e.target.className += ' hold';
setTimeout(() => {
    e.target.className += ' hide';
}, 0);


});
image.addEventListener('dragend', ()=>{
    console.log("drag end");
    image.classList.remove("hide");
}) ;

for(x of item){
    
    x.addEventListener('dragover',(e) =>{
        e.preventDefault();
        console.log("drag over");
    });
    x.addEventListener('dragenter',() =>{
        console.log("drag enter");
    });
    x.addEventListener('dragleave',() =>{
        console.log("drag leave");
    });
    
    x.addEventListener('drop',(e) =>{
    console.log("dragdrop");
    e.target.append(image);
   
    });
   
}