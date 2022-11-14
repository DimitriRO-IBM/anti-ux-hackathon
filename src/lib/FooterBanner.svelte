<script>
import { t } from '../i18n.js';
import { Button, Modal } from 'carbon-components-svelte';

let openLeft = false;
let openRight = false;
</script>

<div class="footerBanner">
    <div class="text">
        {@html $t('cookie.banner.textContent')}
    </div>
    <div class="buttons">
        <Button kind="tertiary" on:click={() => openLeft = true}>{ $t('cookie.banner.leftButton') }</Button>
        <Button kind="danger" on:click={() => openRight = true}>{ $t('cookie.banner.rightButton') }</Button>
    </div>
</div>

<Modal passiveModal bind:open={openLeft} modalHeading="Oops, je suis très gêné de mon oubli." on:open on:close>
    <p>J'ai oublié de mettre le code pour faire fonctionner l'Internet.</p>
</Modal>

<Modal passiveModal bind:open={openRight} modalHeading="Oops, je suis très gêné de mon oubli." on:open on:close>
    <p>J'ai pas été meilleur sur ce bouton-ci... Bien que je sois très touché par la confiance qui m'a été fournie - cliquer sur le second bouton alors qu'on a déjà tenté le premier, ça relève de l'exploit quand même.</p>
</Modal>

<style lang="scss">
  .footerBanner {
    position: fixed;
    bottom: 0;

    z-index: 10;

    transform: translateX(-100px);;

    width: 100vw;
    height: 120px;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .text {
      color: black;
      font-family: "Comic Sans MS",serif;
      text-align: justify;
    }

    .buttons {
    }
  }
</style>
