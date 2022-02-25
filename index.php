<?php 
/*
if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
echo 'it is http';
exit;

    $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $location);
    exit;

}


echo 'it is httpsssss';
exit;
*/
echo '<br><br>server name =';
echo $_SERVER['SERVER_NAME'];

echo '<br><br>php-self =';
echo $_SERVER['PHP_SELF'];

echo '<br><br>http_host =';
echo $_SERVER['HTTP_HOST'];

exit;
//include('index.html'); 

?>