var path = window.location.pathname
switch(path) {
  case '/':
    document.querySelector('#nav-home').classList.add('current')
    break
  case '/events.html':
    document.querySelector('#nav-events').classList.add('current')
    break
  case '/trail-map.html':
    document.querySelector('#nav-trail-map').classList.add('current')
    break
  case '/our-board.html':
    document.querySelector('#nav-our-board').classList.add('current')
    break
  }

const $ = require('jquery')

// fetch('http://localhost:3000/latest-posts')
//   .then(res => res.json())
//   .then(res => {
//     console.log(res)
//     $('.rvtb img').attr('src', res.data[0].posts[0].image)
//     $('.rvtb h3 a').attr('href', res.data[0].posts[0].url)
//     $('.rvtb h3 a').text(res.data[0].title)
//     $('.rvtb .category').text(res.data[0].posts[0].summary)

//     // res.data.forEach((post, i) => {

      

//     //   console.log(post)

//       // $(post.class).each(item => {

//       // })
//     // })
//   })



// console.log('wtf')

// require('jquery')
// const $ = require('jquery')
// // require('./jquery.js')
// require('./bootstrap.min.js')
// // require('./jquery.mCustomScrollbar.concat.min.js')
// // require('./revolution.min.js')
// require('./jquery.fancybox.pack.js')
// require('./jquery.fancybox-media.js')
// require('./owl.js')
// require('./wow.js')
// require('./appear.js')
// require('./jquery.mixitup.js')
// require('./script.js')
// console.log('wtf')
// $(document).ready(() => {
//   $('.preloader').css('display', 'none')
// })
