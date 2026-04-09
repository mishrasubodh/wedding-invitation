  /* FLOWERS */

      for (let i = 0; i < 30; i++) {
        let flower = document.createElement("div");

        flower.className = "flower";
        flower.innerHTML = "🌸";

        flower.style.left = Math.random() * 100 + "%";
        flower.style.animationDuration = 6 + Math.random() * 6 + "s";

        document.body.appendChild(flower);
      }

      /* COUNTDOWN */

    var weddingDate = new Date("May 7, 2026 00:00:00").getTime();

function getText(value, single, plural) {
  return value + " " + (value === 1 ? single : plural);
}

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = weddingDate - now;

  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    getText(d, "दिन", "दिन") + " " +
    getText(h, "घंटा", "घंटे") + " " +
    getText(m, "मिनट", "मिनट") + " " +
    getText(s, "सेकंड", "सेकंड");

}, 1000);
      setInterval(() => {
        let fire = document.createElement("div");

        fire.innerHTML = "✨";
        fire.style.position = "fixed";
        fire.style.left = Math.random() * 100 + "%";
        fire.style.top = Math.random() * 100 + "%";
        fire.style.fontSize = "30px";

        fire.style.animation = "boom 1s ease-out";

        document.body.appendChild(fire);

        setTimeout(() => fire.remove(), 1000);
      }, 800);

      function openCard() {
        let env = document.getElementById("envelope");
        env.style.display = "none";

        /* scroll top */
        window.scrollTo(0, 0);

        /* 🔥 ANIMATION START */
        let items = document.querySelectorAll(".fly");

        items.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add("show");
          }, i * 200); // delay effect
        });
      }
      //

      function playMusic(key) {
        let video = document.getElementById("bgVideo");
        let audio = document.getElementById("bgMusic");

        let btn1 = document.querySelector('[onclick="playMusic(1)"]');
        let btn2 = document.querySelector('[onclick="playMusic(2)"]');
        // VIDEO
        if (key === 1) {
          if (video.paused) {
            video.muted = false;

            video.play().catch((err) => console.log(err));
            btn1.classList.add("playing");
            btn1.classList.remove("paused");

            btn1.classList.add("playing");
            btn1.classList.remove("paused");

            btn2.classList.add("paused");
            btn2.classList.remove("playing");

            // stop audio
            if (audio) {
              audio.pause();
              audio.currentTime = 0;
            }
          } else {
            video.pause();
            btn1.classList.add("paused");
            btn1.classList.remove("playing");
          }
        }

        // AUDIO

        console.log("key :>> ", key);
        if (key === 2) {
          if (audio.muted) {
            audio.muted = false;
            audio.play();
            btn2.classList.remove("paused");
            btn1.classList.add("paused");
            btn1.classList.remove("playing");

            if (video) video.pause();
          } else {
            audio.muted = true;
            audio.pause();
            btn2.classList.add("paused");
            btn2.classList.remove("playing");
          }
        }
      }