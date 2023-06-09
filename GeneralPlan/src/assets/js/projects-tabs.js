// Projects-tabs

document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.tab');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      tabs.forEach(function(t) {
        t.classList.remove('tab--active');
      });

      document.querySelectorAll('.tabs-content').forEach(function(content) {
        content.classList.remove('tabs-content--active');
      });

      tab.classList.add('tab--active');
      document.querySelector(tab.getAttribute('href')).classList.add('tabs-content--active');
    });
  });
});
