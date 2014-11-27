<?php
$host="localhost"; // Host name 
$username="root"; // Mysql username 
//$password="ripun"; // Mysql password 
$db_name="project"; // Database name 
$tbl_name="login"; // Table name 
// Connect to server and select databse.
mysql_connect("$host", "$username")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");
// username and password sent from form 
$username=$_POST['username']; 
$password=$_POST['password'];
$sql="SELECT *
FROM `login`
WHERE name='$username'
AND pass='$password'";
$result=mysql_query($sql);
while($row = mysql_fetch_array($result))
  {
  if($row[name]==$username && $row[pass]==$password)
  {	   ob_start();
	   echo "redirecting........";
	  setcookie("user", "$username", time()+60*60*24);
      header("Location: http://localhost/xampp/project/website.html");
      ob_flush();
	  return true;
     break; 
  }
  else 
  {  ob_start();
	   echo "no redirecting........";
      header("Location: http://localhost/xampp/project/drivers.html");
      ob_flush();
	  return false;
       break;
  }
  }
?>
