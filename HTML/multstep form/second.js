let a=document.getElementById("firstName");
let b=document.getElementById("lastName");
let c=document.getElementById("yourage");
let d=document.getElementById("youremail");
let e=document.getElementById("mobile");
let f=document.getElementById("yourpassword");
let g=document.getElementById("confirmpass");
let count=0; 


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