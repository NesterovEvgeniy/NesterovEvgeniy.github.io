<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title></title>
    
    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@500&family=Roboto:wght@400;500&display=swap"
      rel="stylesheet">
    
    <!-- SLICK.SLIDER CSS-->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" />
    
    <!-- MY CSS -->
    <link rel="stylesheet" href="./assets/css/style.min.css"></head>

<body>
    <div class="page__wrapper">
        <!-- Header -->
        
        <header>
          <div class="header__inner">
            <div class="container__part-info">
              <a href="index.html">
                <div class="logo__img"></div>
              </a>
            </div>
            <div class="container__main-info">
              <div class="header__main-content">
                <nav class="header__nav">
                  <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#workarea">area of work</a></li>
                    <li><a href="#benefit">benefit</a></li>
                    <li><a href="#cases">cases</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#reviews">reviews</a></li>
                    <li><a href="#customers">customers</a></li>
                    <li><a href="#contacts">contact us</a></li>
                  </ul>
                </nav>
                <a class="btn btn__header" href="#contacts">discuss the project</a>
              </div>
              <div class="menu__btn">
                <div class="menu__btn-line"></div>
                <div class="menu__btn-line"></div>
                <div class="menu__btn-line"></div>
              </div>
            </div>
          </div>
        
          <!-- mobile menu -->
          <ul class="menu-mobile__list">
            <li class="menu-mobile__item">
              <a class="menu-mobile__link" href="#about">
                about
              </a>
            </li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#workarea">
                area of work
              </a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#benefit">
                benefit
              </a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#cases">
                cases
              </a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#projects">
                projects
              </a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#reviews">
                reviews
              </a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#customers">
                customers
              </a></li>
            <li class="menu-mobile__item"><a class="menu-mobile__link" href="#contacts">
                contact us
              </a></li>
          </ul>
        </header>
        <!-- Main block-->
        
        <section>
          <div class="main-page__wrapper">
            <div class="main__inner">
              <div class="container__part-info">
              </div>
              <div class="container__main-info">
                <h1 class="main__title">«generalplan» - design of territories of any scale</h1>
                <a class="btn__main" href="#contacts">discuss the project</a>
              </div>
            </div>
          </div>
          <div class="main__img"></div>
        </section>
        <!-- About block-->
        
        <section id="about">
          <div class="about__inner">
            <div class="container__part-info">
              <p class="title__block-num">01/ about</p>
            </div>
            <div class="container__main-info title__text-wrapper">
              <h2 class="title__block">The «GeneralPlan» company is a specialized company
                established in 2012. The uniqueness of our company lies in the experience of our engineers specializing in the
                development of project documentation</h2>
            </div>
          </div>
        </section>
        <?php
        
        $resepient = "nester669@gmail.com";
        $siteName = "HTML - шаблон"
        
        $name = trim($_POST["name"]);
        $phone = trim($_POST["phone"])
        $message = "Имя: $name \nТелефон: $phone";
        
        $pagetitle ="Заявка с сайта \"$siteName\"";
        mail($resepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

        <!-- Area of work - block-->
        
        <section id="workarea">
          <div class="area__inner">
            <div class="container__part-info">
              <p class="area__block-num">02/ area of work</p>
            </div>
            <div class="container__main-info">
              <div class="work__area">
                <ul>
                  <li>
                    <div>
                      <h3 class="work__area-title area-title__landscape">Landscape design</h3>
                      <p class="work__area-description">One of the activities of our company is the development of urban
                        landscape
                        architecture projects.</p>
                    </div>
                    <button class="work__area-popup-btn">Learn more</button>
                  </li>
                  <li>
                    <div>
                      <h3 class="work__area-title area-title__general-plan">general plan</h3>
                      <p class="work__area-description">The general plan is an integral part of each project, on the basis of
                        which
                        planning, construction, reconstruction and other types of urban development of territories are carried
                        out.
                      </p>
                    </div>
                    <button class="work__area-popup-btn">Learn more</button>
                  </li>
                  <li>
                    <div>
                      <h3 class="work__area-title">Design of external engineering networks</h3>
                      <p class="work__area-description area-title__external-system">The design of external engineering networks
                        is
                        a key stage in the construction of residential and non—residential facilities.</p>
                    </div>
                    <button class="work__area-popup-btn">Learn more</button>
                  </li>
                </ul>
              </div>
              <a class="btn btn__area" href="#contacts">discuss the project</a>
            </div>
          </div>
        </section>
        <!-- 02/ Area of work (Popup landscape)-->
        
        <section>
          <div class="popup__area-wrapper">
            <div class="popup__landscape js-form">
              <div class="close-btn"></div>
              <h2 class="popup__main-title">Landscape design</h2>
              <div class="popup__inner-block">
                <div class="popup__main-info">
                  <h3 class="popup__main-subtitle landscape__subtitle--tab">One of the activities of our company is the development of urban landscape architecture projects.</h3>
                  <div class="popup__main-text">
                    <p>These can be both landscape concepts and working documentation based on concepts previously created by other contractors.
                    </p>
                    <p>Each of our projects combines the accumulated experience, the latest trends in the field of landscape design, as well as the wishes of the customer on stylistics, small architectural forms and landscaping.</p>
                  </div>
                </div>
                <div class="popup__additional-info">
                  <div>
                    <p class="popup__additional-text">
                      Concept development: selection of the style of the project, development of an improvement plan, placement of small architectural forms and preparation of visualizations.
                    </p>
                  </div>
                  <div>
                    <p class="popup__additional-text">
                      Development of working drawings taking into account GOST 21.508-93.
                    </p>
                  </div>
                  <div>
                    <p class="popup__additional-text">
                      Author's supervision. At this stage, we control the quality of materials and the implementation of engineering solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        <!-- 02/ Area of work (Popup genplan)-->
        
        <section>
          <div class="popup__area-wrapper">
            <div class="popup__genplan js-form">
              <div class="close-btn"></div>
              <h2 class="popup__main-title">general plan</h2>
              <div class="popup__inner-block">
                <div class="popup__main-info">
                  <h3 class="popup__main-subtitle genplan__subtitle--tab">Preparation of ROM and GP sections is the main specialization of our company.</h3>
                  <div class="popup__main-text">
                    <p>The presence of 5 general planners in the staff allows you to carry out projects of different scales and levels of complexity. We develop a master plan for residential and non-residential facilities, as well as recreational areas, industrial and agricultural facilities. We give a guarantee of obtaining a positive expert opinion.
                    </p>
                  </div>
                </div>
                <div class="popup__additional-info">
                  <div>
                    <p class="popup__additional-text">
                      At the stage of "Project documentation" development of section 2 "Scheme of the planning organization of the land plot" (ROM).
                    </p>
                  </div>
                  <div>
                    <p class="popup__additional-text">
                      At the stage of "Working documentation" development of the main set of working drawings of the GP brand.
                    </p>
                  </div>
                  <div>
                    <p class="popup__additional-text">
                      Technical support of project documentation with approvals in departments and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 02/ Area of work(Popup design)-->
        
        <section>
          <div class="popup__area-wrapper">
            <div class="popup__design js-form">
              <div class="close-btn"></div>
              <h2 class="popup__main-title popup__main-title--tab">Design of external engineering networks</h2>
              <div class="popup__inner-block">
                <div class="popup__main-info">
                  <h3 class="popup__main-subtitle popup__main-subtitle--tab">The design of external engineering networks is a key stage in the construction of residential and non—residential facilities.</h3>
                  <div class="popup__main-text">
                    <p>More than 10 years of successful work in the construction design market allows us to develop outdoor engineering networks for projects of any degree of complexity. We can act as the chief designer, or work on the project as a subcontractor.
                    </p>
                  </div>
                </div>
                <div class="popup__additional-info">
                  <div>
                    <p class="popup__additional-text">
                      Development of schematic diagrams of engineering networks and coordination in departments
                    </p>
                  </div>
                  <div>
                    <p class="popup__additional-text">
                      Development of project documentation in accordance with the Decree of the Government of the Russian Federation of 16.02.2008 No. 87 "On the composition of sections of project documentation and requirements for their content"
                    </p>
                  </div>
                  <div>
                    <p class="popup__additional-text">
                      Development of working documentation in accordance with GOST R 21.101-2020, consisting of the following sets of working drawings intended for the production of construction and installation works
                    </p>
                  </div>
                  <div>
                    <p class="popup__additional-text">
                      Development of working documentation in accordance with GOST R 21.101-2020, consisting of the following sets of working drawings intended for the production of construction and installation works
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- benefit block-->
        
        <section id="benefit">
          <div class="benefit__inner">
            <div class="container__part-info">
              <p class="title__block-num">03/ benefit</p>
            </div>
            <div class="container__main-info title__text-wrapper">
              <h2 class="title__block title__area">We develop projects of various scales and purposes: from a
                transformer
                substation to a residential area</h2>
        
              <div class="benefit__area-block">
                <div class="collab">
                  <p class="benefit__text benefit__text-area">transformer substation</p>
                  <p class="benefit__text-num">1/100<span>ha</span></p>
                </div>
                <div>
                  <p class="benefit__text benefit__text-area">quarter to</p>
                  <p class="benefit__text-num">20<span>ha</span></p>
                </div>
                <div></div>
                <div></div>
                <div>
                  <p class="benefit__text benefit__text-area">plot from</p>
                  <p class="benefit__text-num">2,5<span>ha</span></p>
                </div>
                <div class="collab">
                  <p class="benefit__text benefit__text-area">area ≈</p>
                  <p class="benefit__text-num">160<span>ha</span></p>
                </div>
              </div>
        
              <h2 class="title__block title__people">we have assembled a team of real professionals who
                know and love their
                work</h2>
        
              <div class="benefit__people-block">
                <div>
                  <p class="benefit__text-num">2</p>
                  <p class="benefit__text benefit__text-people">landscape architects</p>
                </div>
                <div>
                  <p class="benefit__text-num">20</p>
                  <p class="benefit__text benefit__text-people">specialized engineers</p>
                </div>
                <div>
                  <p class="benefit__text-num">5</p>
                  <p class="benefit__text benefit__text-people">general planners</p>
                </div>
                <div>
                  <p class="benefit__text-num">4</p>
                  <p class="benefit__text benefit__text-people">HYPa</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- cases block-->
        
        <section id="cases">
          <div class="cases__inner">
            <div class="container__part-info">
              <p class="title__block-num">04/ cases</p>
            </div>
            <div class="container__main-info title__text-wrapper">
              <h2 class="title__block title__cases">our company performs complex work on the design of the master
                plan and external engineering networks</h2>
        
              <div class="work__cases">
                <ul>
                  <li>
                    <div>
                      <h3 class="work__case-title case-title__saving">A case about saving on displaced span soils for LSR</h3>
                      <a href="#!"><div class="work-case__saving case-popup-link"></div></a>
                      <p class="work__case-description">One of the ways to save money without loss of quality is to adjust the
                        directive marks at the stage of engineering preparation of the territory</p>
                    </div>
                    <button class="work__cases-popup-btn">Learn more</button>
                  </li>
        
                  <li>
                    <div>
                      <h3 class="work__case-title case-title__territory">A case about designing on the inter-fleet territory
                      </h3>
                      <a href="#!"><div class="work-case__design case-popup-link"></div></a>
                      <p class="work__case-description">The design of interlot territories is one of the specializations of our
                        company
                      </p>
                    </div>
                    <button class="work__cases-popup-btn">Learn more</button>
                  </li>
        
                </ul>
              </div>
              <a class="btn btn__cases" href="#contacts">discuss the project</a>
            </div>
          </div>
        </section>
        <!-- projects block-->
        
        <section id="projects">
          <div class="projects__inner projects__inner-tabs">
            <div class="container__part-info">
              <p class="title__block-num">05/ projects</p>
            </div>
            <div class="container__main-info title__text-wrapper">
              <h2 class="title__block title__projects">We work in the market of Moscow, St. Petersburg and other
                regions of Russia. We have developed more than 1000 projects</h2>
            </div>
          </div>
          <div class="projects__tabs-wrapper">
            <div class="projects__tabs-inner">
              <div class="tabs projects__tabs">
                <a class="tab tab--active" href="#landscape-tab">landscape</a>
                <a class="tab" href="#outdoor-tab">outdoor networks</a>
                <a class="tab" href="#general-tab">general plan</a>
              </div>
            </div>
            
            <div class="tabs-conteiner">
              <div class="tabs-content tabs-content--active" id="landscape-tab">
                <div class="landscape__block">
                  <div class="project">
                    <div class="project__text-block">
                      <div>
                        <h3 class="project__case-title">Project «Yanino»
                        </h3>
                        <p class="project__case-description">Yanino Drive is a comfortable modern residential quarter in the
                          Vsevolozhsky district of the Leningrad region.</p>
                      </div>
                      <button class="project__popup-btn">Learn more</button>
                    </div>
                    <a class="landscape__yanino-main-img project__img-link" href="#!"></a>
                  </div>
        
                  <div class="project">
                    <div class="project__text-block">
                      <div>
                        <h3 class="project__case-title">Project «Idealist»
                        </h3>
                        <p class="project__case-description">The Idealist Club House is located in the historical center of St. Petersburg, between the embankment of the Obvodny Canal and Moskovsky Prospekt.</p>
                      </div>
                      <button class="project__popup-btn">Learn more</button>
                    </div>
                    <a class="landscape__idealist-main-img project__img-link" href="#!"></a>
                  </div>
                </div>
              </div>
        
              <div class="tabs-content" id="outdoor-tab">
                <div class="outdoor__block">
                  <div class="project">
                    <div class="project__text-block">
                      <div>
                        <h3 class="project__case-title">Project «Mountain view estates»
                        </h3>
                        <p class="project__case-description">Mountain View Estates is a contemporary and luxurious residential community nestled in the scenic hills of the Cascade Valley, offering breathtaking views and serene surroundings.</p>
                      </div>
                      <button class="project__popup-btn">Learn more</button>
                    </div>
                    <a class="outdoor__mountain-main-img project__img-link" href="#!"></a>
                  </div>
                  
                  <div class="project">
                    <div class="project__text-block">
                      <div>
                        <h3 class="project__case-title">Project «Riverbank residences»
                        </h3>
                        <p class="project__case-description">Riverbank Residences is an elegant and modern residential complex situated along the tranquil banks of the Riverdale River, offering residents a serene waterfront living experience.</p>
                      </div>
                      <button class="project__popup-btn">Learn more</button>
                    </div>
                    <a class="outdoor__riverbank-main-img project__img-link" href="#!"></a>
                  </div>
                </div>
              </div>
        
              <div class="tabs-content" id="general-tab">
                <div class="generalplan__block">
                  <div class="project">
                    <div class="project__text-block">
                      <div>
                        <h3 class="project__case-title">Project «Harmony Grove»
                        </h3>
                        <p class="project__case-description">Yanino Drive is a comfortable modern residential quarter in the
                          Vsevolozhsky district of the Leningrad region.</p>
                      </div>
                      <button class="project__popup-btn">Learn more</button>
                    </div>
                    <a class="generalplan__harmony-main-img project__img-link" href="#!"></a>
                  </div>
                  
                  <div class="project">
                    <div class="project__text-block">
                      <div>
                        <h3 class="project__case-title">Project «Urban retreat»
                        </h3>
                        <p class="project__case-description">Urban Retreat is a modern residential complex located in the heart of a bustling city, providing residents with a tranquil oasis amidst the urban landscape.</p>
                      </div>
                      <button class="project__popup-btn">Learn more</button>
                    </div>
                    <a class="generalplan__urban-main-img project__img-link" href="#!"></a>
                  </div>
                </div>
              </div>
        
              <a class="btn btn__cases" href="#contacts">discuss the project<a>
            </div>
          </div>
        </section>

        <!-- reviews block-->
        
        <section id="reviews">
          <div class="reviews__inner">
            <div class="container__part-info">
              <p class="title__block-num">06/ reviews</p>
            </div>
            <div class="container__main-info title__text-wrapper">
              <h2 class="title__block reviews__title">our company has gained a good reputation among its customers
              </h2>
        
                <ul class="reviews__cases reviews__slider">
        
                  <li>
                    <p class="reviews__text">In the Rzhevka project, as a result of the integrated approach applied by
                      the «GeneralPlan»company to the engineering preparation of the territory, it was possible to reduce the
                      cost of the customer's funds for the removal of soil by 70%.</p>
                    <p class="reviews__text-signature">LSR Group</p>
                  </li>
        
                  <li>
                    <p class="reviews__text">We express our gratitude to «GeneralPlan» for fruitful work in the field of
                      designing sections «GeneralPlan» and «Drainage». During our cooperation with Planeta General Plan LLC,
                      many projects have been implemented.</p>
                    <p class="reviews__text-signature">Architectural studio «Studio 44»</p>
                  </li>
        
                  <li>
                    <p class="reviews__text">«GeneralPlan» has been our reliable and long-term partner for more than 10 years.
                      During the cooperation, the General Plan company has been involved in many important projects for our
                      bureau.</p>
                    <p class="reviews__text-signature">Architectural studio «B2»</p>
                  </li>
        
                  <li>
                    <p class="reviews__text">«GeneralPlan» has been our partner since 2017, providing a full range of design
                      services. Thanks to the professionalism of the company's employees, all projects were developed
                      efficiently and in the shortest possible time.</p>
                    <p class="reviews__text-signature">CDR</p>
                  </li>
        
                </ul>
            </div>
          </div>
        </section>
        <!-- Values block-->
        
        <section>
          <div class="values__inner">
            <div class="container__part-info">
              <p class="title__block-num">07/ OUR VALUES</p>
            </div>
            <div class="container__main-info title__text-wrapper">
              <h2 class="title__block">The activity of our company is based on the following values: guarantee,
                compliance with deadlines, high quality, ensuring comfortable interaction with the customer</h2>
            </div>
          </div>
        </section>
        <!-- Customer block-->
        
        <section id="customers">
          <div class="customer__inner">
            <div class="container__part-info">
              <p class="title__block-num">08/ customers</p>
            </div>
            <div class="container__main-info title__text-wrapper">
              <h3 class="title__customer">architectural studio</h3>
        
              <div class="customer-studio__block">
                <div class="studio__block-1">
                </div>
                <div class="studio__block-2">
                </div>
                <div class="studio__block-3">
                </div>
                <div class="studio__block-4">
                </div>
              </div>
        
              <h3 class="title__customer"> Developers</h3>
        
              <div class="customer-studio__block">
                <div class="developer__block-1">
                </div>
                <div class="developer__block-2">
                </div>
                <div class="developer__block-3">
                </div>
                <div class="developer__block-4">
                </div>
                <div class="developer__block-5">
                </div>
                <div class="developer__block-6">
                </div>
                <div class="developer__block-7">
                </div>
                <div class="developer__block-8">
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Contact-form block-->
        
        <section id="contacts">
          <div class="contact-form__inner">
            <div class="container__part-info">
            </div>
            <div class="container__main-info title__text-wrapper">
              <h2 class="title__block contact-form__title">Leave a request for the development of the project and
                we will contact you
              </h2>
        
              <form class="contact-form" id="form"  name="form">
                <div class="contact-form__input-fields">
                  <div class="form__personal-data">
                    <legend class="legend__person-name">First name, Last Name <span>*</span></legend>
                    <input class="form__person-name" value="" type="text" name="name" required="required" placeholder="Your name" maxlength="80" pattern="^[a-zA-Z]+$">
        
                    <input class="form__person-phone" value="" type="tel" name="phone" required="required" placeholder="Telephone">
        
                    <input class="form__person-email" value="" type="text" required="required" placeholder="Email">
        
                  </div>
                  <div class="form__personal-message">
                    <textarea class="form__person-text" placeholder="I want to order a project" required="required" maxlength="600"></textarea>
                  </div>
                </div>
        
                <div class="contact-form__footer">
                  <input class="btn application-btn" value="submit" type="submit" disabled="">
                  <div class="conteiner-checkbox">
                    <input class="application-checkbox" required="required" type="checkbox" id="form-active">
                    <label for="form-active"></label>
                    <p class="checkbox-text">By clicking the "Submit" button, you agree to the <a href="https://drive.google.com/file/d/10XQ_FV8XZoX5UpzNBwvCl52MXVwUftZp/view?usp=sharing" target="_blank"><span>Privacy
                          Policy</span></a> of Personal Data Processing</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        <!-- <form class="contact-form" action="#" method="post"></form> -->
        <!-- 04/ Cases(popup saving case)-->
        
        <section>
          <div class="popup__cases-wrapper">
            <div class="popup__saving js-form">
              <div class="close-btn"></div>
              <h2 class="popup__main-title">A case about saving on displaced soils for LSR</h2>
              <div class="popup__inner-block">
                <div class="popup-designing__main-info">
        
                  <div class="popup__main-block">
                    <h3 class="popup__main-subtitle">Large scale development of the territory is always a big financial burden for the developer.</h3>
                    <p class="popup__main-text popup-saving__text-tab">One of the nonobviousness but effective ways to save money without loss of quality is to adjust the directive marks at the stage of engineering preparation of the territory.</p>
                    <p class="popup__main-text popup-saving__text-tab">Rough vertical layout with incorrect directive marks a few centimeters above the existing relief leads to an increase in the developer's costs.
                    <p class="popup__main-text popup-saving__text-tab">Correction of directive marks at the stage of engineering preparation of the territory is you know how which saves up to 70% of customers' funds on the removal of earth masses.</p> 
                  </div>
        
                  <div class="popup__additional-block popup-saving__additional-block">
                    <div>
                      <p class="popup__additional-text popup-saving__additional-text">
                        We were the general contractor of the LSR holding during the engineering preparation of the territory of the former Rzhevka airport (territory of 160 hectares) and offered the developer a new approach to integrated design in terms of adjusting the directive marks. The developer gave the go-ahead.
                      </p>
                    </div>
                    <div>
                      <p class="popup__additional-text popup-saving__additional-text">
                        As a result of the adjustment, the total volume of exported soil was reduced by 700,000 m3, which saved the developer about 203 million rubles.
                      </p>
                    </div>
                    <div>
                      <p class="popup__additional-text popup-saving__additional-text">
                        For which projects is it relevant?
                      </p>
                      <ul class="popup__additional-list popup-saving__additional-text">
                        <li class="popup__list-text">district-scale</li>
                        <li class="popup__list-text">development quarterly development</li>
                        <li class="popup__list-text">terminal and production arrays</li>
                      </ul>
                    </div>
                  </div>
        
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <!-- 04/ Cases(popup designing case)-->
        
        <section>
          <div class="popup__cases-wrapper">
            <div class="popup__designing js-form">
              <div class="close-btn"></div>
              <h2 class="popup__main-title">A case about designing on the inter-fleet territory</h2>
              <div class="popup__inner-block">
                <div class="popup-designing__main-info">
                  <div class="popup__main-block">
                    <h3 class="popup__main-subtitle">The design of interlot territories is one of the specializations of our company.</h3>
                    <p class="popup__main-text popup-desiging__text-tab">An integrated approach to the design of the inter-site territory includes coordination, control and coordination of design decisions on the master plan and external engineering networks of various design organizations in the quarterly development. This eliminates the difficulties that developers face when working with different contractors when building blocks and gives the following advantages:</p>
                    <ul class="popup__main-list">
                      <li>reducing the number of errors in the work;</li>
                      <li>saving time on coordination of documentation between contractors;</li>
                      <li>simplification of control by the customer;</li>
                      <li>reduction of the project implementation period.</li>
                      <li>What does the project of the interlot territory include?</li>
                      <li>the development of the ROM section at the “P” stage and a set of working drawings of the GP brand at the “RD” stage, including:</li>
                      <li>the development of a consolidated plan of intra-block engineering networks;</li>
                      <li>design of intra-block engineering networks;</li>
                      <li>design of engineering structures.</li>
                    </ul>
                  </div>
        
                  <div class="popup__additional-block">
                    <div>
                      <p class="popup__additional-text">
                        We have been developing a project of an interlot territory for a residential quarter at:
                      </p>
                      <p class="popup__address-text">St. Petersburg, Blucher Ave., 12</p>
                    </div>
                    <div>
                      <p class="popup__additional-text">
                        The project consisted of:
                      </p>
                    </div>
                    <div>
                      <ul class="popup__additional-list">
                        <li class="popup__list-text">linking and coordinating design solutions for the general plan of the interlot territory and adjacent sites of various developers</li>
                        <li class="popup__list-text">development quarterly development</li>
                        <li class="popup__list-text">linking and coordinating design solutions of third-party contractors for main engineering networks in the interlot territory</li>
                      </ul>
                    </div>
                    <div class="popup__designing-img" ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 05/ Projects (popup yanino project)-->
        
        <section>
          <div class="popup__projects-wrapper">
            <div class="popup__yanino js-form">
              <div class="close-btn"></div>
              <h2 class="popup__yanino-title">Project «Yanino»</h2>
              <div class="popup__yanino-title-info">
                <p class="popup__yanino-info-text">Developer: <span>Lenstroytrest</span></p>
                <p class="popup__yanino-info-text">Period: <span>2023</span></p>
              </div>
        
              <div class="popup__yanino-block">
                  <div class="popup__yanino-text-block">
                    <h3 class="popup__yanino-subtitle">Yanino Drive is a comfortable modern residential quarter in the Vsevolozhsky district of the Leningrad region.</h3>
                    <h4 class="popup__yanino-stages-title">Stage of participation:</h4>
                    <ol class="popup__yanino-stages-inner">
                      <li class="popup__yanino-stages-text">Development of the concept of integrated landscaping of the house and courtyard territory;</li>
                      <li class="popup__yanino-stages-text">Development of "Working documentation" for the architectural concept of the project. The set of working documentation consists of the following drawings:
                        <ul class="popup__yanino-text-list">
                          <li>general data;</li>
                          <li>situational plan;</li>
                          <li>the scheme of the planning organization of the land plot;</li>
                          <li>dendrological plan;</li>
                          <li>plan of small architectural forms with explication of landscaping elements;</li>
                          <li>drawing of the vertical layout of the landscaping object;</li>
                          <li>center plan;</li>
                          <li>landing plan;</li>
                          <li>coverage plan;</li>
                          <li>tile layout schemes;</li>
                          <li>structural sections of coatings.</li>
                        </ul> 
                      </li>
                    </ol>
                  </div>
                  <div class="popup__yanino-images-block">
                    <div class="popup__yanino-image-top"></div>
                    <div class="popup__yanino-image-bottom"></div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <!-- 05/ Projects (popup idealist project)-->
        
        <section>
          <div class="popup__projects-wrapper">
            <div class="popup__idealist js-form">
              <div class="close-btn"></div>
              <h2 class="popup__idealist-title">Project «Idealist»</h2>
              <div class="popup__idealist-title-info">
                <p class="popup__idealist-info-text">Developer: <span>Eurostroy</span></p>
                <p class="popup__idealist-info-text">Period: <span>2022</span></p>
              </div>
        
              <div class="popup__idealist-block">
                  <div class="popup__idealist-text-block">
                    <h3 class="popup__idealist-subtitle">The Idealist Club House is located in the historical center of St. Petersburg, between the embankment of the Obvodny Canal and Moskovsky Prospekt.</h3>
                    <h4 class="popup__idealist-stages-title">Stage of participation:</h4>
                    <ol class="popup__idealist-stages-inner">
                      <li class="popup__idealist-stages-text">Development of the concept of integrated landscaping of the house and courtyard territory;</li>
                      <li class="popup__idealist-stages-text">Development of "Working documentation" for the architectural concept of the project. The set of working documentation consists of the following drawings:
                        <ul class="popup__idealist-text-list">
                          <li>general data;</li>
                          <li>situational plan;</li>
                          <li>the scheme of the planning organization of the land plot;</li>
                          <li>dendrological plan;</li>
                          <li>plan of small architectural forms with explication of landscaping elements;</li>
                          <li>drawing of the vertical layout of the landscaping object;</li>
                          <li>center plan;</li>
                          <li>landing plan;</li>
                          <li>coverage plan;</li>
                          <li>tile layout schemes;</li>
                          <li>structural sections of coatings.</li>
                        </ul> 
                      </li>
                    </ol>
                  </div>
                  <div class="popup__idealist-images-block">
                    <div class="popup__idealist-image-top"></div>
                    <div class="popup__idealist-image-bottom"></div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <!-- 05/ Projects (popup mountain project)-->
        
        <section>
          <div class="popup__projects-wrapper">
            <div class="popup__mountain js-form">
              <div class="close-btn"></div>
              <h2 class="popup__mountain-title">Project «Mountain view estates»</h2>
              <div class="popup__mountain-title-info">
                <p class="popup__mountain-info-text">Developer: <span>Summit developments</span></p>
                <p class="popup__mountain-info-text">Period: <span>2023</span></p>
              </div>
        
              <div class="popup__mountain-block">
                  <div class="popup__mountain-text-block">
                    <h3 class="popup__mountain-subtitle">Mountain view estates is a comfortable modern residential quarter in the cascade valley, offering spectacular views and a peaceful living environment.</h3>
                    <h4 class="popup__mountain-stages-title">Stage of participation:</h4>
                    <ol class="popup__mountain-stages-inner">
                      <li class="popup__mountain-stages-text">Development of the concept of integrated landscaping of the house and courtyard territory;</li>
                      <li class="popup__mountain-stages-text">Development of "Working documentation" for the architectural concept of the project. The set of working documentation consists of the following drawings:
                        <ul class="popup__mountain-text-list">
                          <li>general data;</li>
                          <li>situational plan;</li>
                          <li>the scheme of the planning organization of the land plot;</li>
                          <li>dendrological plan;</li>
                          <li>plan of small architectural forms with explication of landscaping elements;</li>
                          <li>drawing of the vertical layout of the landscaping object;</li>
                          <li>center plan;</li>
                          <li>landing plan;</li>
                          <li>coverage plan;</li>
                          <li>tile layout schemes;</li>
                          <li>structural sections of coatings.</li>
                        </ul> 
                      </li>
                    </ol>
                  </div>
                  <div class="popup__mountain-images-block">
                    <div class="popup__mountain-image-top"></div>
                    <div class="popup__mountain-image-bottom"></div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <!-- 05/ Projects (popup riverbank project)-->
        
        <section>
          <div class="popup__projects-wrapper">
            <div class="popup__riverbank js-form">
              <div class="close-btn"></div>
              <h2 class="popup__riverbank-title">Project «Riverbank residences»</h2>
              <div class="popup__riverbank-title-info">
                <p class="popup__riverbank-info-text">Developer: <span>Waterfront properties</span></p>
                <p class="popup__riverbank-info-text">Period: <span>2021</span></p>
              </div>
        
              <div class="popup__riverbank-block">
                  <div class="popup__riverbank-text-block">
                    <h3 class="popup__riverbank-subtitle">Riverbank residences is a comfortable modern residential quarter on the scenic riverdale river, providing a tranquil waterfront living environment.</h3>
                    <h4 class="popup__riverbank-stages-title">Stage of participation:</h4>
                    <ol class="popup__riverbank-stages-inner">
                      <li class="popup__riverbank-stages-text">Development of the concept of integrated landscaping of the house and courtyard territory;</li>
                      <li class="popup__riverbank-stages-text">Development of "Working documentation" for the architectural concept of the project. The set of working documentation consists of the following drawings:
                        <ul class="popup__riverbank-text-list">
                          <li>general data;</li>
                          <li>situational plan;</li>
                          <li>the scheme of the planning organization of the land plot;</li>
                          <li>dendrological plan;</li>
                          <li>plan of small architectural forms with explication of landscaping elements;</li>
                          <li>drawing of the vertical layout of the landscaping object;</li>
                          <li>center plan;</li>
                          <li>landing plan;</li>
                          <li>coverage plan;</li>
                          <li>tile layout schemes;</li>
                          <li>structural sections of coatings.</li>
                        </ul> 
                      </li>
                    </ol>
                  </div>
                  <div class="popup__riverbank-images-block">
                    <div class="popup__riverbank-image-top"></div>
                    <div class="popup__riverbank-image-bottom"></div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <!-- 05/ Projects (popup harmony project)-->
        
        <section>
          <div class="popup__projects-wrapper">
            <div class="popup__harmony js-form">
              <div class="close-btn"></div>
              <h2 class="popup__harmony-title">Project «Harmony Grove»</h2>
              <div class="popup__harmony-title-info">
                <p class="popup__harmony-info-text">Developer: <span>Greenscape developments</span></p>
                <p class="popup__harmony-info-text">Period: <span>2023</span></p>
              </div>
        
              <div class="popup__harmony-block">
                  <div class="popup__harmony-text-block">
                    <h3 class="popup__harmony-subtitle">harmony grove is a comfortable modern residential quarter surrounded by lush green landscapes, offering a harmonious living environment.</h3>
                    <h4 class="popup__harmony-stages-title">Stage of participation:</h4>
                    <ol class="popup__harmony-stages-inner">
                      <li class="popup__harmony-stages-text">Development of the concept of integrated landscaping of the house and courtyard territory;</li>
                      <li class="popup__harmony-stages-text">Development of "Working documentation" for the architectural concept of the project. The set of working documentation consists of the following drawings:
                        <ul class="popup__harmony-text-list">
                          <li>general data;</li>
                          <li>situational plan;</li>
                          <li>the scheme of the planning organization of the land plot;</li>
                          <li>dendrological plan;</li>
                          <li>plan of small architectural forms with explication of landscaping elements;</li>
                          <li>drawing of the vertical layout of the landscaping object;</li>
                          <li>center plan;</li>
                          <li>landing plan;</li>
                          <li>coverage plan;</li>
                          <li>tile layout schemes;</li>
                          <li>structural sections of coatings.</li>
                        </ul> 
                      </li>
                    </ol>
                  </div>
                  <div class="popup__harmony-images-block">
                    <div class="popup__harmony-image-top"></div>
                    <div class="popup__harmony-image-bottom"></div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <!-- 05/ Projects (popup urban project)-->
        
        <section>
          <div class="popup__projects-wrapper">
            <div class="popup__urban js-form">
              <div class="close-btn"></div>
              <h2 class="popup__urban-title">Project «Urban retreat»</h2>
              <div class="popup__urban-title-info">
                <p class="popup__urban-info-text">Developer: <span>CityScape Properties</span></p>
                <p class="popup__urban-info-text">Period: <span>2022</span></p>
              </div>
        
              <div class="popup__urban-block">
                  <div class="popup__urban-text-block">
                    <h3 class="popup__urban-subtitle">Urban Retreat is a modern residential complex located in the heart of a bustling city, providing residents with a tranquil oasis amidst the urban landscape.</h3>
                    <h4 class="popup__urban-stages-title">Stage of participation:</h4>
                    <ol class="popup__urban-stages-inner">
                      <li class="popup__urban-stages-text">Development of the concept of integrated landscaping of the house and courtyard territory;</li>
                      <li class="popup__urban-stages-text">Development of "Working documentation" for the architectural concept of the project. The set of working documentation consists of the following drawings:
                        <ul class="popup__urban-text-list">
                          <li>general data;</li>
                          <li>situational plan;</li>
                          <li>the scheme of the planning organization of the land plot;</li>
                          <li>dendrological plan;</li>
                          <li>plan of small architectural forms with explication of landscaping elements;</li>
                          <li>drawing of the vertical layout of the landscaping object;</li>
                          <li>center plan;</li>
                          <li>landing plan;</li>
                          <li>coverage plan;</li>
                          <li>tile layout schemes;</li>
                          <li>structural sections of coatings.</li>
                        </ul> 
                      </li>
                    </ol>
                  </div>
                  <div class="popup__urban-images-block">
                    <div class="popup__urban-image-top"></div>
                    <div class="popup__urban-image-bottom"></div>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <!-- popup-map -->
        
        <div class="popup__map">
          <div class="popup__map-conteiner">
            <div class="popup__location-map">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A911571c5a0b599b3931f4f193a8cf12d49dbdc6a27d7821ee8e592f917f9f13e&amp;source=constructor" width="700" height="500" frameborder="0"></iframe>
            </div>
          </div>
        </div>
        <!-- Footer block -->
        
        <footer>
          <div class="footer__inner">
            <div class="footer__logo-block">
              <a href="index.html">
                <div class="logo__img"></div>
              </a>
              <p class="footer__copyright">© 2007–2023 GeneralPlan</p>
            </div>
            <nav class="footer__nav">
              <ul>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#workarea">area of work</a>
                </li>
                <li>
                  <a href="#benefit">benefit</a>
                </li>
                <li>
                  <a href="#cases">cases</a>
                </li>
                <li>
                  <a href="#projects">projects</a>
                </li>
                <li>
                  <a href="#reviews">reviews</a>
                </li>
                <li>
                  <a href="#customers">customers</a>
                </li>
                <li>
                  <a href="#contacts">contact us</a>
                </li>
              </ul>
            </nav>
            <div class="footer__contact-block">
              <ul>
                <li class="footer__address">
                  <p>St. Petersburg, Vysotnaya St., 1, room 435</p>
                </li>
                <li>
                  <a href="tel:88003021976">
                    <div class="footer__phone">+7 (812) 448-31-61</div>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@genplan.ooo">
                    <p class="footer__mail" lang="en">contact@genplan.ooo</p>
                  </a>
                </li>
              </ul>
              <div class="footer__social-block">
                <a class="footer__social" href="https://telegram.org" target="_blank">
                  telegram
                </a>
                <a class="footer__social" href="https://behance.net" target="_blank">
                  behance
                </a>
              </div>
              <p class="footer__copyright-mob">© 2007–2023 GeneralPlan</p>
            </div>
          </div>
          <div class="footer__bottom">.</div>
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