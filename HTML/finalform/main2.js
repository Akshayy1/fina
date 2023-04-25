var count=0;
var v=0;
var names;
var lastName;
var email;
var age;
var mobile;
var gender;
var school;
var passing;
var degree;
var increasecount=0;
var page_one=document.querySelector("#first");
var page_oneinput=page_one.querySelectorAll(".dataone");
var page_onetag=page_one.querySelectorAll("p");

var page_two=document.querySelector("#second");
var page_twoinput=page_two.querySelectorAll(".dataone");
var page_twotag=page_two.querySelectorAll("p");

var page_three=document.querySelector("#third");
var page_threeinput=page_three.querySelectorAll(".dataone");
var page_threetag=page_three.querySelectorAll("p");

var page_four=document.querySelector("#forth");
var page_fourinput=page_four.querySelectorAll(".dataone");
var page_fourtag=page_four.querySelectorAll("p");

var page_fifth=document.querySelector("#fifth");
var page_fifthinput=page_fifth.querySelectorAll(".dataone");
var page_fifthtag=page_fifth.querySelectorAll("p");
function next_1()
{
   
   var obj={
      names,lastName,email,age,mobile,gender,Education[{}]
   }
   console.log(obj);
   if(count==0)
    {   
      
        for( var r=0;r<page_oneinput.length;r++)
    {   
       if(page_oneinput[r].value=="")
       {
        v=1;
        document.getElementById(`${page_onetag[r].id}`).innerHTML="feild required";
       }
       else
       {
       
         v=0;
         document.getElementById(`${page_onetag[r].id}`).innerText="";
         
       }
      
    }
    if(v==0)
   {
      count++;
         obj.names = page_oneinput[v].value;
         v++;
         obj.lastName=page_oneinput[v].value;
         v++;
         obj.email=page_oneinput[v].value;
         v++;
         obj.age=page_oneinput[v].value;
         v++
         obj.mobile=page_oneinput[v].value;
         v++;
         obj.gender=page_oneinput[v].value;
         console.log(obj);
      
      document.getElementById("first").style.display="none";
   document.getElementById("second").style.display="block";
   document.getElementById("third").style.display="none";
   document.getElementById("forth").style.display="none";
   document.getElementById("fifth").style.display="none";
   }
    }
   //  endone
   else if(count==1)
    {   
        for( var k=0;k<page_twoinput.length;k++)
    {   
       if(page_twoinput[k].value=="")
       {
        v=1;
        document.getElementById(`${page_twotag[k].id}`).innerHTML="feild required";
       }
       else
       {
        v=0;
         document.getElementById(`${page_twotag[k].id}`).innerText="";
         
       }
      
    }
    if(v==0)
   {
      count++;
      document.getElementById("first").style.display="none";
   document.getElementById("second").style.display="none";
   document.getElementById("third").style.display="block";
   document.getElementById("forth").style.display="none";
   document.getElementById("fifth").style.display="none";
   }
    }
   //  endtwo
   else if(count==2)
    {  
        for( var k=0;k<page_threeinput.length;k++)
    {   
       if(page_threeinput[k].value=="")
       {
        v=1;
        document.getElementById(`${page_threetag[k].id}`).innerHTML="feild required";
       }
       else
       {
        v=0;
         document.getElementById(`${page_threetag[k].id}`).innerText="";
         
       }
      
    }
    if(v==0)
   {
      count++;
      document.getElementById("first").style.display="none";
   document.getElementById("second").style.display="none";
   document.getElementById("third").style.display="none";
   document.getElementById("forth").style.display="block";
   document.getElementById("fifth").style.display="none";
   }
    }
   // endthree
   else if(count==3)
    {  
        for( var k=0;k<page_fourinput.length;k++)
    {   
       if(page_fourinput[k].value=="")
       {
        v=1;
        document.getElementById(`${page_fourtag[k].id}`).innerHTML="feild required";
       }
       else
       {
        v=0;
         document.getElementById(`${page_fourtag[k].id}`).innerText="";
         
       }
      
    }
    if(v==0)
   {
      count++;
      document.getElementById("first").style.display="none";
   document.getElementById("second").style.display="none";
   document.getElementById("third").style.display="none";
   document.getElementById("forth").style.display="none";
   document.getElementById("fifth").style.display="block";
   }
    }
}
function formSubmit()
{
   event.preventDefault();
   for( var k=0;k<page_fourinput.length;k++){
   if(page_fifthinput[k].value=="")
       {
        document.getElementById(`${page_fifthtag[k].id}`).innerHTML="feild required";
       }
       else
       {
         document.getElementById(`${page_fifthtag[k].id}`).innerText="";
         y
       }
      }
}
function back()
{
   if(count==4)
   {
      document.getElementById("first").style.display="none";
      document.getElementById("second").style.display="none";
      document.getElementById("third").style.display="none";
      document.getElementById("forth").style.display="block";
      document.getElementById("fifth").style.display="none";
      count--
   }
   else if(count==3)
   {
      document.getElementById("first").style.display="none";
      document.getElementById("second").style.display="none";
      document.getElementById("third").style.display="block";
      document.getElementById("forth").style.display="none";
      document.getElementById("fifth").style.display="none";
      count--;
   }
 else  if(count==2)
   {
      document.getElementById("first").style.display="none";
      document.getElementById("second").style.display="block";
      document.getElementById("third").style.display="none";
      document.getElementById("forth").style.display="none";
      document.getElementById("fifth").style.display="none";
      count--;
   }
 else  if(count==1)
   {
      document.getElementById("first").style.display="block";
      document.getElementById("second").style.display="none";
      document.getElementById("third").style.display="none";
      document.getElementById("forth").style.display="none";
      document.getElementById("fifth").style.display="none";
      count--;
   }
}
function adds()
{
   
   

   
   let backtick=`<div class="tobeadded-${increasecount}">
   <div class="information ">
       <label for="school">School Name</label>
       <input type="text" id="school" class="dataone">
       <p id="error11"></p>
   </div>
   <div class="information">
       <label for="passing">Passing Year</label>
       <input type="number" id="passing" class="dataone">
       <p id="error22"></p>
   </div>
   <div class="information">
       <label for="degree">Degree</label>
       <input type="text" id="degree" class="dataone">
       <p id="error33"></p>
   </div>
  </div>`
  var c=document.getElementById("second");
   let newdiv=document.createElement("div");
   //  newdiv.classList.add(`tobeadded_${increasecount}`);
   //  c.appendChild(newdiv);
  newdiv.innerHTML = backtick;
  c.appendChild(newdiv);
//   c.appendChild(newdiv);
increasecount++;
}