<script>
  import { onMount } from 'svelte'

  let theme = 'g100'
  import PasswordInput from './lib/PasswordInput.svelte'
  import Surprise from './lib/Surprise.svelte'

  let firstName = ''
  let lastName = ''
  let mail = ''
  let dateOfBirth = ''
  let password = ''
  let ids = [
    'firstName',
    'lastName',
    'mail',
    'dateOfBirth',
  ];
  let clicked = false;

  function clickOnForbiddenButton () {
    clicked = !clicked
  }

  function onCloseSpookyFrame () {
    clicked = false
  }

  onMount(async () => {
    let initial = 0;
    let offset = 20;
    ids.forEach((id) => {
      let input = document.querySelector(`#${id}`);
      input.addEventListener('keyup', e => {
        let operator = Math.random() >= 0.5 ? '+' : '-';
        eval(`initial ${operator}= offset`);
        if (initial < 0) {
          initial = 0;
        }
        input.style.transform = `translateX(${initial}px)`;
      });
    });
  });

  $: document.documentElement.setAttribute('theme', theme);
</script>

<main>
    <div class="form">
        <div class="formField">
            <label for="firstName">Prénom:</label>
            <input type="text" id="firstName" bind:value={firstName}>
        </div>
        <div class="formField">
            <label for="lastName">Nom:</label>
            <input type="text" id="lastName" bind:value={lastName}>
        </div>
        <div class="formField">
            <label for="mail">Adresse mail:</label>
            <input type="text" id="mail" bind:value={mail}>
        </div>
        <div class="formField">
            <label for="dateOfBirth">Date de naissance:</label>
            <input type="text" id="dateOfBirth" bind:value={dateOfBirth}>
        </div>
        <div class="formField">
            <PasswordInput/>
        </div>
        <button on:click={clickOnForbiddenButton}>DON'T CLICK ME !</button>
    </div>

    {#if clicked}
        <Surprise on:closeSpookyFrame={onCloseSpookyFrame}/>
    {/if}
</main>

<style lang="scss">
  main {
    width: 100vw;
    height: 100vh;
  }

  .form {
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
    height: 100%;
  }

  .formField {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;

    label {
    }
  }
</style>
