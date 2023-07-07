// Services-tabs

/* $(function () {

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');

    $($(this).closest('.services__tabs-inner').siblings().find('div')).removeClass('tabs-content--active')

    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs-content--active');
  });
}); */

document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tab');

  function removeActiveClass(elements) {
    elements.forEach(function(element) {
      element.classList.remove('tab--active');
    });
  }

  function removeActiveContent(elements) {
    elements.forEach(function(element) {
      element.classList.remove('tabs-content--active');
    });
  }

  function activateTab(tab) {
    var tabContentId = tab.getAttribute('href');
    var tabContentContainers = document.querySelectorAll('.tabs-content');

    removeActiveClass(tabs);
    removeActiveContent(tabContentContainers);

    tab.classList.add('tab--active');
    document.querySelector(tabContentId).classList.add('tabs-content--active');
  }

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      activateTab(this);
    });
  });
});

