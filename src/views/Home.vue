<template>
  <div class="max-w-lg mx-auto">
    <div class="text-center mb-3 text-tlPrimary ">
      <h2 class="text-3xl font-bold mb-6">
        <span class="border-b-4 border-tlPrimary pb-4">{{ $t('home.title') }}</span>
      </h2>
      <p class="mt-12">
        {{ $t('home.description') }}
      </p>
    </div>

    <div class="text-center mt-12 text-tlPrimary">
      <a href="/registro">
        {{ $t('home.registerText') }}
      </a>
    </div>

    <div class="text-right mt-12">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent uppercase text-tlTertiary text-base font-bold hover:bg-white">
      {{ $t('home.textBtnContinue') }}
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
