<script>
  import Github from "./Github.svelte";
  import LinkedIn from "./LinkedIn.svelte";
</script>

<style>
  a {
    text-decoration: underline;
  }
</style>

<footer class="bg-gray-900">
  <div class="container mx-auto py-8 px-8 flex flex-col xsm:items-center xsm:space-y-6 sm:justify-between sm:flex-row">
    <div class="flex flex-col space-y-1 justify-center items-center text-center text-xs md:text-left md:items-start">
      <p>
        This site was built using
        <a href="https://svelte.dev/">Svelte</a>
        and
        <a href="https://tailwindcss.com/">Tailwind CSS</a>.
      </p>
      <p>Its source code is available on <a href="https://github.com/dakotalillie/dakotadacoda-site">Github</a>.</p>
      <p>It is hosted on <a href="https://pages.github.com/">Github Pages</a>.</p>
      <p>
        Form submissions are handled by a
        <a href="https://aws.amazon.com/lambda/">Lambda</a>
        written in
        <a href="https://golang.org/">Golang</a>.
      </p>
      <p>
        The source code for that is also available on
        <a href="https://github.com/dakotalillie/dakotadacoda-svc">Github</a>.
      </p>
    </div>
    <div class="flex flex-row items-center space-x-6">
      <Github />
      <LinkedIn />
    </div>
  </div>
</footer>
