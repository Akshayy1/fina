let a=document.getElementById("firstName");
let b=document.getElementById("lastName");
let c=document.getElementById("yourage");
let d=document.getElementById("youremail");
let e=document.getElementById("mobile");
let f=document.getElementById("yourpassword");
let g=document.getElementById("confirmpass");
let count=0; 
let counter=0;

function next(){
    if(a.value =="")
    {
        document.getElementById("empty").innerHTML="field required";
        
    }
    else{
        document.getElementById("empty").innerHTML="";
        if(b.value =="")
        {
            document.getElementById("emptyone").innerHTML="field required";
        }
        else
        {  document.getElementById("emptyone").innerHTML="";
            if(c.value =="")
            {
                document.getElementById("emptysecond").innerHTML="field required";
            }
            else
            {document.getElementById("emptysecond").innerHTML="";
               
    if(count==0){
        
        document.getElementById("nextt1").style.display="none";
        document.getElementById("nextt2").style.display="block";
        document.getElementById("nextt3").style.display="none";
        count++;
        }
        document.getElementById("loading").style.width="33%";
            }
        }
    }
           
}
function secondnext(){
      if(d.value == ""){
        document.getElementById("emptyemail").innerHTML="field required";
      }
      else
      {
        document.getElementById("emptyemail").innerHTML="";
        if(e.value =="")
        {
            document.getElementById("emptymobile").innerHTML="field required";
        }
        else
        {document.getElementById("emptymobile").innerHTML="";
             if(count==1){
                document.getElementById("nextt1").style.display="none";
                document.getElementById("nextt2").style.display="none";
                document.getElementById("nextt3").style.display="block";
                count++;
                }
                document.getElementById("loading").style.width="66%";
        }
      }


}

function finalsubmit()
{   
    if(f.value=="")
    {
        event.preventDefault();
        document.getElementById("emptypassword").innerHTML="field required";
    }
    else
    {
        document.getElementById("emptypassword").innerHTML="";
        if(g.value=="")
        { event.preventDefault();
            document.getElementById("confirmempty").innerHTML="field required";  
        }
        else
        {  
            document.getElementById("confirmempty").innerHTML=""; 
            document.getElementById("loading").style.width="100%";

        }
        
    }
    // document.getElementById("nextt3").style.display="none";
    // document.getElementById("step4").style.display="block";

    
}        
function prev(){
    count--;
    if(count==0){
       document.getElementById("nextt1").style.display="block";
       document.getElementById("nextt2").style.display="none";
       document.getElementById("nextt3").style.display="none";
       }
    else if(count==1){
           document.getElementById("nextt1").style.display="none";
           document.getElementById("nextt2").style.display="block";
           document.getElementById("nextt3").style.display="none";
           }
           
        }
function adds(){
    event.preventDefault();
    counter++;
    let node=document.getElementById("added");
    let div=document.createElement("div");
        div.id="formm"+counter;
        node.appendChild(div);
        document.getElementById("formm"+counter).innerHTML +=`<div class="information">
        <label for="education">Education</label>
        <select name="educate" id="education">
          <option value="none" selected>none</option>
          <option value="10th">10th</option>
          <option value="12th">12th</option>
          <option value="graduation">Graduation</option>
        </select>
      </div>
      <div class="information">
        <label for="percent">Percentage</label>
        <input type="number" id="percent">
      </div>
      <div class="information">
        <label for="passing">Passing Year</label>
        <input type="number" id="pasing">
      </div>
      <div class="information">
        <label for="division">Division</label>
        <input type="number" id="division">
      </div>
      <label for="remove">REMOVE</label>
            <button type="button" id="remove">-</button>`
        }
function remove()
{
} 
        