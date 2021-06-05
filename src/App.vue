<template>
  <div id="app" class="bg-white">
    <tl-header />
    <main>
      <router-view/>
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
