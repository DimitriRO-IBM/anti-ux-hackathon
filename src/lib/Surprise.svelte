<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import Scream from './Scream.svelte'

  const dispatch = createEventDispatcher();

  let src = '/image/creepy.jpg';
  let showSpookyFrame = false;

  function spook() {
    setTimeout(function () {
      document.getElementById('spookTheF').style.display = 'block';
      document.getElementById('creepyFace').style.display = 'block';
      let showSpookyFrame = true;
      document.getElementById('spookTheF').onclick = function () {
        document.getElementById('spookTheF').style.display = 'none';
        document.getElementById('creepyFace').style.display = 'none';
        let showSpookyFrame = false;

        dispatch('closeSpookyFrame', {});
      };
    }, 3000);
  }

  onMount(async () => {
    spook();
  });
</script>

<div id="spookTheF" on:load={spook}>
    <img id="creepyFace" {src} alt="A creepy face">
</div>

{#if showSpookyFrame}
    <Scream />
{/if}

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

    #creepyFace {
        display: none;
        margin: auto;
        height: inherit;
    }
</style>
