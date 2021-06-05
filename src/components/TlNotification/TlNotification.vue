<template>
  <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-red-600 capitalize">
                  {{title}}
                </p>
                <p class="mt-1 text-sm text-tlPrimary">
                  {{message}}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button @click="updateValue" class="bg-white rounded-md inline-flex text-tlPrimary hover:text-tlPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TlNotification',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: null
    },
    title: {
      type: String,
      required: true,
      default: null
    },
    message: {
      type: String,
      required: true,
      default: null
    }
  },
  methods: {
    updateValue: function () {
      this.$emit('changeNotification')
    }
  }
}
</script>
