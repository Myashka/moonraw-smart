<script>
  let name = '';
  let email = '';

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    console.log(formData)

    // const response = await fetch('https://docs.google.com/forms/d/e/{FORM_ID}/formResponse', {
    //   method: 'POST',
    //   body: formData
    // });

    // if (response.ok) {
    //   // Handle successful response
    // } else {
    //   // Handle error response
    // }
  }
</script>

<form on:submit={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} />
  </label>
  <label>
    Email:
    <input type="email" bind:value={email} />
  </label>
  <button type="submit">Submit</button>
</form>
