<?php
$host = 'remotemysql.com';
$username = 'qCBfBxEqoq';
$password = 'QjLhk9lkx5';
$db = 'qCBfBxEqoq';

$con = mysqli_connect($host,$username,$password,$db);
$security = $_POST['secuid'];
$value = $_POST['value'];
$textareacomments = $_POST['textarea'];

$sql2 = "insert into ratingsystem (SessionID,Rating,Comments) values ('$security','$value', '$textareacomments')";

if(mysqli_query($con, $sql2)){
    echo 'success';
}

?>