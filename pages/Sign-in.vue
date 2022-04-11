
<template>
  <div
    class="
      min-h-full
      flex
      items-center
      justify-center
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST" @submit="onSubmit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="">Username</label>
            <input
              id="username"
              v-model="username"
              name="username"
              type="text"
              required=""
              class="
                appearance-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-lg
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
                mb-5
              "
              placeholder="username"
            />
          </div>
          <div>
            <label for="email-address" class="">Email address</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              required=""
              class="
                appearance-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-lg
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
                mb-5
              "
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="">Password</label>
            <input
              id="password1"
              v-model="password1"
              name="password1"
              type="password"
              required=""
              class="
                appearance-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-lg
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
                mb-5
              "
              placeholder="Password"
            />
          </div>
          <div>
            <label for="password" class="">Re-enter Password</label>
            <input
              id="password2"
              v-model="password2"
              name="password2"
              type="password"
              required=""
              class="
                appearance-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-lg
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
                mb-5
              "
              placeholder="Re-enter Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            Sign in
          </button>

          <NuxtLink to="/login">
            <h1 class="text-center mt-8 hover:text-cyan-600">
              Already have account?
            </h1>
          </NuxtLink>
          <NuxtLink to="/">
            <h1 class="text-center mt-2 hover:text-red-500">
              Cancel
            </h1>
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "vas",
      email: "vas@gmail.com",
      password1: "123",
      password2: "123",
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const user = {
        username: this.username,
        email: this.email,
        password1: this.password1,
        password2: this.password2,
      };
      const response = await this.$store.dispatch("createUser", user);
      console.log(response);
    },
  },
};
</script>