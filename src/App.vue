<template>
  <div id="app" class="bg-white">
    <tl-header />
    <main class="w-full h-full">
      <div class="container mx-auto flex items-center px-5 md:px-8 py-14 bg-gray-100 rounded-tr-3xl rounded-bl-3xl">
        <router-view/>
      </div>
    </main>
    <tl-footer />
  </div>
</template>

<script>
import TlHeader from '@/components/TlHeader'
import TlFooter from '@/components/TlFooter'

export default {
  components: {
    TlHeader,
    TlFooter
  }
}
</script>
