<script lang="ts">
  // import Index from "./lib/Index.svelte";
  // import DoThat from "./lib/DoThat.svelte";
  // import Marked from "./lib/Marked.svelte";
  import Quill from './lib/Quill.svelte';
  import NewQuill from './lib/newQuill.svelte';
  // import Fuck from "./lib/Fuck.svelte";
  import './assets/some.css';

  import { Router, Route, Link, navigate } from 'svelte-navigator';

  import { onMount } from 'svelte';

  import Flip from './lib/Flip.svelte';

  import TreeView from './lib/TreeView.svelte';
  import { tree } from './lib/titles';
  import Test from './lib/Test.svelte';

  let child;

  let myHtml = '';
  let oglav = '';
  let chapter1 = '';
  let question11 = '';
  let question12 = '';
  let chapter3 = '';

  let chapters = {};

  let canvas;

  onMount(async () => {
    // const response = await fetch("/src/assets/war.html");
    // const response = await fetch('/src/assets/some.html');
    // myHtml = await response.text();
    oglav = await (await fetch('/src/assets/html/oglav.html')).text();

    for (let i = 1; i <= 14; i++) {
      // do something with each element in the array
      // console.log(myArray[i]);
      chapters[`chapter${i}`] = await (await fetch(`/src/assets/test_html/${i + 1}_chapter.html`)).text();
    }
    console.log(chapters);

    // chapter1 = await (await fetch('/src/assets/html/chapter1.html')).text();
    question11 = await (await fetch('/src/assets/html/question11.html')).text();
    question12 = await (await fetch('/src/assets/html/question12.html')).text();

    function removeFooterPromo() {
      let iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.addEventListener('load', () => {
          console.log(iframe);
          const iframeDoc = iframe['contentDocument'];
          console.log(iframeDoc);
          // const footerPromo = iframeDoc.querySelector('.footer');
          // if (footerPromo) {
          //   footerPromo.remove();
          // }
        });
      }
    }
    removeFooterPromo();
    // navigate('/test')

    // chapter2 = await (await fetch('/src/assets/html/chapter2.html')).text();
    // question21 = await (await fetch('/src/assets/html/question21.html')).text();

    // question22 = await (await fetch('/src/assets/html/question12.html')).text();
    // chapter2 = await (await fetch('/src/assets/html/chapter2.html')).text();
    // chapter3 = await (await fetch('/src/assets/html/chapter3.html')).text();
    // chapter4 = await (await fetch('/src/assets/html/chapter4.html')).text();
    // chapter1 = await (await fetch('/src/assets/html/chapter1.html')).text();
    // chapter1 = await (await fetch('/src/assets/html/chapter1.html')).text();
    // chapter1 = await (await fetch('/src/assets/html/chapter1.html')).text();
    // chapter1 = await (await fetch('/src/assets/html/chapter1.html')).text();
    // chapter1 = await (await fetch('/src/assets/html/chapter1.html')).text();
    // chapter1 = await (await fetch('/src/assets/html/chapter1.html')).text();
    // chapter3 = await (await fetch('/src/assets/html/chapter3.html')).text();
  });

  // function closeDrawer(event) {
  // Drawer closer
  //   let target = event.target;
  //   console.log(target);
  //   while (target != null && !target.classList.contains('drawer')) {
  //     target = target.parentElement;
  //     console.log(target);
  //   }
  //   if (target === null) {
  //     child.closeDrawer();
  //   }
  // }
</script>

<Router>
  <main class="  !text-white">
    <div class="flex h-screen min-h-screen scrollbar-hide">
      <!-- Drawer -->

      <div class="min-h-screen w-1/4 overflow-y-auto border-r-[1px] border-solid border-black border-opacity-10 bg-[#202123] p-0 pr-4 text-white shadow-[-1px_0_6px_-2px_rgba(0,0,0,0.1)] scrollbar-hide " transition:fly={{ x: '-100%' }}>
        <div class="flex justify-center pt-4 pb-2">
          <img src="/main_logo.png" alt="" />
        </div>
        {#each tree as branch}
          <TreeView tree={branch} />
        {/each}
      </div>

      <!-- </div>А -->

      <!-- Routes -->
      <div class="flex-1 overflow-y-auto p-8 !text-white scrollbar-hide">
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/oglav">
          {@html oglav}
        </Route>
        <Route path="/chapter1">
          {@html chapters['chapter1']}
        </Route>
        <Route path="/chapter2">
          {@html chapters['chapter2']}
        </Route>
        <Route path="/question1">
          <script src="https://yastatic.net/s3/frontend/forms/_/embed.js"></script>
          <iframe src="https://forms.yandex.ru/u/64118cb6c417f32853f00c3b/?iframe=1" frameborder="0" name="ya-form-64118cb6c417f32853f00c3b" width="650" class="m-auto p-2 rounded-sm" />
        </Route>
        <Route path="/chapter3">
          {@html chapters['chapter3']}
        </Route>
        <Route path="/chapter4">
          {@html chapters['chapter4']}
        </Route>
        <Route path="/chapter5">
          {@html chapters['chapter5']}
        </Route>
        <Route path="/question11">
          {@html question11}
        </Route>
        <Route path="/question12">
          {@html question12}
        </Route>

        <div class="relative bottom-0">
          <div class="flex justify-center space-x-12">
            <button on:click={() => navigate('/chapter1')} class="rounded-xl bg-[#72768c] px-4 py-2 font-sans text-3xl duration-200 hover:bg-[#414350]">←</button>
            <button on:click={() => navigate('/chapter2')} class="rounded-xl bg-[#72768c] px-4 py-2 font-sans text-3xl duration-200 hover:bg-[#414350]">→</button>
          </div>
        </div>

        <!-- <Route path="/test1">
          <Test1 />
        </Route> -->
        <!-- <Route path="/">
          <Flip/>
        </Route> -->
      </div>
    </div>
  </main>
</Router>

<style>
</style>
