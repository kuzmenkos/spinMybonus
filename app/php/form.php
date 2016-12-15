<?php

    $name = $_GET['name'];
    $email = $_GET['email'];
    $massage = $_GET['email'];

    if ($_GET['application'] == true) {

        echo $email;

    }

    if ($_GET['discount'] == true) {

        echo $massage, $name, $email;

    }

    if ($_GET['registry'] == true) {

        echo $massage, $name, $email;

    }

    exit;
?>

