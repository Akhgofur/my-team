const elCard = document.querySelector('.info__card')
const elCardBtn = document.querySelectorAll('.info__card-btn')
const elHeaderNav = document.querySelector('.header-links')
const elHeaderBtn = document.querySelector('.header-toggler-js')

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('header-links--open')
})
elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.info__card').classList.toggle('info__card-back-side')
  })
})