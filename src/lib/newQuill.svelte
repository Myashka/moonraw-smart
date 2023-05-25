<script>
  import { onMount } from "svelte";
  import Quill from "quill";
  import editJsonFile from "edit-json-file";

  let quill = null;

  function handleClick() {
    // const editJsonFile = require("edit-json-file");
    let text = quill.getContents();
    alert(JSON.stringify(text));

  }

  onMount(() => {
    let container = document.getElementById("editor");
    // @ts-ignore
    quill = new Quill(container, {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["link", "code-block"],
        ],
      },
      placeholder: "Type something...",
      theme: "snow", // or 'bubble'
    });
  });
</script>

<svelte:head>
  <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>
<main>
  <h1>Hey</h1>
  <div id="editor" />
  <button on:click={handleClick}>click</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  #editor {
    height: 350px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
