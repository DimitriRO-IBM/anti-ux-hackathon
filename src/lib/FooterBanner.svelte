<script>
import { t } from '../i18n.js';
</script>

<div class="footerBanner">
    <div class="text">
        {@html $t('cookie.banner.textContent')}
    </div>
    <div class="buttons">
        <button type="button">{ $t('cookie.banner.leftButton') }</button>
        <button type="button">{ $t('cookie.banner.rightButton') }</button>
    </div>
</div>

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
