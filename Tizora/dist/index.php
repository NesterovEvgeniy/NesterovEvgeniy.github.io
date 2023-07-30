<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title></title>
    
    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Open+Sans&family=Raleway:wght@100;300;400;500&display=swap" rel="stylesheet">
    
    <!-- SLICK.SLIDER CSS-->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" />
    
    <!-- MY CSS -->
    <link rel="stylesheet" href="./assets/css/style.min.css"></head>

<body>
    <div class="page__wrapper">
        <!-- Header -->
        
        <header>
          <div class="header__inner">
            <div class="header__top">
              <div class="header__language">
                <div>Ru</div>
                <div>Eng</div>
              </div>
            </div>
            <div class="header__bottom">
              <div class="header__logo">
                <a href="">
                  <img src="assets/img/logo_header.svg" alt="logo">
                </a>
              </div>
              <nav class="header__nav">
                <ul>
                  <li><a href="index.html">Главная</a></li>
                  <li><a href="about.html">О галерее</a></li>
                  <li><a href="pictures.html">Картины</a></li>
                  <li><a href="#events">Мероприятия</a></li>
                  <li><a href="contacts.html">Контакты</a></li>
                </ul>
              </nav>
            </div>
          </div>
        
          <!-- mobile menu -->
          <ul class="menu-mobile__list">
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#workarea">Главная</a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#benefit">О галерее</a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#cases">Картины</a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#projects">Мероприятия</a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#reviews">Контакты</a></li>
          </ul>
        </header>
        <?php
        
        $resepient = "tezora@gmail.com";
        $siteName = "HTML - шаблон"
        
        $name = trim($_POST["name"]);
        $phone = trim($_POST["phone"])
        $message = "Имя: $name \nТелефон: $phone";
        
        $pagetitle ="Заявка с сайта \"$siteName\"";
        mail($resepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

        <!-- Footer block -->
        
        <footer>
          <div class="footer__inner">
            <div class="footer__top">
              <div class="footer__logo">
                <a href="">
                  <img src="assets/img/logo_footer.svg" alt="logo">
                </a>
              </div>
              <nav class="footer__nav">
                <ul>
                  <li><a href="index.html">Главная</a></li>
                  <li><a href="about.html">О галерее</a></li>
                  <li><a href="pictures.html">Картины</a></li>
                  <li><a href="#events">Мероприятия</a></li>
                  <li><a href="contacts.html">Контакты</a></li>
                </ul>
              </nav>
            </div>
            <div class="footer__bottom">
              <p class="footer__bottom-text">Все права защищены 2023</p>
              <div class="footer__logo-decor"></div>
            </div>
          </div> 
        </footer>
    </div>

    <!-- JQUERY -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- INPUTMASK -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.6/jquery.inputmask.min.js"></script>

    <!-- SLICK SLIDER -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>

    <!-- Project JS -->
    <script src="./assets/js/app.js"></script>

</body>

</html>