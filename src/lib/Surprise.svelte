<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import Scream from './Scream.svelte'
  import { Loading } from 'carbon-components-svelte';

  const dispatch = createEventDispatcher();

  let src = '/image/creepy.jpg';
  let showSpookyFrame = false;

  function spook() {
    setTimeout(function () {
      document.getElementById('spookTheF').style.display = 'flex';
      document.getElementById('creepyFace').style.display = 'block';
      showSpookyFrame = true;
      document.getElementById('spookTheF').onclick = function () {
        document.getElementById('spookTheF').style.display = 'none';
        document.getElementById('creepyFace').style.display = 'none';
        showSpookyFrame = false;

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
<Loading active={!showSpookyFrame}/>

{#if showSpookyFrame}
    <Scream />
{/if}

<style>
    #spookTheF {
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0;

        z-index: 100;

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
        height: 100%;
    }
</style>
