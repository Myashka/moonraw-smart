<script context="module">
  // retain module scoped expansion state for each tree node
  const _expansionState = {
    /* treeNodeId: expanded <boolean> */
  };

  import IconPage from '~icons/ph/book-open-light';
  import IconClosedBook from '~icons/ph/book-fill';
  import IconOpenedBook from '~icons/ph/book-light';
  import IconPlus from '~icons/ph/plus-bold';
  import IconMinus from '~icons/ph/minus-bold';

  import { push } from 'svelte-spa-router';
  import { Router, Route, Link, navigate } from 'svelte-navigator';
  
</script>

<script>
  import { fade, slide } from 'svelte/transition';
  export let tree;
  const { label, routeLink, nooffset, children } = tree;

  let expanded = _expansionState[label] || false;
  const toggleExpansion = () => {
    expanded = _expansionState[label] = !expanded;
  };
  $: arrowDown = expanded;
  $: expanded_icon = expanded ? '-' : '+';
</script>

<ul class="select-none list-none pl-2 scrollbar-hide">
  <!-- transition:slide -->
  <li>
    {#if children}
      <div class="py-2">
        <!-- +/- -->
        {#if expanded}
          <!-- - -->
          <div class="drawer flex">
            <div class=" cursor-pointer" on:click={toggleExpansion}><IconMinus class="w-5" /></div>
            <div class="element flex flex-1  ml-2">
              <div class="" on:click={toggleExpansion}><IconOpenedBook class="w-5" /></div>
              <div class="ml-[2px]     cursor-pointer   pr-1 text-sm" on:click={() => navigate('/' + routeLink)}>{label}</div>
            </div>
          </div>
          {#each children as child}
            <svelte:self tree={child} />
          {/each}
        {:else}
          <!-- + -->
          <div class="drawer flex">
            <div class=" cursor-pointer" on:click={toggleExpansion}><IconPlus class="w-5  mt-[4px]" /></div>
            <div class="element flex flex-1 ml-2">
              <div class="" on:click={toggleExpansion}><IconClosedBook class="w-5" /></div>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div class="ml-[2px]  cursor-pointer   pr-1 text-sm" on:click={() => navigate('/' + routeLink)}>{label}</div>
            </div>
          </div>
        {/if}
      </div>
    {:else}
      <div class={nooffset === true ? 'pl-5' : 'pl-10'}>
        <div class="element my-2 flex flex-1">
          <div class=""><IconPage class="w-5" /></div>
          <div class="ml-[2px]  cursor-pointer  flex-1  pr-1 text-sm" on:click={() => navigate('/' + routeLink)}>{label}</div>
        </div>
      </div>
    {/if}
  </li>
</ul>

<style>
  .element {
    /* @apply border-b border-dotted border-pink-900 bg-gradient-to-r from-zinc-800 to-pink-900/20; */
    /* @apply rounded-md bg-zinc-700 border-none drop-shadow-md px-2 py-1; */
    @apply rounded-md bg-[#444653] border-[0px] drop-shadow-md px-2 py-1;
  }
</style>
