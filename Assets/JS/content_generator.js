document.addEventListener('DOMContentLoaded', () => {
  const cardsArray = [ 
    /* ['Action (set A)', 'Action (set B)', 'Action (set C)', 'Animal (set A)', 'Animal (set B)', 'Adjective', 'Clothes', 'Emotions'], */
    [
      {
        'tittle':'Action (set A)',
        'image':'Assets/img/dance.jpg'
      }, 
      {
        'tittle':'Action (set B)',
        'image':'Assets/img/swim.jpg'
      },
      {
        'tittle':'Action (set C)',
        'image':'Assets/img/drop.jpg'
      },
      {
        'tittle':'Animal (set A)',
        'image':'Assets/img/cat.jpg'
      }, 
      {
        'tittle':'Animal (set B)',
        'image':'Assets/img/bird.jpg'
      }, 
      {
        'tittle':'Adjective',
        'image':'Assets/img/friendly.jpg'
      },
      {
        'tittle':'Clothes',
        'image':'Assets/img/blouse.jpg'
      },
      {
        'tittle':'Emotions',
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

  const wrapper = document.querySelector("body > div.wrapper.d-flex.flex-wrap.justify-content-center")
  function mainContentGenerator() { wrapper.innerHTML = '';
  return cardsArray[0].map((item, index) => 
  `<a href="#" class="card testimonial-card m-4" data-order="${index+1}">

    <!-- Background color -->
    <div class="card-up blue-gradient"></div>

    <!-- Avatar --> 
    <div class="avatar mx-auto white">
      <img src="${item.image}" class="rounded-circle" alt="${item.tittle}">
    </div>

    <!-- Content -->
    <div class="card-body">

      <!-- Name -->
      <h4 class="card-title text-center mt-5">${item.tittle}</h4>
    </div>
   </a>`).join('');
  };
  
  function pageContentGenerator(pageNumber) { wrapper.innerHTML = '';
  return cardsArray[pageNumber].map(item => 
  `<div class="flip-card" data-audiosrc="${item.audioSrc}">
    <div class="card m-4 flip-card-inner">
      <div class="flip-card-front">
        <!-- Card image -->
        <div class="view overlay">
          <img class="card-img-top" src="${item.image}" alt="${item.tittle}">
          <a href="#!">
            <div class="mask rgba-white-slight waves-effect waves-light"></div>
          </a>
        </div>
        <!-- Card content -->
        <div class="card-body">
          <!-- Title -->
          <h4 class="card-title text-center">${item.word}</h4>
          <!-- rotation icon -->
          <div class="rotate-icon"></div>
        </div>
      </div>
      <div class="flip-card-back">
        <!-- Card image -->
        <div class="view overlay">
          <img class="card-img-top" src="${item.image}" alt="${item.tittle}">
          <a href="#!">
            <div class="mask rgba-white-slight waves-effect waves-light"></div>
          </a>
        </div>
        <!-- Card content -->
        <div class="card-body">
          <!-- Title -->
          <h4 class="card-title text-center">${item.translation}</h4>
        </div>
      </div>
    </div>
  </div>`).join('');
  };

  wrapper.innerHTML = mainContentGenerator();

  document.querySelector("body > ul").onclick = (e) => menuSelector(e);
  wrapper.onclick = (e) => { menuSelector(e); winamp(e)};

  function menuSelector(event) {
    const targetWithDataOrder = event.target.closest('[data-order]');
    /* console.log(event); */
    if (event.target.dataset.order == 0) wrapper.innerHTML = mainContentGenerator();
    else if (targetWithDataOrder) wrapper.innerHTML = pageContentGenerator(targetWithDataOrder.dataset.order); 
  }

  function winamp(event) {
    const playableTarget = event.target.closest('.flip-card');
    let volumeSlider = document.querySelector("#vollume");
    if (playableTarget) {
      let mp3 = new Audio(playableTarget.dataset.audiosrc);
      mp3.volume = volumeSlider.value/(volumeSlider.max - volumeSlider.min);
      mp3.play();
    }
  }

  // wrapper.innerHTML = pageContentGenerator(6); /* alternatively: wrapper.insertAdjacentHTML('beforeend', mainContent); */
  // myBlossomScene;

  var s = document.createElement('style'), 
    r = document.querySelector('input[type=range]'), 
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

 /*  ============================================================================================================ */

// var Petal = /** @class */function () {
//   class Petal {
//     constructor(config) {
//       this.customClass = config.customClass || "";
//       this.x = config.x || 0;
//       this.y = config.y || 0;
//       this.z = config.z || 0;
//       this.xSpeedVariation = config.xSpeedVariation || 0;
//       this.ySpeed = config.ySpeed || 0;
//       this.rotation = {
//         axis: "X",
//         value: 0,
//         speed: 0,
//         x: 0
//       };
//       if (config.rotation && typeof config.rotation === "object") {
//         this.rotation.axis = config.rotation.axis || this.rotation.axis;
//         this.rotation.value = config.rotation.value || this.rotation.value;
//         this.rotation.speed = config.rotation.speed || this.rotation.speed;
//         this.rotation.x = config.rotation.x || this.rotation.x;
//       }
//       this.el = document.createElement("div");
//       this.el.className = "petal  " + this.customClass;
//       this.el.style.position = "absolute";
//       this.el.style.backfaceVisibility = "visible";
//     }
//   }
//   return Petal;
// }();
// var BlossomScene = /** @class */function () {
//   class BlossomScene {
//     constructor(config) {
//       var container = document.getElementById(config.id);
//       if (container === null) {
//         throw new Error("[id] provided was not found in document");
//       }
//       this.container = container;
//       this.placeholder = document.createElement("div");
//       this.petals = [];
//       this.numPetals = config.numPetals || 300;
//       this.petalsTypes = config.petalsTypes;
//       this.gravity = config.gravity || 0.8;
//       this.windMaxSpeed = config.windMaxSpeed || 4;
//       this.windMagnitude = 0.2;
//       this.windDuration = 0;
//       this.width = this.container.offsetWidth;
//       this.height = this.container.offsetHeight;
//       this.timer = 0;
//       this.container.style.overflow = "hidden";
//       this.placeholder.style.transformStyle = "preserve-3d";
//       this.placeholder.style.width = this.container.offsetWidth + "px";
//       this.placeholder.style.height = this.container.offsetHeight + "px";
//       this.container.appendChild(this.placeholder);
//       this.createPetals();
//       requestAnimationFrame(this.updateFrame.bind(this));
//     }
//     /**
//          * Reset the petal position when it goes out of container
//          */
//     resetPetal(petal) {
//       petal.x = this.width * 2 - Math.random() * this.width * 1.75;
//       petal.y = petal.el.offsetHeight * -1;
//       petal.z = Math.random() * 200;
//       if (petal.x > this.width) {
//         petal.x = this.width + petal.el.offsetWidth;
//         petal.y = Math.random() * this.height / 2;
//       }
//       // Rotation
//       petal.rotation.speed = Math.random() * 10;
//       var randomAxis = Math.random();
//       if (randomAxis > 0.5) {
//         petal.rotation.axis = "X";
//       }
//       else if (randomAxis > 0.25) {
//         petal.rotation.axis = "Y";
//         petal.rotation.x = Math.random() * 180 + 90;
//       }
//       else {
//         petal.rotation.axis = "Z";
//         petal.rotation.x = Math.random() * 360 - 180;
//         // looks weird if the rotation is too fast around this axis
//         petal.rotation.speed = Math.random() * 3;
//       }
//       // random speed
//       petal.xSpeedVariation = Math.random() * 0.8 - 0.4;
//       petal.ySpeed = Math.random() + this.gravity;
//       return petal;
//     }
//     /**
//           * Calculate wind speed
//           */
//     calculateWindSpeed(t, y) {
//       var a = this.windMagnitude / 2 * (this.height - 2 * y / 3) / this.height;
//       return a * Math.sin(2 * Math.PI / this.windDuration * t + 3 * Math.PI / 2) + a;
//     }
//     /**
//           * Update petal position
//           */
//     updatePetal(petal) {
//       var petalWindSpeed = this.calculateWindSpeed(this.timer, petal.y);
//       var xSpeed = petalWindSpeed + petal.xSpeedVariation;
//       petal.x -= xSpeed;
//       petal.y += petal.ySpeed;
//       petal.rotation.value += petal.rotation.speed;
//       var t = "translateX( " +
//         petal.x +
//         "px ) translateY( " +
//         petal.y +
//         "px ) translateZ( " +
//         petal.z +
//         "px )  rotate" +
//         petal.rotation.axis +
//         "( " +
//         petal.rotation.value +
//         "deg )";
//       if (petal.rotation.axis !== "X") {
//         t += " rotateX(" + petal.rotation.x + "deg)";
//       }
//       petal.el.style.transform = t;
//       // reset if out of view
//       if (petal.x < -10 || petal.y > this.height + 10) {
//         this.resetPetal(petal);
//       }
//     }
//     /**
//           * Change the wind speed
//           */
//     updateWind() {
//       // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration
//       this.windMagnitude = Math.random() * this.windMaxSpeed;
//       this.windDuration = this.windMagnitude * 50 + (Math.random() * 20 - 10);
//     }
//     /**
//           * Create the petals elements
//           */
//     createPetals() {
//       for (var i = 0; i < this.numPetals; i++) {
//         var tmpPetalType = this.petalsTypes[Math.floor(Math.random() * (this.petalsTypes.length - 1))];
//         var tmpPetal = new Petal({ customClass: tmpPetalType.customClass });
//         this.resetPetal(tmpPetal);
//         this.petals.push(tmpPetal);
//         this.placeholder.appendChild(tmpPetal.el);
//       }
//     }
//     /**
//           * Update the animation frame
//           */
//     updateFrame() {
//       if (this.timer === this.windDuration) {
//         this.updateWind();
//         this.timer = 0;
//       }
//       var petalsLen = this.petals.length;
//       for (var i = 0; i < petalsLen; i++) {
//         this.updatePetal(this.petals[i]);
//       }
//       this.timer++;
//       requestAnimationFrame(this.updateFrame.bind(this));
//     }
//   }
//   return BlossomScene;
// }();
// var petalsTypes = [
// new Petal({ customClass: "petal-style1" }),
// new Petal({ customClass: "petal-style2" }),
// new Petal({ customClass: "petal-style3" }),
// new Petal({ customClass: "petal-style4" })];

// var myBlossomSceneConfig = {
//   id: "blossom_container",
//   petalsTypes: petalsTypes };

// var myBlossomScene = new BlossomScene(myBlossomSceneConfig);

})