<script>
  import { onMount } from 'svelte';
  import Surprise from './lib/Surprise.svelte';
  import FooterBanner from './lib/FooterBanner.svelte';

  import {
    Grid,
    Row,
    TextInput,
    PasswordInput,
    Theme, Select, SelectItem, Column,
  } from 'carbon-components-svelte';
  import { Button, Modal } from 'carbon-components-svelte';

  import { t, locale, locales } from './i18n';
  import DatePicker from './lib/DatePicker.svelte';
  import LookMorty from './lib/LookMorty.svelte';

  // Create a locale specific timestamp
  $: time = new Date().toLocaleDateString($locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const themes = [
    {
      value: 0,
      text: 'Classique',
    }, {
      value: 1,
      text: 'Bonus',
    }];
  let selectedTheme = themes[0];

  const TEXT_TYPE = 'text';
  const PWD_TYPE = 'password';
  const NAME = 'passwordInput';

  let firstName = '';
  let lastName = '';
  let mail = '';
  let password = '';
  let ids = [
    'firstName',
    'lastName',
    'mail',
    'dateOfBirth',
  ];
  let clicked = false;
  let value = '';
  let type = PWD_TYPE;

  const changePasswordType = () => {
    type === PWD_TYPE ? setToTextType() : setToPasswordType();
  };

  const setToTextType = () => type = TEXT_TYPE;
  const setToPasswordType = () => type = PWD_TYPE;

  function clickOnForbiddenButton () {
    clicked = !clicked;
  }

  function onCloseSpookyFrame () {
    clicked = false;
  }

  onMount(async () => {
    let initial = 0;
    let offset = 20;
    ids.forEach((id) => {
      let input = document.querySelector(`#${id}`);
      if (input) {
        input.addEventListener('keyup', e => {
          let operator = Math.random() >= 0.5 ? '+' : '-';
          eval(`initial ${operator}= offset`);
          if (initial < 0) {
            initial = 0;
          }
          input.style.transform = `translateX(${initial}px)`;
        });
      }
    });
  });

  function changeTheme () {
    switch (selectedTheme) {
      case 0:
        document.querySelector('main').style.background = 'none';
        break;
      case 1:
        document.querySelector('main').style.background = 'url("/image/rick-roll-rick-rolled.gif")';
        break;
    }
  }
</script>

<main>
    <div class="theme-container">
        <Select type="inline" bind:selected={selectedTheme} on:change={changeTheme}>
            {#each themes as {value, text}}
                <SelectItem {value} {text}></SelectItem>
            {/each}
        </Select>
    </div>
    {#if selectedTheme.value === 0 || !selectedTheme}
        <Grid padding>
            <Row>
                <Column>
                    <Row>
                        <TextInput id="firstName" labelText={ $t('form.labels.firstName') }
                                   bind:value={firstName}></TextInput>
                    </Row>
                    <Row>
                        <TextInput id="lastName" labelText={ $t('form.labels.lastName') } bind:value={lastName}></TextInput>
                    </Row>
                    <Row>
                        <TextInput id="mail" labelText={ $t('form.labels.mail') } bind:value={mail}></TextInput>
                    </Row>
                    <Row>
                        <DatePicker></DatePicker>
                    </Row>
                    <Row>
                        <PasswordInput labelText={ $t('form.labels.password') } {type} {value} on:keyup={changePasswordType}
                                       on:blur={setToTextType}
                                       on:focus={setToPasswordType}></PasswordInput>
                    </Row>
                    <Row>
                        <Button id="submitForm" on:click={clickOnForbiddenButton}>{ $t('form.submit.button') }</Button>
                    </Row>
                </Column>
                <Column>
                    <LookMorty/>
                </Column>
            </Row>
        </Grid>
    {/if}

    {#if clicked}
        <Surprise on:closeSpookyFrame={onCloseSpookyFrame}/>
    {/if}
</main>

<FooterBanner/>

<style lang="scss">
  main {
    width: 100vw;
    height: 100vh;

    .theme-container {
      display: block;
      min-width: 8vw;
      max-width: 20vw;
      padding-bottom: 3rem;
      margin-top: 1em;
      margin-left: 1.3em;
    }
  }
</style>
