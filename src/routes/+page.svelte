<script lang="ts">
  import { onMount } from "svelte";
  import showdown from "showdown";
  function detectCommandKey(event: KeyboardEvent) {
    if (event.key === ":") {
    }
  }
  let readme: HTMLDivElement;
  onMount(async () => {
    let converter = new showdown.Converter();
    const res = await fetch(
      "https://raw.githubusercontent.com/boredcodebyk/boredcodebyk/main/README.md"
    );
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const txt =await res.text();
    readme.innerHTML = converter.makeHtml(txt);
  });
</script>

<div class="container-fluid">
    <h1>Hello</h1>
    <h2>I'm Kaushik</h2>
    <a href="https://github.com/boredcodebyk"><h3>@boredcodebyk</h3></a>
  
  <div id="#about" bind:this={readme}></div>
</div>

<svelte:head>
  <title>boredcodebyk</title>
</svelte:head>