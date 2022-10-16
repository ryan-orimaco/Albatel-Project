<?php
$host = 'remotemysql.com';
$username = 'qCBfBxEqoq';
$password = 'QjLhk9lkx5';
$db = 'qCBfBxEqoq';

/*
$sql = "insert into userdetails (CompanyName, BusinessSector, NumberOfEmployees,CompanyLocation,ContactName,JobTitle,ContactEmail,ContactTelephone ) values ('$security','$companyname','$businesssector','$employees','$comploc','$companyname','$conjt','$conem','$contel')";
*/

$con = mysqli_connect($host,$username,$password,$db);

$security = $_POST['secuid'];
$companyname = $_POST['companyname'];
$businesssector = $_POST['businesssector'];
$employees = $_POST['noemp'];
$comploc = $_POST['comploc'];
$companyname = $_POST['companyname'];
$conjt = $_POST['conjt'];
$conem = $_POST['conem'];
$contel = $_POST['contel'];


$sql = "insert into userdetails (SessionID,CompanyName, BusinessSector, NumberOfEmployees,CompanyLocation,ContactName,JobTitle,ContactEmail,ContactTelephone ) values ('$security','$companyname','$businesssector','$employees','$comploc','$companyname','$conjt','$conem','$contel')";
$sql1 = "insert into SecurityID (AdminID,SessionID) values ('eury2dfuu23222','$security')";
if(mysqli_query($con, $sql) && mysqli_query($con, $sql1)){
    echo 'success';
}
?>

