<script>
  export let href;
  export let text;
</script>

<style>
  .link {
    width: min-content;
    padding: 1em;
    text-decoration: none;
    background-color: var(--dark);
    color: var(--light);
    margin-top: 1em;
  }

  .link:hover {
    background-color: var(--grey);
    text-decoration: underline;
  }
</style>

<a class="link" href={href}>{text}</a>
