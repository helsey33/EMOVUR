var controller = new ScrollMagic.Controller();

var tween2 = TweenMax.fromTo(
  document.querySelector("#screenL "),
  2,
  {
    x: 0,
    autoAlpha: 0
  },
  { autoAlpha: 1, x: 50, ease: Power1.easeOut, delay: 2 }
);

var para = document.querySelector(".cont1"),
  obj = document.querySelector("#work_svg_child"),
  coffee = document.querySelector("#coffee"),
  pen = document.querySelector("#pen"),
  pendrive = document.querySelector("#pendrive");

new ScrollMagic.Scene({
  triggerElement: para,
  reverse: false
})
  .setClassToggle(coffee, "is-visible")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: para,
  reverse: false
})
  .setClassToggle(pen, "is-visible")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: para,
  reverse: false
})
  .setClassToggle(pendrive, "is-visible")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: para,
  duration: "410%",
  reverse: true
})
  .setPin(obj)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: para,
  duration: "200%",
  reverse: false
})
  .setTween(tween2)
  .addTo(controller);
