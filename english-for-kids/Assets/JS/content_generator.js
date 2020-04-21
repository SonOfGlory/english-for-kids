document.addEventListener('DOMContentLoaded', () => {
  const dataStorage = [ 
    [
      {
        'title':'Action (set A)',
        'image':'Assets/img/dance.jpg'
      }, 
      {
        'title':'Action (set B)',
        'image':'Assets/img/swim.jpg'
      },
      {
        'title':'Action (set C)',
        'image':'Assets/img/drop.jpg'
      },
      {
        'title':'Animal (set A)',
        'image':'Assets/img/cat.jpg'
      }, 
      {
        'title':'Animal (set B)',
        'image':'Assets/img/bird.jpg'
      }, 
      {
        'title':'Adjective',
        'image':'Assets/img/friendly.jpg'
      },
      {
        'title':'Clothes',
        'image':'Assets/img/blouse.jpg'
      },
      {
        'title':'Emotions',
        'image':'Assets/img/dance.jpg'
      }
    ],
    [
      {
        'word': 'cry',
        'translation': 'плакать',
        'image': 'Assets/img/cry.jpg',
        'audioSrc': 'Assets/audio/cry.mp3'
      },
      {
        'word': 'dance',
        'translation': 'танцевать',
        'image': 'Assets/img/dance.jpg',
        'audioSrc': 'Assets/audio/dance.mp3'
      },
      {
        'word': 'dive',
        'translation': 'нырять',
        'image': 'Assets/img/dive.jpg',
        'audioSrc': 'Assets/audio/dive.mp3'
      },
      {
        'word': 'draw',
        'translation': 'рисовать',
        'image': 'Assets/img/draw.jpg',
        'audioSrc': 'Assets/audio/draw.mp3'
      },
      {
        'word': 'fish',
        'translation': 'ловить рыбу',
        'image': 'Assets/img/fish.jpg',
        'audioSrc': 'Assets/audio/fish.mp3'
      },
      {
        'word': 'fly',
        'translation': 'летать',
        'image': 'Assets/img/fly.jpg',
        'audioSrc': 'Assets/audio/fly.mp3'
      },
      {
        'word': 'hug',
        'translation': 'обнимать',
        'image': 'Assets/img/hug.jpg',
        'audioSrc': 'Assets/audio/hug.mp3'
      },
      {
        'word': 'jump',
        'translation': 'прыгать',
        'image': 'Assets/img/jump.jpg',
        'audioSrc': 'Assets/audio/jump.mp3'
      }
    ],
    [
      {
        'word': 'open',
        'translation': 'открывать',
        'image': 'Assets/img/open.jpg',
        'audioSrc': 'Assets/audio/open.mp3'
      },
      {
        'word': 'play',
        'translation': 'играть',
        'image': 'Assets/img/play.jpg',
        'audioSrc': 'Assets/audio/play.mp3'
      },
      {
        'word': 'point',
        'translation': 'указывать',
        'image': 'Assets/img/point.jpg',
        'audioSrc': 'Assets/audio/point.mp3'
      },
      {
        'word': 'ride',
        'translation': 'ездить',
        'image': 'Assets/img/ride.jpg',
        'audioSrc': 'Assets/audio/ride.mp3'
      },
      {
        'word': 'run',
        'translation': 'бегать',
        'image': 'Assets/img/run.jpg',
        'audioSrc': 'Assets/audio/run.mp3'
      },
      {
        'word': 'sing',
        'translation': 'петь',
        'image': 'Assets/img/sing.jpg',
        'audioSrc': 'Assets/audio/sing.mp3'
      },
      {
        'word': 'skip',
        'translation': 'пропускать, прыгать',
        'image': 'Assets/img/skip.jpg',
        'audioSrc': 'Assets/audio/skip.mp3'
      },
      {
        'word': 'swim',
        'translation': 'плавать',
        'image': 'Assets/img/swim.jpg',
        'audioSrc': 'Assets/audio/swim.mp3'
      }
    ],
    [
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      },
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      },
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      },
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      },
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      },
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      },
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      },
      {
        'word': '',
        'translation': '',
        'image': '',
        'audioSrc': ''
      }
    ],
    [
      {
        'word': 'cat',
        'translation': 'кот',
        'image': 'Assets/img/cat.jpg',
        'audioSrc': 'Assets/audio/cat.mp3'
      },
      {
        'word': 'chicken',
        'translation': 'цыплёнок',
        'image': 'Assets/img/chick.jpg',
        'audioSrc': 'Assets/audio/chick.mp3'
      },
      {
        'word': 'chick',
        'translation': 'курица',
        'image': 'Assets/img/chicken.jpg',
        'audioSrc': 'Assets/audio/chicken.mp3'
      },
      {
        'word': 'dog',
        'translation': 'собака',
        'image': 'Assets/img/dog.jpg',
        'audioSrc': 'Assets/audio/dog.mp3'
      },
      {
        'word': 'horse',
        'translation': 'лошадь',
        'image': 'Assets/img/horse.jpg',
        'audioSrc': 'Assets/audio/horse.mp3'
      },
      {
        'word': 'pig',
        'translation': 'свинья',
        'image': 'Assets/img/pig.jpg',
        'audioSrc': 'Assets/audio/pig.mp3'
      },
      {
        'word': 'rabbit',
        'translation': 'кролик',
        'image': 'Assets/img/rabbit.jpg',
        'audioSrc': 'Assets/audio/rabbit.mp3'
      },
      {
        'word': 'sheep',
        'translation': 'овца',
        'image': 'Assets/img/sheep.jpg',
        'audioSrc': 'Assets/audio/sheep.mp3'
      }
    ],
    [
      {
        'word': 'bird',
        'translation': 'птица',
        'image': 'Assets/img/bird.jpg',
        'audioSrc': 'Assets/audio/bird.mp3'
      },
      {
        'word': 'fish',
        'translation': 'рыба',
        'image': 'Assets/img/fish1.jpg',
        'audioSrc': 'Assets/audio/fish.mp3'
      },
      {
        'word': 'frog',
        'translation': 'жаба',
        'image': 'Assets/img/frog.jpg',
        'audioSrc': 'Assets/audio/frog.mp3'
      },
      {
        'word': 'giraffe',
        'translation': 'жирафа',
        'image': 'Assets/img/giraffe.jpg',
        'audioSrc': 'Assets/audio/giraffe.mp3'
      },
      {
        'word': 'lion',
        'translation': 'лев',
        'image': 'Assets/img/lion.jpg',
        'audioSrc': 'Assets/audio/lion.mp3'
      },
      {
        'word': 'mouse',
        'translation': 'мышь',
        'image': 'Assets/img/mouse.jpg',
        'audioSrc': 'Assets/audio/mouse.mp3'
      },
      {
        'word': 'turtle',
        'translation': 'черепаха',
        'image': 'Assets/img/turtle.jpg',
        'audioSrc': 'Assets/audio/turtle.mp3'
      },
      {
        'word': 'dolphin',
        'translation': 'дельфин',
        'image': 'Assets/img/dolphin.jpg',
        'audioSrc': 'Assets/audio/dolphin.mp3'
      }
    ],
     [
      {
        'word': 'interensting',
        'translation': 'интересный',
        'image': 'Assets/img/cry.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/interesting.mp3'
      },
      {
        'word': 'good',
        'translation': 'хороший',
        'image': 'Assets/img/dance.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/good.mp3'
      },
      {
        'word': 'old',
        'translation': 'старый',
        'image': 'Assets/img/dive.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/old.mp3'
      },
      {
        'word': 'young',
        'translation': 'молодой',
        'image': 'Assets/img/draw.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/young.mp3'
      },
      {
        'word': 'clever',
        'translation': 'умный',
        'image': 'Assets/img/fish.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/clever.mp3'
      },
      {
        'word': 'educated',
        'translation': 'образованный',
        'image': 'Assets/img/fly.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/educated.mp3'
      },
      {
        'word': 'mature',
        'translation': 'зрелый',
        'image': 'Assets/img/hug.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/mature.mp3'
      },
      {
        'word': 'beautiful',
        'translation': 'прекрасный, красивый',
        'image': 'Assets/img/jump.jpg',
        'audioSrc': 'https://wooordhunt.ru/data/sound/word/us/mp3/beautiful.mp3'
      }
    ],
    [
      {
        'word': 'skirt',
        'translation': 'юбка',
        'image': 'Assets/img/skirt.jpg',
        'audioSrc': 'Assets/audio/skirt.mp3'
      },
      {
        'word': 'pants',
        'translation': 'брюки',
        'image': 'Assets/img/pants.jpg',
        'audioSrc': 'Assets/audio/pants.mp3'
      },
      {
        'word': 'blouse',
        'translation': 'блузка',
        'image': 'Assets/img/blouse.jpg',
        'audioSrc': 'Assets/audio/blouse.mp3'
      },
      {
        'word': 'dress',
        'translation': 'платье',
        'image': 'Assets/img/dress.jpg',
        'audioSrc': 'Assets/audio/dress.mp3'
      },
      {
        'word': 'boot',
        'translation': 'ботинок',
        'image': 'Assets/img/boot.jpg',
        'audioSrc': 'Assets/audio/boot.mp3'
      },
      {
        'word': 'shirt',
        'translation': 'рубашка',
        'image': 'Assets/img/shirt.jpg',
        'audioSrc': 'Assets/audio/shirt.mp3'
      },
      {
        'word': 'coat',
        'translation': 'пальто',
        'image': 'Assets/img/coat.jpg',
        'audioSrc': 'Assets/audio/coat.mp3'
      },
      {
        'word': 'shoe',
        'translation': 'туфли',
        'image': 'Assets/img/shoe.jpg',
        'audioSrc': 'Assets/audio/shoe.mp3'
      }
    ],
    [
      {
        'word': 'sad',
        'translation': 'грустный',
        'image': 'Assets/img/sad.jpg',
        'audioSrc': 'Assets/audio/sad.mp3'
      },
      {
        'word': 'angry',
        'translation': 'сердитый',
        'image': 'Assets/img/angry.jpg',
        'audioSrc': 'Assets/audio/angry.mp3'
      },
      {
        'word': 'happy',
        'translation': 'счастливый',
        'image': 'Assets/img/happy.jpg',
        'audioSrc': 'Assets/audio/happy.mp3'
      },
      {
        'word': 'tired',
        'translation': 'уставший',
        'image': 'Assets/img/tired.jpg',
        'audioSrc': 'Assets/audio/tired.mp3'
      },
      {
        'word': 'surprised',
        'translation': 'удивлённый',
        'image': 'Assets/img/surprised.jpg',
        'audioSrc': 'Assets/audio/surprised.mp3'
      },
      {
        'word': 'scared',
        'translation': 'испуганный',
        'image': 'Assets/img/scared.jpg',
        'audioSrc': 'Assets/audio/scared.mp3'
      },
      {
        'word': 'smile',
        'translation': 'улыбка',
        'image': 'Assets/img/smile.jpg',
        'audioSrc': 'Assets/audio/smile.mp3'
      },
      {
        'word': 'laugh',
        'translation': 'смех',
        'image': 'Assets/img/laugh.jpg',
        'audioSrc': 'Assets/audio/laugh.mp3'
      }
    ]
  ]

// const wordMap = {
//   smile: {  ,....},
//   scared: {  ....}
//   ...
// }

// wordMap['smile'].translation =

  const cardsContainer = document.querySelector("body > div.wrapper.d-flex.flex-wrap.justify-content-center");
  const menu = document.querySelector('body > ul');
  const menuToggler = document.querySelector("body > header > div.menu-toggler > input[type=checkbox]");
  const menuTogglerTriggers = document.querySelectorAll('[data-menuswitch]');
  const modeToggler = document.querySelector("#toggler");
  const gameGradient = 'game-mode';
  const playButton = document.querySelector(".play-button");
  let gameMode;

  mainContentGenerator = () => { 
    let gradient = 'blue-gradient';
    if (modeToggler.checked) gradient = gameGradient;
    playButton.classList.remove('shown'); 
    cardsContainer.innerHTML = dataStorage[0].map((item, index) => 
    `<a href="#" class="card testimonial-card m-4" data-order="${index+1}">
      <!-- Background color -->
      <div class="card-up ${gradient}"></div>
      <!-- Avatar --> 
      <div class="avatar mx-auto white">
        <img src="${item.image}" class="rounded-circle" alt="${item.title}">
      </div>
      <!-- Content -->
      <div class="card-body">
        <!-- Name -->
        <h4 class="card-title text-center mt-5">${item.title}</h4>
      </div>
    </a>`).join('');
    };
  
  pageContentGenerator = (pageNumber) => {
    if(modeToggler.checked) {
      playButton.classList.add('shown');
      gameMode = 'game-mode';
    }
    else {
      gameMode = '';
    }
    cardsContainer.innerHTML = dataStorage[pageNumber].map(item => 
    `<div class="flip-card" data-word="${item.word}" data-audiosrc="${item.audioSrc}">
      <div class="card m-4 flip-card-inner">
        <div class="flip-card-front">
          <!-- Card image -->
          <div class="view overlay d-flex justify-content-center">
            <img class="card-img-top ${gameMode}" src="${item.image}" alt="${item.title}">
            <a href="#!">
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>
          <!-- Card content -->
          <div class="card-body ${gameMode}">
            <!-- Title -->
            <h4 class="card-title text-center">${item.word}</h4>
            <!-- rotation icon -->
            <div class="rotate-icon"></div>
          </div>
        </div>
        <div class="flip-card-back">
          <!-- Card image -->
          <div class="view overlay d-flex justify-content-center">
            <img class="card-img-top ${gameMode}" src="${item.image}" alt="${item.word}">
            <a href="#!">
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>
          <!-- Card content -->
          <div class="card-body ${gameMode}">
            <!-- Title -->
            <h4 class="card-title text-center">${item.translation}</h4>
          </div>
        </div>
      </div>
    </div>`).join('');
    // wrapper.insertAdjacentHTML('beforeend', '<button type="button" class="play-button btn rounded-pill purple-gradient play-mode-color">Start game</button>');
  }

  mainContentGenerator();

  function menuSelector(e) {
    const targetWithDataOrder = e.target.closest('[data-order]');
    /* console.log(targetWithDataOrder.dataset.order); */
    if (e.target.dataset.order == 0) {
      mainContentGenerator();
      menuOutlineGenerator(0);
    }
    else if (targetWithDataOrder) {
      pageContentGenerator(targetWithDataOrder.dataset.order);
      menuOutlineGenerator(targetWithDataOrder.dataset.order);
    }
  }

  function menuOutlineGenerator(order) {
      menu.querySelectorAll('li > a').forEach(a => a.classList.remove('active'));
      menu.querySelector(`li > a[data-order='${order}']`).classList.add('active');
  }

  function winamp(e) {
    const playableTarget = e.target.closest('.flip-card');
    let volumeSlider = document.querySelector("#volume");
    if (playableTarget) {
      let mp3 = new Audio(playableTarget.dataset.audiosrc);
      mp3.volume = volumeSlider.value/(volumeSlider.max - volumeSlider.min);
      mp3.play();
    }
  }

  function shuffle(array) {
    let m = array.length, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      [array[m], array[i]] = [array[i], array[m]];
    }
    return array;
  }

  function checkCorrectSound(element) {
    if (element.dataset.audioSrc === shuffle(array)[element]) {
      createnewstar();
      element++;

    }
    else {
      createemptynewstar();
    }
  }

  menuToggler.onclick = () => {
    if (document.querySelectorAll('[data-menuswitch="hidden"]').length === 0) {
      menuTogglerTriggers.forEach(toggler => {
        toggler.dataset.menuswitch = 'hidden';
      }
    )}
    else menuTogglerTriggers.forEach(toggler => {
        toggler.dataset.menuswitch = '';
      }
    )
  }

  modeToggler.addEventListener('change', function() {
    const findDataOrder = menu.querySelector(".active").dataset.order;
    console.log(findDataOrder);
    if (findDataOrder == 0) mainContentGenerator();
    else pageContentGenerator(findDataOrder);

    if(modeToggler.checked) {
      menu.classList.add(gameGradient);
      if (findDataOrder != 0) playButton.classList.add('shown'); 
    } else {
      menu.classList.remove(gameGradient);
      playButton.classList.remove('shown'); 
    }
  });
  
  menu.onmouseleave = () => {
    menu.dataset.menuswitch = 'hidden';
    menuToggler.checked = false;
  }

  menu.onclick = (e) => {
    menuSelector(e);
  }

  cardsContainer.onclick = (e) => {
    winamp(e);
    menuSelector(e);
  };

  function handleStart() {
    // Выбираем массив соответствующий теме
    // Копируем в отдельную переменную
    // Перетасовываем массив
    // Выбираем [последний]
    // Проигрываем звук
    // Вешаем обработчик на контейнер
    // Прячем старт, показываем повтор

  }

  function handleGuessClick(e) {
    const playableTarget = e.target.closest('.flip-card');
    // выяснить какого слова касается карточка
      //
    // если слово совпало:
      // если слово совпало:
      // выключаем карточку
      // добавляем звездочку
      // если слов больше нету -> 
        // проигрываем звук прохождения теста
        // показываем картинку
        // возврат в экран выбора категорий и return
      // проигрываем звук победы
      // берем следующее слово
      // Проигрываем следуюций звук
    // если слово НЕ совпало:
      // добавляем пустую звездочку
      // проигрываем звук поражения
      // проигрываем звук победы
  } 




  /*  ============================================== Volume bar ===================================================== */

  var s = document.createElement('style'), 
    r = document.querySelector('#volume'), 
    prefs = ['webkit-slider-runnable', 'moz-range'];

  document.body.appendChild(s);

  var getTrackStyleStr = function(el, val) {
    var str = '', len = prefs.length;
    
    for(var i = 0; i < len; i++) {
      str += '.js input[type=range]::-' + prefs[i] + 
        '-track{background-size:' + val + '}';
    }
      
    return str;
  };

  var getValStr = function(el, p) {
    var min = el.min || 0, 
        p = p || el.value, 
        perc = (el.max) ? ~~(100*(p - min)/(el.max - min)) : p, 
        val = perc + '% 100%,100% 100%,100% 100%';
    
    return val;
  };

  r.addEventListener('input', function() {
    s.textContent = getTrackStyleStr(this, getValStr(this));
  }, false);

 /*  =================================================Sakura Petals =================================================== */

var Petal = /** @class */function () {
  class Petal {
    constructor(config) {
      this.customClass = config.customClass || "";
      this.x = config.x || 0;
      this.y = config.y || 0;
      this.z = config.z || 0;
      this.xSpeedVariation = config.xSpeedVariation || 0;
      this.ySpeed = config.ySpeed || 0;
      this.rotation = {
        axis: "X",
        value: 0,
        speed: 0,
        x: 0
      };
      if (config.rotation && typeof config.rotation === "object") {
        this.rotation.axis = config.rotation.axis || this.rotation.axis;
        this.rotation.value = config.rotation.value || this.rotation.value;
        this.rotation.speed = config.rotation.speed || this.rotation.speed;
        this.rotation.x = config.rotation.x || this.rotation.x;
      }
      this.el = document.createElement("div");
      this.el.className = "petal  " + this.customClass;
      this.el.style.position = "absolute";
      this.el.style.backfaceVisibility = "visible";
    }
  }
  return Petal;
}();
var BlossomScene = /** @class */function () {
  class BlossomScene {
    constructor(config) {
      var container = document.getElementById(config.id);
      if (container === null) {
        throw new Error("[id] provided was not found in document");
      }
      this.container = container;
      this.placeholder = document.createElement("div");
      this.petals = [];
      this.numPetals = config.numPetals || 300;
      this.petalsTypes = config.petalsTypes;
      this.gravity = config.gravity || 0.8;
      this.windMaxSpeed = config.windMaxSpeed || 4;
      this.windMagnitude = 0.2;
      this.windDuration = 0;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.timer = 0;
      this.container.style.overflow = "hidden";
      this.placeholder.style.transformStyle = "preserve-3d";
      this.placeholder.style.position = "fixed";
      this.placeholder.style.width = this.container.offsetWidth + "px";
      this.placeholder.style.height = this.container.offsetHeight + "px";
      this.container.appendChild(this.placeholder);
      this.createPetals();
      requestAnimationFrame(this.updateFrame.bind(this));
    }
    /**
         * Reset the petal position when it goes out of container
         */
    resetPetal(petal) {
      petal.x = this.width * 2 - Math.random() * this.width * 1.75;
      petal.y = petal.el.offsetHeight * -1;
      petal.z = Math.random() * 200;
      if (petal.x > this.width) {
        petal.x = this.width + petal.el.offsetWidth;
        petal.y = Math.random() * this.height / 2;
      }
      // Rotation
      petal.rotation.speed = Math.random() * 10;
      var randomAxis = Math.random();
      if (randomAxis > 0.5) {
        petal.rotation.axis = "X";
      }
      else if (randomAxis > 0.25) {
        petal.rotation.axis = "Y";
        petal.rotation.x = Math.random() * 180 + 90;
      }
      else {
        petal.rotation.axis = "Z";
        petal.rotation.x = Math.random() * 360 - 180;
        // looks weird if the rotation is too fast around this axis
        petal.rotation.speed = Math.random() * 3;
      }
      // random speed
      petal.xSpeedVariation = Math.random() * 0.8 - 0.4;
      petal.ySpeed = Math.random() + this.gravity;
      return petal;
    }
    /**
          * Calculate wind speed
          */
    calculateWindSpeed(t, y) {
      var a = this.windMagnitude / 2 * (this.height - 2 * y / 3) / this.height;
      return a * Math.sin(2 * Math.PI / this.windDuration * t + 3 * Math.PI / 2) + a;
    }
    /**
          * Update petal position
          */
    updatePetal(petal) {
      var petalWindSpeed = this.calculateWindSpeed(this.timer, petal.y);
      var xSpeed = petalWindSpeed + petal.xSpeedVariation;
      petal.x -= xSpeed;
      petal.y += petal.ySpeed;
      petal.rotation.value += petal.rotation.speed;
      var t = "translateX( " +
        petal.x +
        "px ) translateY( " +
        petal.y +
        "px ) translateZ( " +
        petal.z +
        "px )  rotate" +
        petal.rotation.axis +
        "( " +
        petal.rotation.value +
        "deg )";
      if (petal.rotation.axis !== "X") {
        t += " rotateX(" + petal.rotation.x + "deg)";
      }
      petal.el.style.transform = t;
      // reset if out of view
      if (petal.x < -10 || petal.y > this.height + 10) {
        this.resetPetal(petal);
      }
    }
    /**
          * Change the wind speed
          */
    updateWind() {
      // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration
      this.windMagnitude = Math.random() * this.windMaxSpeed;
      this.windDuration = this.windMagnitude * 50 + (Math.random() * 20 - 10);
    }
    /**
          * Create the petals elements
          */
    createPetals() {
      for (var i = 0; i < this.numPetals; i++) {
        var tmpPetalType = this.petalsTypes[Math.floor(Math.random() * (this.petalsTypes.length - 1))];
        var tmpPetal = new Petal({ customClass: tmpPetalType.customClass });
        this.resetPetal(tmpPetal);
        this.petals.push(tmpPetal);
        this.placeholder.appendChild(tmpPetal.el);
      }
    }
    /**
          * Update the animation frame
          */
    updateFrame() {
      if (this.timer === this.windDuration) {
        this.updateWind();
        this.timer = 0;
      }
      var petalsLen = this.petals.length;
      for (var i = 0; i < petalsLen; i++) {
        this.updatePetal(this.petals[i]);
      }
      this.timer++;
      requestAnimationFrame(this.updateFrame.bind(this));
    }
  }
  return BlossomScene;
}();
var petalsTypes = [
new Petal({ customClass: "petal-style1" }),
new Petal({ customClass: "petal-style2" }),
new Petal({ customClass: "petal-style3" }),
new Petal({ customClass: "petal-style4" })];

var myBlossomSceneConfig = {
  id: "blossom_container",
  petalsTypes: petalsTypes };

var myBlossomScene = new BlossomScene(myBlossomSceneConfig);

})