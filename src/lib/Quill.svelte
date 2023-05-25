<script>
  import { onMount } from "svelte";
  import Quill from "quill";

  let editor;
  let handleClick;

  let quill = null;


  export let toolbarOptions = [
    [{ header: [] }],
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["blockquote", "link", "image", "video"],
    [{ font: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    ["clean"],
  ];

  onMount(async () => {
    const { default: Quill } = await import("quill");
    const { default: ImageResize } = await import("quill-image-resize");

    Quill.register("modules/imageResize", ImageResize);

    let quill = new Quill(editor, {
      modules: {
        toolbar: toolbarOptions,
        imageResize: {
          displaySize: true,
        },
      },
      theme: "snow",
      // readOnly: true,
      placeholder: "Write your story...",
    });

    quill.setText('niggas');

    let handleClick = function () {
      
      let text = quill.getText();
      alert(text);
    };
  });
</script>

<div>
  <button class="btn btn-blue" on:click={handleClick}> Fucking button </button>
</div>

<div class="editor-wrapper">
  <div bind:this={editor} />
</div>

<style>
  @import "https://cdn.quilljs.com/1.3.6/quill.snow.css";

  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>
