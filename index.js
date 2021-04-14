 function calc1()
 {
   var field1=document.getElementById("input1").value;
   var field2=document.getElementById("input2").value;
   var res=parseFloat(field1)+parseFloat(field2);
   if(!isNaN(res))
   {
     document.getElementById("answer").innerHTML="Result "+res;
   }
 }
 function calc2()
 {
   var field1=document.getElementById("input1").value;
   var field2=document.getElementById("input2").value;
   var res=parseFloat(field1)-parseFloat(field2);
   if(!isNaN(res))
   {
     document.getElementById("answer").innerHTML="Result "+res;
   }
 }
 function calc3()
 {
   var field1=document.getElementById("input1").value;
   var field2=document.getElementById("input2").value;
   var res=parseFloat(field1)* parseFloat(field2);
   if(!isNaN(res))
   {
     document.getElementById("answer").innerHTML="Result "+res;
   }
 }
 function calc4()
 {
   var field1=document.getElementById("input1").value;
   var field2=document.getElementById("input2").value;
   var res=parseFloat(field1)/parseFloat(field2);
   if(!isNaN(res))
   {
     document.getElementById("answer").innerHTML="Result "+res;
   }
 }
 function calc5()
 {
   var field1=document.getElementById("input1").value;
   var field2=document.getElementById("input2").value;
   var res=parseFloat(field1)%parseFloat(field2);
   if(!isNaN(res))
   {
     document.getElementById("answer").innerHTML="Result "+res;
   }
 }
