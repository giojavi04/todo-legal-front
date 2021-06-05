<template>
  <footer
    class="w-full flex flex-wrap items-center justify-center px-2 py-4 text-tlPrimary"
  >
    <a href="https://todo.legal/" target="_blank">
      <p v-html="$t('footer')"></p>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'TlFooter'
}
</script>
