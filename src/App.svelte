<script>
  import PasswordInput from './lib/PasswordInput.svelte'
  import Surprise from './lib/Surprise.svelte'

  let firstName= '';
  let lastName= '';
  let mail = '';
  let dateOfBirth = '';
  let password = '';
  let clicked = false;

  function clickOnForbiddenButton() {
    clicked = !clicked;
  }
</script>

<main>
  <div class="form">
    <label>
      Prénom:
      <input type="text" name="firstName" bind:value={firstName}>
    </label>
    <label>
      Nom:
      <input type="text" name="lastName" bind:value={lastName}>
    </label>
    <label>
      Adresse mail:
      <input type="text" name="mail" bind:value={mail}>
    </label>
    <label>
      Date de naissance:
      <input type="text" name="dateOfBirth" bind:value={dateOfBirth}>
    </label>
    <PasswordInput />
  </div>
  <button on:click={clickOnForbiddenButton}>DON'T CLICK ME !</button>

  {#if clicked}
    <Surprise />
  {/if}
</main>

<style>

</style>
