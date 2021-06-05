<template>
  <div class="max-w-lg mx-auto">
    <div class="text-center mb-3 text-tlPrimary">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-18 w-12 mx-auto text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 class="text-3xl font-bold mb-6">
        <span class="border-tlPrimary">{{ $t('user.title') }}</span>
      </h2>
    </div>

    <div class="mt-6 bg-white rounded-tr-3xl p-6 rounded-bl-3xl">
      <h3 class="text-2xl text-tlPrimary font-bold mb-12">
        <span class="border-b-2 border-tlPrimary pb-3">{{ $t('user.subTitle') }}</span>
      </h3>
      <h5 class="text-l text-tlPrimary mb-1">{{ $t('user.fullName') }}</h5>
      <p class="mb-4">{{ `${user.name} ${user.last_name}` }}</p>
      <h5 class="text-l text-tlPrimary mb-1">{{ $t('user.dni') }}</h5>
      <p class="mb-4">{{ user.username }}</p>
    </div>

    <div class="text-right mt-12">
      <button type="button" @click="logout" class="inline-flex items-center px-4 py-2 border border-transparent uppercase text-tlTertiary text-base font-bold hover:bg-white">
      {{ $t('user.textBtnFinish') }}
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      user: null
    }
  },
  created () {
    const userLocalStorage = localStorage.getItem('user')
    if (!userLocalStorage) this.$router.push('/')
    this.user = JSON.parse(userLocalStorage)
  },
  methods: {
    logout: function () {
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
}
</script>
