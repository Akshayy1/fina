const outerbox=document.querySelector(".container");
const innerbox=document.querySelectorAll(".box");
innerbox.forEach(x => {
    x.addEventListener('dragstart',(e) =>
    {
        console.log("drag has been started");
        x.classList.add('content');
        setTimeout(() => {
            e.target.className += ' hide';
        }, 0);
    });
    x.addEventListener('dragend',() =>
    {
        console.log("dragend has been started");
        x.classList.remove("hide");
        x.classList.remove('content');
        
    });
});
    
outerbox.addEventListener('dragover',(e) =>
    {
        e.preventDefault();
        console.log("dragover has been started");
        const current = document.querySelector(".content");
       outerbox.appendChild(current);
    
    });
outerbox.addEventListener('drop',(e) =>
{
   
});