import Vue from 'vue'

Vue.directive('focus',{
    inserted(el) {
      el.focus()
    }
  })
Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // "white"
    console.log(binding.value.text)  // "hello!"
    el.style.color = binding.value.color;
})