<?php

$resepient = "nester669@gmail.com";
$siteName = "HTML - шаблон"

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"])
$message = "Имя: $name \nТелефон: $phone";

$pagetitle ="Заявка с сайта \"$siteName\"";
mail($resepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");