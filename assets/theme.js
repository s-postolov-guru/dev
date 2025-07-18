"use strict";
const global = {
    header: "header"
};
const QureMainMenu = {
    init: function () {
        this.initMainMenu();
        this.setHeaderHeights(); // Initial height setup
        window.addEventListener("resize", this.setHeaderHeights.bind(this)); // Recalculate on resize
    },

    initMainMenu: function () {
        document.querySelectorAll(".nav-toggle").forEach((toggleBtn) => {
            toggleBtn.addEventListener("click", () => {
                document.documentElement.classList.toggle("nav-open");
            });
        });
    },

    setHeaderHeights: function () {
        const announcementBar = document.getElementById("announcement-bar");
        const pageHeader = document.getElementById("page-header");

        const d = announcementBar ? announcementBar.clientHeight : 0;
        const p = pageHeader ? pageHeader.clientHeight : 0;

        document.body.style.setProperty("--height-bar", `${d}px`);
        document.body.style.setProperty("--height-header", `${p}px`);
    }
};
QureMainMenu.init();

// Swiper Slider
var QureSettingsSwiper = {
    init: function() {
        this.QureSettingsCarousel()
    },
    QureSettingsCarousel: function() {
        document.querySelectorAll(".qure__swiper").forEach((e => {
            this.QureCarousel(e)
        }))
    },
    QureCarousel: function(e) {
        var t, n = "true" === e?.dataset.autoplay,
            o = "true" === e?.dataset.loop,
            i = e?.dataset.slideshow ? e?.dataset.slideshow : 0,
            s = e?.dataset.arrowCenterimage ? e?.dataset.arrowCenterimage : 0,
            l = e?.dataset.desktop ? e?.dataset.desktop : 4,
            r = e?.dataset.tablet ? e?.dataset.tablet : 2,
            a = e?.dataset.mobile ? e?.dataset.mobile : 1,
            c = e?.dataset.autoplaySpeed ? e?.dataset.autoplaySpeed : 3e3,
            d = e?.dataset.speed ? e?.dataset.speed : 400,
            u = e?.dataset.effect ? e?.dataset.effect : "slide",
            m = e?.dataset.sectionId,
            p = e?.dataset.row ? e?.dataset.row : 1,
            pd = e?.dataset.rowtablet ? e?.dataset.rowtablet : 1,
            pm = e?.dataset.rowmobile ? e?.dataset.rowmobile : 1,
            h = e?.dataset.spacing ? e?.dataset.spacing : 0,
            g = "true" === e?.dataset.paginationFraction,
            f = "true" === e?.dataset.animationSrcoll,
            cs = "true" === e?.dataset.slidecenter,
            v = window.innerWidth,
            b = "true" === e?.dataset.itemMobile,
            al = e?.dataset.arrowleft ? e?.dataset.arrowleft : "qure-swiper-button-prev", 
            ar = e?.dataset.arrowright ? e?.dataset.arrowright : "qure-swiper-button-next",
            pg = e?.dataset.pagination ? e?.dataset.pagination : "swiper-pagination"; 
        h = Number(h), c = Number(c), d = Number(d), n && (n = {
            delay: c
        }), t = new Swiper("#qure__swiper-" + m, {
            slidesPerView: b ? "auto" : a,
            spaceBetween: h >= 15 ? 15 : h,
            autoplay: n,
            loop: o,
            effect: u,
            speed: d,
            centeredSlides: cs,
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            
            grid: {
                rows: pm,
                fill: "row"
            },
            navigation: {
                // nextEl: e.querySelector(".qure-swiper-button-next"),
                // prevEl: e.querySelector(".qure-swiper-button-prev")
                nextEl: `.${ar}`,
                prevEl: `.${al}`
            },
            pagination: {
                clickable: !0,
                //el: e.querySelector(".swiper-pagination"),
                el: `.${pg}`,
                type: g ? "fraction" : "bullets"
            },
            breakpoints: {
                768: {
                    slidesPerView: r,
                    spaceBetween: h >= 30 ? 30 : h,
                    grid: {
                      rows: pd,
                  },
                },
                1200: {
                    slidesPerView: l,
                    spaceBetween: h,
                    centeredSlides: cs,
                    grid: {
                      rows: p,
                      fill: "row"
                  },
                }
            },
            on: {
                init: function() {
                    if (i && (v > 767 ? document.querySelectorAll(".slide-image").forEach((e => {
                            var t = e?.dataset.imgSlide;
                            e.innerHTML = `<img \n                      src=${t} \n                      alt="slide" \n                      srcset="${t}&amp;width=375 375w, ${t}&amp;width=550 550w, ${t}&amp;width=750 750w, ${t}&amp;width=1100 1100w, ${t}&amp;width=1500 1500w, ${t}&amp;width=1780 1780w, ${t}&amp;width=2000 2000w, ${t}&amp;width=3000 3000w, ${t}&amp;width=3840 3840w" \n                      sizes="100vw"\n                    >`
                        })) : document.querySelector(".slide-image-mobile") ? document.querySelectorAll(".slide-image-mobile").forEach((e => {
                            var t = e?.dataset.imgSlideMobile;
                            e.innerHTML = `<img \n                        src=${t} \n                        alt="slide mobile" \n                        srcset="${t}&amp;width=375 375w, ${t}&amp;width=550 550w, ${t}&amp;width=750 750w, ${t}&amp;width=1100 1100w, ${t}&amp;width=1500 1500w, ${t}&amp;width=1780 1780w, ${t}&amp;width=2000 2000w, ${t}&amp;width=3000 3000w, ${t}&amp;width=3840 3840w" \n                        sizes="100vw"\n                      >`
                        })) : document.querySelectorAll(".slide-image").forEach((e => {
                            var t = e?.dataset.imgSlide;
                            e.innerHTML = `<img \n                        src=${t} \n                        alt="slide" \n                        srcset="${t}&amp;width=375 375w, ${t}&amp;width=550 550w, ${t}&amp;width=750 750w, ${t}&amp;width=1100 1100w, ${t}&amp;width=1500 1500w, ${t}&amp;width=1780 1780w, ${t}&amp;width=2000 2000w, ${t}&amp;width=3000 3000w, ${t}&amp;width=3840 3840w" \n                        sizes="100vw"\n                      >`
                        })), window.addEventListener("resize", (function() {
                            window.innerWidth <= 767 ? document.querySelector(".slide-image-mobile") ? document.querySelectorAll(".slide-image-mobile").forEach((e => {
                                var t = e?.dataset.imgSlideMobile;
                                e.innerHTML = `<img \n                          src=${t} \n                          alt="slide mobile" \n                          srcset="${t}&amp;width=375 375w, ${t}&amp;width=550 550w, ${t}&amp;width=750 750w, ${t}&amp;width=1100 1100w, ${t}&amp;width=1500 1500w, ${t}&amp;width=1780 1780w, ${t}&amp;width=2000 2000w, ${t}&amp;width=3000 3000w, ${t}&amp;width=3840 3840w" \n                          sizes="100vw"\n                        >`
                            })) : document.querySelectorAll(".slide-image").forEach((e => {
                                var t = e?.dataset.imgSlide;
                                e.innerHTML = `<img \n                          src=${t} \n                          alt="slide" \n                          srcset="${t}&amp;width=375 375w, ${t}&amp;width=550 550w, ${t}&amp;width=750 750w, ${t}&amp;width=1100 1100w, ${t}&amp;width=1500 1500w, ${t}&amp;width=1780 1780w, ${t}&amp;width=2000 2000w, ${t}&amp;width=3000 3000w, ${t}&amp;width=3840 3840w" \n                          sizes="100vw"\n                        >`
                            })) : document.querySelectorAll(".slide-image").forEach((e => {
                                var t = e?.dataset.imgSlide;
                                e.innerHTML = `<img \n                        src=${t} \n                        alt="slide" \n                        srcset="${t}&amp;width=375 375w, ${t}&amp;width=550 550w, ${t}&amp;width=750 750w, ${t}&amp;width=1100 1100w, ${t}&amp;width=1500 1500w, ${t}&amp;width=1780 1780w, ${t}&amp;width=2000 2000w, ${t}&amp;width=3000 3000w, ${t}&amp;width=3840 3840w" \n                        sizes="100vw"\n                      >`
                            }))
                        })), f && initializeScrollZoomAnimationTrigger()), s) {
                        var e = document.getElementById("qure__swiper-" + m),
                            t = e.querySelectorAll(".qure__responsive-image");
                        if (0 != t.length) {
                            var n = [];
                            t.forEach((e => {
                                n.push(e.offsetHeight / 2)
                            }));
                            var o = "--arrows-offset-top: " + Math.max(...n) + "px";
                            e.querySelectorAll(".swiper-arrow") && e.querySelectorAll(".swiper-arrow").forEach((e => {
                                e.setAttribute("style", o)
                            }))
                        }
                    }
                }
            }
        }), i && t.on("slideChange", (function() {
            document.querySelectorAll(".video-slider").forEach((e => {
                var t = e.dataset.video,
                    n = e.dataset.poster;
                e.innerHTML = `\n <video playsinline="true" loop="loop" muted="muted" autoplay="autoplay" preload="metadata"\n poster="${n}">\n                <source\n                  src="${t}"\n                  type="video/mp4">\n              </video>\n              `
            }))
        }))
    }
};
QureSettingsSwiper.init();

var QureEventProductSlider = {
  init: function () {
    this.initAllSliders();
  },

  initAllSliders: function () {
    document.querySelectorAll(".qure__swiper-wrapper").forEach((wrapper, index) => {
      this.initGallerySlider(wrapper, index);
    });
  },

  initGallerySlider: function (wrapper, index) {
    const thumbsEl = wrapper.querySelector(".qure__swiper-gallery-thumbnails");
    const mainEl = wrapper.querySelector(".qure__swiper-gallery");
    const nextBtn = wrapper.querySelector(".swiper-next");
    const prevBtn = wrapper.querySelector(".swiper-prev");

    if (!thumbsEl || !mainEl) return;

    const autoplay = thumbsEl.dataset.autoplay === "false";
   // console.log(autoplay)
    const g = "true" === thumbsEl?.dataset.autoplay;
    const loop = thumbsEl.dataset.loop === "true";
    const slideshow = parseInt(thumbsEl.dataset.slideshow || 0);
    const desktop = parseInt(thumbsEl.dataset.desktop || 4);
    const tablet = parseInt(thumbsEl.dataset.tablet || 2);
    const mobile = parseInt(thumbsEl.dataset.mobile || 1);
    const spacing = parseInt(thumbsEl.dataset.spacing || 0);

    const thumbSwiper = new Swiper(thumbsEl, {
      spaceBetween: spacing,
      slidesPerView: mobile,
      autoplay: g,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      },
      breakpoints: {
        768: {
          slidesPerView: tablet,
          spaceBetween: spacing >= 30 ? 30 : spacing
        },
        1200: {
          slidesPerView: desktop,
          spaceBetween: spacing
        }
      }
    });

    new Swiper(mainEl, {
      loop: loop,
      speed: 600,
      autoplay:g,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      },
      thumbs: {
        swiper: thumbSwiper
      }
    });
  }
};

QureEventProductSlider.init();



  document.querySelectorAll('.qure__subscription-collapse').forEach(collapseEl => {
    collapseEl.addEventListener('show.bs.collapse', function () {
      document.querySelectorAll('.qure__subscription-item').forEach(item => item.classList.remove('subscription-active'));
      const accordionItem = this.closest('.qure__subscription-item');
      accordionItem.classList.add('subscription-active');
      const button = accordionItem.querySelector('.qure__subscription-btn');
      const label = button?.dataset.btnlabel;
      if (label && document.getElementById('qr__submit')) {
        document.getElementById('qr__submit').textContent = label;
      }
    });
    collapseEl.addEventListener('hide.bs.collapse', function () {
      const accordionItem = this.closest('.qure__subscription-item');
      accordionItem.classList.remove('subscription-active');
    });
    if (collapseEl.classList.contains('show')) {
      const accordionItem = collapseEl.closest('.qure__subscription-item');
      accordionItem.classList.add('subscription-active');
      const button = accordionItem.querySelector('.qure__subscription-btn');
      const label = button?.dataset.btnlabel;
      if (label && document.getElementById('qr__submit')) {
        document.getElementById('qr__submit').textContent = label;
      }
    }
  });


// Video Popup
document.querySelectorAll(".lvideo").forEach((d) => d.addEventListener("click", playVideos));
const body = document.body;

function playVideos(e) {
  lvideo(e.currentTarget.dataset.url);

  body.classList.add("lvideo-active");
  var lvideoWrap = document.createElement("DIV");
  lvideoWrap.setAttribute("id", "lvideo-wrap");
  document.body.appendChild(lvideoWrap);
  const wrapper = document.getElementById("lvideo-wrap");
  wrapper.classList.add("active");

  const url = this.dataset.url;

  const startModal = `<span onclick="lvideoClose();" class="lvideo-overlay"></span> <div class="lvideo-container">`;
  const finishModal = `</div><button onclick="lvideoClose();" class="lvideo-close"><i class="fa-solid fa-xmark"></i></button>`;

    if (url.indexOf("youtube") !== -1 || url.indexOf("youtu") !== -1) {
    const ytUrl = [this.dataset.url];

    var i,
      r,
      regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

    for (i = 0; i < ytUrl.length; ++i) {
      r = ytUrl[i].match(regExp);
      document.getElementById(
        "lvideo-wrap"
      ).innerHTML = `${startModal}<iframe width="560" height="315" title="YouTube Video" src='https://www.youtube.com/embed/${r[1]}?rel=0&autoplay=1&mute=1&loop=1&playlist=${r[1]}' frameborder="0" allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>${finishModal}`;
    }
  } else if (url.indexOf("vimeo") !== -1) {

    const vimeoURL = this.dataset.url;
    const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;

    const match = vimeoURL.match(regExp);

    if (match) {
      document.getElementById(
        "lvideo-wrap"
      ).innerHTML = `${startModal}<iframe title="Vimeo" src="https://player.vimeo.com/video/${match[2]}?autoplay=1&loop=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>${finishModal}`;
    } else {
      alert("Not a Vimeo!  URL example:\n https://vimeo.com/120206922");
    }
  
  } else if (url.indexOf("mp4") !== -1 || url.indexOf("m4v") !== -1) {
    
    document.getElementById(
      "lvideo-wrap"
    ).innerHTML = `${startModal}<video controls loop playsinline autoplay><source src='${this.dataset.url}' type="video/mp4"></video>${finishModal}`;
  } else {
    alert("No video link found.");
  }
}
const lvideoClose = () => {
  body.classList.remove("lvideo-active");

  const wrapper = document.getElementById("lvideo-wrap");
  wrapper.parentNode.removeChild(wrapper);
};

// LAUNCH
function lvideo(){}


// Equal height cols
  function applyEqualHeight(childClass, parentClass = null) {
    const updateHeights = () => {
      const elements = document.querySelectorAll(`.${childClass}`);
      if (!elements.length) return;
      elements.forEach((el) => el.style.height = 'auto');
      const maxHeight = Math.max(...Array.from(elements).map(el => el.offsetHeight));

      elements.forEach((el) => {
        if (parentClass) {
          const parent = el.closest(`.${parentClass}`);
          if (parent) {
            parent.style.setProperty('--child-height', `${maxHeight}px`);
          } else {
            el.style.height = `${maxHeight}px`;
          }
        } else {
          el.style.height = `${maxHeight}px`;
        }
      });
    };

    document.addEventListener('DOMContentLoaded', updateHeights);
    window.addEventListener('load', updateHeights);
    window.addEventListener('resize', updateHeights);
  }
  applyEqualHeight('patch-card-img', 'eye-patch-care');
  applyEqualHeight('bundle__container', 'bundle__banner');
  applyEqualHeight('get-qure-content', 'get-qure-box');
  applyEqualHeight('filter-card-item', 'trusted_video_card ');
  
  //applyEqualHeight('bundle__bnner-img');



// header and announcement js 
const siteHeader = document.getElementById("site-header");
const announcement = document.getElementById("announcement-bar");

if (siteHeader && announcement) {
    siteHeader.parentNode.insertBefore(announcement, siteHeader);
}
// header and announcement js end 

  