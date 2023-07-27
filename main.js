const deposit = document.querySelector('.section3 .deposit_phone img');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 860) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(deposit, .9, {
      opacity: 1,
      display: 'block',
      x: -50,
      delay:.5

    });
  }
}, 300));

const Overseas = document.querySelector('.section6 .Overseas_phone img');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 3110) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(Overseas, 1, {
      opacity: 1,
      display: 'block',
      y: -25,
      delay:.5

    });
  }
}, 300));