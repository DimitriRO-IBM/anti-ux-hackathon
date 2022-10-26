<script>
  const TEXT_TYPE = 'text';
  const PWD_TYPE = 'password';

  let value = '';
  let type = PWD_TYPE;

  const changePasswordType = () => {
    type === PWD_TYPE ? setToTextType() : setToPasswordType();
  };

  const setToTextType = () => type = TEXT_TYPE;
  const setToPasswordType = () => type = PWD_TYPE;
</script>

<style></style>

<form class="inputPassword">
    <label>
        Mot de passe:
        <input {type} {value} autocomplete="new-password" on:keyup={changePasswordType} on:blur={setToTextType} on:focus={setToPasswordType} />
    </label>
</form>
