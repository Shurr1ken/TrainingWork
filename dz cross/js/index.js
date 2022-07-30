document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })
  document.querySelectorAll('.working__slider-btn').forEach(function(workingSliderBtn) {
    workingSliderBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.working__slide').forEach(function(workingSlide) {
        workingSlide.classList.remove('working__slide-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('working__slide-active')
    })
  })
  document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger').classList.toggle('active')
    document.querySelector('.nav__list').classList.toggle('active')
  })
})
$(function() {
  $(".accordion").accordion({
    heightStyle: "content",
    active: false,
    collapsible: true
  })
})
jQuery().ready(function () {
  setTimeout(function () {
  jQuery('.faq__item-top:eq(0) a').trigger('click')
  }, 1000)
})
function changeCheckbox(event) {
  let item = document.getElementById('chkPref')
  switch(item.getAttribute('aria-checked')) {
      case "true":
          item.setAttribute('aria-checked', "false")
          break
      case "false":
          item.setAttribute('aria-checked', "true")
          break
  }
}
