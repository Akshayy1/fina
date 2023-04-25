let count=0; 
function next(){
    count++;
    if(count==1){
        
        document.getElementById("nextt1").style.display="none";
        document.getElementById("nextt2").style.display="block";
        document.getElementById("nextt3").style.display="none";
        
        }
     else if(count==2){
            document.getElementById("nextt1").style.display="none";
            document.getElementById("nextt2").style.display="none";
            document.getElementById("nextt3").style.display="block";
            }
           
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
----------------------------------------------------------------
let a=document.getElementById("firstName");
let b=document.getElementById("lastName");
let c=document.getElementById("yourage");
let count=0; 
function next(){
    if(a.value =="")
    {
        document.getElementById("empty").innerHTML="field required";
    }
    else{
        if(b.value =="")
        {
            document.getElementById("empty").innerHTML="field required";
        }
        else
        {
            if(c.value =="")
            {
                document.getElementById("empty").innerHTML="field required";
            }
            else
            {
                count++;
    if(count==1){
        
        document.getElementById("nextt1").style.display="none";
        document.getElementById("nextt2").style.display="block";
        document.getElementById("nextt3").style.display="none";
        
        }
     else if(count==2){
            document.getElementById("nextt1").style.display="none";
            document.getElementById("nextt2").style.display="none";
            document.getElementById("nextt3").style.display="block";
            }
            }
        }
    }
           
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
