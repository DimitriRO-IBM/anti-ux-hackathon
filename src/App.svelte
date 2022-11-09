<script>
  import { onMount } from 'svelte';
  import Surprise from './lib/Surprise.svelte';
  import FooterBanner from './lib/FooterBanner.svelte';

  import {
    Grid,
    Row,
    Column,
    TextInput,
    PasswordInput,
    Theme,
    DatePicker,
    DatePickerInput,
  } from 'carbon-components-svelte';
  import { Button, Modal } from "carbon-components-svelte";

  import { t, locale, locales } from './i18n';

  // Create a locale specific timestamp
  $: time = new Date().toLocaleDateString($locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const TEXT_TYPE = 'text';
  const PWD_TYPE = 'password';
  const NAME = 'passwordInput';

  let firstName = '';
  let lastName = '';
  let mail = '';
  let dateOfBirth = '';
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
</script>

<main>
    <div class="theme-container">
        <Theme render="select" />
    </div>
    <Grid padding>
        <Row>
            <TextInput id="firstName" labelText={ $t('form.labels.firstName') } bind:value={firstName}></TextInput>
        </Row>
        <Row>
            <TextInput id="lastName" labelText={ $t('form.labels.lastName') } bind:value={lastName}></TextInput>
        </Row>
        <Row>
            <TextInput id="mail" labelText={ $t('form.labels.mail') } bind:value={mail}></TextInput>
        </Row>
        <Row>
            <DatePicker datePickerType="single" on:change>
                <DatePickerInput id="dateOfBirth" labelText={ $t('form.labels.dateOfBirth') } placeholder="mm/dd/yyyy" bind:value={dateOfBirth} />
            </DatePicker>
        </Row>
        <Row>
            <PasswordInput labelText={ $t('form.labels.password') } {type} {value} on:keyup={changePasswordType} on:blur={setToTextType}
                           on:focus={setToPasswordType}></PasswordInput>
        </Row>
        <Row>
            <Button id="submitForm" on:click={clickOnForbiddenButton}>{ $t('form.submit.button') }</Button>
        </Row>
    </Grid>

    {#if clicked}
        <Surprise on:closeSpookyFrame={onCloseSpookyFrame}/>
    {/if}
</main>

<FooterBanner />

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

    :global(.bx--grid) {
        width: 50%;
    }
  }
</style>
