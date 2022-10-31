<script>
  const TEXT_TYPE = 'text';
  const PWD_TYPE = 'password';
  const NAME = 'passwordInput'

  let value = '';
  let type = PWD_TYPE;

  const changePasswordType = () => {
    type === PWD_TYPE ? setToTextType() : setToPasswordType();
  };

  const setToTextType = () => type = TEXT_TYPE;
  const setToPasswordType = () => type = PWD_TYPE;
</script>

<label for={NAME}>Mot de passe:</label>
<input id={NAME} {type} {value} autocomplete="new-password" on:keyup={changePasswordType} on:blur={setToTextType} on:focus={setToPasswordType} />

<style></style>
