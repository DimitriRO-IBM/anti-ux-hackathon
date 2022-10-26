<script>
  import { onMount } from 'svelte'

  function spook() {
    const tmp = document.createElement('button');
    tmp.id = 'tmpSpooky';
    tmp.addEventListener('click', playSpookySound);

    setTimeout(function () {
      document.body.appendChild(tmp);
      document.getElementById(tmp.id).click();
      document.getElementById('spookTheF').style.display = 'block';
      document.getElementById('spookTheF').onclick = function () {
        document.getElementById('spookTheF').style.display = 'none';
      };
    }, (Math.random() * (6000 - 3000) + 3000));
  }

  const playSpookySound = async () => {
    const audio = new Audio('src/assets/audio/surprise.wav');
    try {
      await audio.play()
    } catch (e) {
      audio.muted = false;
      await audio.play();
    }
  }

  onMount(async () => {
    spook();
  });
</script>
<style>
    #spookTheF {
        position: fixed;
        top: 0;
        left: 0;
        display: none;
        height: 100%;
        width: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), no-repeat, #000;
        background-size: cover;
        border: 0;
    }
</style>

<div id="spookTheF" on:load={spook}></div>
