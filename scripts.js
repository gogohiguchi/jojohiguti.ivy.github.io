$(document).ready(function(){
    /*あらすじスライダー*/
    $(".slider-1").slick({
      accessibility: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      arrows: true,
      leftMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      prevArrow: '<img src="img/icon_arrow_base.png" class="slide_arrow prev-arrow">',
      nextArrow: '<img src="img/icon_arrow_base - コピー.png" class="slide_arrow next-arrow">',
      appendArrows: $('.aaa-arrow'),
    });

    /*キャラクタースライダー*/
    $(".abt-Chara").slick({
      accessibility: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      arrows: true,

      leftMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      prevArrow: '<img src="img/icon_arrow_base.png" class="slide_arrow prev-arrow">',
      nextArrow: '<img src="img/icon_arrow_base - コピー.png" class="slide_arrow next-arrow">',
      appendArrows: $('.bbb-arrow'),
   });
   
   /*ＢａｃｋＴｏＴＯＰの設定と効果音*/
   const btn1 = document.getElementById("btn1");
   const clickSound = document.getElementById("click-sound");
    btn1.addEventListener("click", () => {
      clickSound.play();
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });

    /*tobecontinued（ランダム音声）*/
    const btn2 = document.getElementById("btn2");
    const sounds = [
      document.getElementById("sounds1"),
      document.getElementById("sounds2"),
      document.getElementById("sounds3"),
      document.getElementById("sounds4"),
      document.getElementById("sounds5"),
      document.getElementById("sounds6"),
      document.getElementById("sounds7"),
      document.getElementById("sounds8"),
      document.getElementById("sounds9"),
      document.getElementById("sounds10"),
      document.getElementById("sounds11"),
      document.getElementById("sounds12"),
      document.getElementById("sounds13"),
      document.getElementById("sounds14"),
      document.getElementById("sounds15"),
      document.getElementById("sounds16"),
      document.getElementById("sounds17"),
      document.getElementById("sounds18"),
      document.getElementById("sounds19"),
      document.getElementById("sounds20"),
      document.getElementById("sounds21"),
      document.getElementById("sounds22"),
      document.getElementById("sounds23"),
      document.getElementById("sounds24"),
      document.getElementById("sounds25"),
      document.getElementById("sounds26"),
      document.getElementById("sounds27"),
      document.getElementById("sounds28"),
      document.getElementById("sounds29"),
      document.getElementById("sounds30"),
      document.getElementById("sounds31"),
      document.getElementById("sounds32"),
      document.getElementById("sounds33"),
      document.getElementById("sounds34"),
      document.getElementById("sounds35"),
      document.getElementById("sounds36"),
      document.getElementById("sounds37"),
      document.getElementById("sounds38"),
      document.getElementById("sounds39"),
      document.getElementById("sounds40"),
      document.getElementById("sounds41"),
      document.getElementById("sounds42"),
      document.getElementById("sounds43"),
    ];
    let currentSound = null;

    btn2.addEventListener("click", () => {
      // 既存の効果音を停止
      if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
      }
    
      // ランダムに一つの効果音を選んで再生
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      randomSound.play();
    
      // 現在の効果音を更新
      currentSound = randomSound;
    });

    /*概要リンクの効果音*/
    const partsLink = document.getElementById("parts-link");
    const aboutLink = document.getElementById("about-link");
    const charactersLink = document.getElementById("characters-link");

    const partsSound = document.getElementById("parts-sound");
    const aboutSound = document.getElementById("about-sound");
    const charactersSound = document.getElementById("characters-sound");

    partsLink.addEventListener("click", () => {
      partsSound.play();
    });

    aboutLink.addEventListener("click", () => {
      aboutSound.play();
    });

    charactersLink.addEventListener("click", () => {
      charactersSound.play();
    });
});



