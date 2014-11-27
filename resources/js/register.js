// JavaScript Document
<script language="Javascript1.1">

function repasword(text1,text2){
	//to check weteher password re-entries same or not
	 if(text1!=text2){
		 return(windo.alert("Retype password same as the original one"));}
 }
 
 function checkall(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11){
	 //to check wether all fields are filled
	 var result="";
		 if(text1=""){
		 result = result+"First Name"}
		 if(text2=""){
		 result = result+"Last Name"}
		 	 if(text3=""){
		 result = result+"Gender"}
		 	 if(text4=""){
		 result = result+"Month"}
		 	 if(text5=""){
		 result = result+"Date"}
		 	 if(text6=""){
		 result = result+"Year"}
		 	 if(text7=""){
		 result = result+"Country"}
		 	 if(text8=""){
		 result = result+"Postal Code"}
		 	 if(text9=""){
		 result = result+"Password"}
		 	 if(text10=""){
		 result = result+"Re-type Password"}
		 	 if(text11=""){
		 result = result+"Alternate e-mail"}
		 
		 return(result);
  }
	   
	   
	   
	   
	   