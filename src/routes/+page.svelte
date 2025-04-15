<script>
  import { projects } from "$lib";
</script>

<div class="h-dvh flex flex-col justify-center items-center bg-amber-900">
  <div
    class="min-w-md max-w-xl prose prose-headings:text-amber-100 prose-a:text-amber-100 prose-a:no-underline bg-amber-700 text-amber-100 p-10"
  >
    <h1>Kaushik Nath</h1>
    <p>
      Hello, I'm Kaushik. I'm a Statistics student currently pursing masters
      degree.
    </p>
    <nav>
      <a href="https://github.com/boredcodebyk">[github]</a>
      <a href="https://boredblog.pages.dev/">[blog]</a>
      <a href="https://boredcodebyk.bsky.social">[bluesky]</a>
    </nav>
    <h2>Projects</h2>
    {#if projects.length > 0}
      {#each projects as project}{/each}
    {:else}
      <p>Empty</p>
    {/if}
  </div>
</div>
