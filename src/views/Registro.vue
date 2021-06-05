<template>
  <div class="max-w-lg mx-auto">
    <div class="text-center mb-3 text-tlPrimary ">
      <h2 class="text-3xl font-bold mb-6">
        <span class="border-b-4 border-tlPrimary pb-4">{{ $t('register.title') }}</span>
      </h2>
      <p class="mt-12">
        {{ $t('register.description') }}
      </p>
    </div>

    <form @submit.prevent="processForm">
      <div class="mt-6">
        <label for="username" class="block text-sm font-medium text-tlPrimary mb-2">{{ $t('form.dni') }}</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input type="text" name="username" id="username" v-model="username" class="block w-full py-4 sm:text-sm text-tlPrimary rounded-md border-0 border-b-4 bg-gray-300 border-transparent focus:ring-0 focus:border-tlSecondary focus:bg-white" autofocus required/>
        </div>
      </div>

      <div class="mt-6">
        <label for="password" class="block text-sm font-medium text-tlPrimary mb-2">{{ $t('form.password') }}</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input type="password" name="password" id="password" v-model="password" class="block w-full py-4 sm:text-sm text-tlPrimary rounded-md border-0 border-b-4 bg-gray-300 border-transparent focus:ring-0 focus:border-tlSecondary focus:bg-white" required />
        </div>
      </div>

      <div class="mt-6">
        <label for="repeatPassword" class="block text-sm font-medium text-tlPrimary mb-2">{{ $t('form.repeatPassword') }}</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input type="password" name="repeatPassword" id="repeatPassword" v-model="repeatPassword" class="block w-full py-4 sm:text-sm text-tlPrimary rounded-md border-0 border-b-4 bg-gray-300 border-transparent focus:ring-0 focus:border-tlSecondary focus:bg-white" required />
        </div>
      </div>

      <div class="text-right mt-12">
        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent uppercase text-tlTertiary text-base font-bold hover:bg-white">
        {{ $t('register.textBtnContinue') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </form>
    <tl-notification :show="notification.show" :title="notification.title" :message="notification.message" @changeNotification="toggleNotification"/>
  </div>
</template>

<script>
import { saveUserApi } from '../services/apiUser'
import TlNotification from '@/components/TlNotification'

export default {
  name: 'Registro',
  components: {
    TlNotification
  },
  data: function () {
    return {
      username: '',
      password: '',
      repeatPassword: '',
      notification: {
        show: false,
        title: '',
        message: ''
      }
    }
  },
  methods: {
    processForm: async function () {
      if (this.password !== this.repeatPassword) {
        this.notification.show = !this.notification.show
        this.notification.title = 'Validación fallida'
        this.notification.message = 'Las constraseñas no coinciden'
        return
      }

      const payload = {
        username: this.username,
        password: this.password,
        name: '',
        last_name: '',
        email: '',
        phone_number: ''
      }
      const data = await saveUserApi(payload)
      if (data.status === 'fail') {
        this.notification.show = !this.notification.show
        this.notification.title = data.status
        this.notification.message = data.message
      } else {
        localStorage.setItem('user', JSON.stringify(data.data))
        this.$router.push('/user')
      }
    },
    toggleNotification: function () {
      this.notification.show = !this.notification.show
    }
  }
}
</script>
