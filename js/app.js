function animateLogo() {
    TweenMax.fromTo("#react-logo", 1, {
        css: {
            y: "-15px"
        }
    }, {
        css: {
            y: "15px"
        },
        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut
    });
}

function animateRobot() {
    var t = new TimelineMax({repeat: -1});
    t.to("#android-robot", 0.4, {rotation: "-=10deg"})
        .to("#android-robot", 0.8, {rotation: "+=20deg"})
        .to("#android-robot", 0.4, {rotation: "-=10deg"});
}

function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a");

    for(var i = 0; i < links.length; i++) {
        var link = links[i];

        // 获取被链接指向的部分
        var section = document.querySelector(link.getAttribute("href"));
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + window.innerHeight;

        // 检查 window.scrollY 是否在这部分中
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            link.className = "active";
        } else {
            link.className = "";
        }
    }
}

function scrollToElement(element) {
    var topOfElement = element.offsetTop;

    TweenMax.to(window,1,{
        scrollTo: {
            y: topOfElement
        },

        ease: Power2.easeInOut
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for(var i = 0; i < links.length; i++) {
        var link = links[i];

        link.addEventListener("click",function(event) {
            // `event` 是鼠标点击事件
            event.preventDefault();

            // BUG 警告！使用闭包或者 ES6 `let` 修复。
            var section = document.querySelector(this.getAttribute("href"));

            scrollToElement(section);
        });
    }
}

function addScrollMagic() {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onEnter",
        duration: "100%"
    })
        .setTween("#intro-background", {opacity: 0})
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onEnter",
        duration: "100%"
    })
        .setTween("#iphone-overlay", {
            width: "50%",
            y: 0
        })
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onLeave",
        duration: "100%"
    })
        .setPin("#iphone-overlay")
        .addIndicators()
        .addTo(controller);
}

window.onscroll = function() {
    updateSliderControl();
};

window.onload = function() {
    animateLogo();
    animateRobot();
    addSmoothScrolling();
    addScrollMagic();
};