<script>
  import { onMount } from 'svelte'
  import Scream from './Scream.svelte'

  let showIframe = false;

  function spook() {
    setTimeout(function () {
      document.getElementById('spookTheF').style.display = 'block';
      showIframe = true;
      document.getElementById('spookTheF').onclick = function () {
        showIframe = false;
        document.getElementById('spookTheF').style.display = 'none';
      };
    }, 3000);
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

{#if showIframe}
    <Scream />
{/if}
