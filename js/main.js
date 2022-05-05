const elCard = document.querySelector('.info__card')
const elCardBtn = document.querySelectorAll('.info__card-btn')

elCardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.info__card').classList.toggle('info__card-back-side')
  })
})