export default {
  bind: function (el) {

    function magic() {
      if (window.pageYOffset > 100) {
        el.style.opacity = '1'
      } else { el.style.opacity = '0' }
    }
    el.onclick = function () {
      window.scrollTo(0, 0)
    }
    window.onscroll = magic
  }
}