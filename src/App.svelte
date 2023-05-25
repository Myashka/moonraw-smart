<script lang="ts">
  import { onMount } from 'svelte';
  import { tree } from '../src/lib/tree';

  import IconClosedBook from '~icons/ph/book-light';
  import IconOpenedBook from '~icons/ph/book-fill';
  import IconBookOpen from '~icons/majesticons/book-open';
  import IconBookOpenLine from '~icons/majesticons/book-open-line';
  import IconQuestionLight from '~icons/ph/seal-question-light';
  import IconQuestionFill from '~icons/ph/seal-question-fill';

  import IconArrowLeft from '~icons/ph/arrow-square-left-fill';
  import IconArrowRight from '~icons/ph/arrow-square-right-fill';

  import Test1 from '../src/assets/test/test1.svelte';
  import { children } from 'svelte/internal';
  import { navigate } from 'svelte-navigator';

  let currentPage = localStorage.getItem('currentPage') || 'intro';

  const getPageContent = async (page) => {
    if (page.includes('test1')) {
      return;
    }
    const response = await fetch(`../src/assets/html/${page}.html`);
    console.log(response);
    return response.text();
  };

  let pageContent = '';

  // Load page content when currentPage changes
  $: {
    if (!currentPage.startsWith('test')) {
      getPageContent(currentPage).then((content) => {
        pageContent = content;
      });
    }
  }

  // Listen for click events on the links in the left panel
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    currentPage = event.target.getAttribute('href'); // Update the currentPage variable
    localStorage.setItem('currentPage', currentPage);

    console.log(currentPage);
  };

  onMount(() => {
    // Attach click event listeners to all the links in the left panel
    const links = document.querySelectorAll('.left-panel a');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });
  });

  const flattenTree = (tree) => {
    return tree.reduce((acc, node) => {
      acc.push(node.routeLink);
      if (node.children && node.children.length) {
        acc = [...acc, ...flattenTree(node.children)];
      }
      return acc;
    }, []);
  };

  function leftButton() {
    const treeLinks = flattenTree(tree); // create the array of routeLinks
    const currentPageIndex = treeLinks.indexOf(currentPage);
    const previousValue = treeLinks[currentPageIndex - 1];
    currentPage = previousValue;

    if (!currentPage) {
      currentPage = 'intro';
    }

    localStorage.setItem('currentPage', currentPage);

    
  }

  function rightButton() {
    const treeLinks = flattenTree(tree); // create the array of routeLinks
    const currentPageIndex = treeLinks.indexOf(currentPage);
    const nextValue = treeLinks[currentPageIndex + 1];
    currentPage = nextValue;
    
    if (!currentPage) {
      currentPage = '';
    }

    localStorage.setItem('currentPage', currentPage);
  }
</script>

<main class="  !text-white">
  <div class="flex h-screen min-h-screen scrollbar-hide">
    <!-- Drawer -->

    <div class="min-h-screen w-1/4 overflow-y-auto border-r-[1px] border-solid border-black border-opacity-10 bg-[#202123] p-0 pr-2 pl-2 !text-white shadow-[-1px_0_6px_-2px_rgba(0,0,0,0.1)] scrollbar-hide ">
      <div class="flex justify-center pt-4 pb-2">
        <!-- <img src="/main_logo.png" alt="" /> -->
        <div class="rounded-3xl bg-[#444653] ">
          <img src="/logo.png" alt="" class="scale-105" />
          <div class="mx-auto w-fit pb-2 text-xl font-bold">ОБЩАЯ ТАКТИКА</div>
        </div>
      </div>

      <div class="left-panel">
        <!-- Table of contents -->
        {#each tree as node}
          <ul>
            <div class="mt-2 flex rounded-md border-[0px] bg-[#444653] drop-shadow-md">
              <div class="pt-[2px]">
                {#if currentPage === node.routeLink}
                  <IconOpenedBook class="w-5" />
                {:else}
                  <IconClosedBook class="w-5" />
                {/if}
              </div>
              <li class="ml-1"><a href={node.routeLink}>{node.label}</a></li>
            </div>

            {#if node.children}
              {#each node.children as child}
                {#if child.children}
                  <ul class="ml-8 ">
                    <!-- {#each node.children as child} -->
                    <div class="mt-2 flex rounded-md border-[0px] bg-[#444653] drop-shadow-md">
                      <div class="pt-[2px]">
                        {#if currentPage === child.routeLink}
                          {#if child.routeLink.startsWith('test')}
                            <IconQuestionFill class="w-5" />
                          {:else}
                            <IconBookOpen class="w-5" />
                          {/if}
                        {:else if child.routeLink.startsWith('test')}
                          <IconQuestionLight class="w-5" />
                        {:else}
                          <IconBookOpenLine class="w-5" />
                        {/if}
                      </div>
                      <li class="ml-1"><a href={child.routeLink}>{child.label}</a></li>
                    </div>

                    {#if child.children}
                      {#each child.children as grandchild}
                        <ul class="ml-8 ">
                          <!-- {#each node.children as child} -->
                          <div class="mt-2 flex rounded-md border-[0px] bg-[#444653] drop-shadow-md">
                            <div class="pt-[2px]">
                              {#if currentPage === grandchild.routeLink}
                                {#if grandchild.routeLink.startsWith('test')}
                                  <IconQuestionFill class="w-5" />
                                {:else}
                                  <IconBookOpen class="w-5" />
                                {/if}
                              {:else if grandchild.routeLink.startsWith('test')}
                                <IconQuestionLight class="w-5" />
                              {:else}
                                <IconBookOpenLine class="w-5" />
                              {/if}
                            </div>
                            <li class="ml-1"><a href={grandchild.routeLink}>{grandchild.label}</a></li>
                          </div>
                          <!-- {/each} -->
                        </ul>
                      {/each}
                    {/if}
                    <!-- {/each} -->
                  </ul>
                {/if}
              {/each}
            {/if}
          </ul>
        {/each}
      </div>
    </div>
    <div class="flex flex-1 flex-col justify-between overflow-y-auto p-8 !text-white scrollbar-hide">
      <div class="right-panel ">
        {#if currentPage.startsWith('test1')}
          <Test1 />
        {:else if currentPage.startsWith('test2')}
          <!-- <Test2 /> -->
        {:else}
          {@html pageContent}
        {/if}
      </div>
      <div class="mt-4 flex justify-center space-x-12">
        <button on:click={leftButton} class="rounded-xl bg-[#72768c] px-4 py-2 font-sans text-3xl duration-200 hover:bg-[#414350]">
          <div class="flex rounded-md border-[0px]">
            <div class="pt-[2px] mr-2">
              <IconArrowLeft class="w-8" />
            </div>
            <div>предыдущая страница</div>
          </div>
        </button>
        <button on:click={rightButton} class="rounded-xl bg-[#72768c] px-4 py-2 font-sans text-3xl duration-200 hover:bg-[#414350]">
          <div class="flex rounded-md border-[0px]">
            <div>следующая страница</div>
            <div class="pt-[2px] ml-2">
              <IconArrowRight class="w-8" />
            </div>
          </div>
        </button>
      </div>
      <!-- <div>hello</div> -->
    </div>
    <!-- <div class="flex flex-col justify-between screen-h flex-1 overflow-y-auto p-8 !text-white scrollbar-hide">
      <header class="h-10 bg-red-500">Header</header>
      <main class="mb-auto bg-green-500">Content 
    
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        
      </main>
      <footer class="h-10 bg-blue-500">Footer</footer>
    </div> -->
  </div>
</main>
