<template>
  <div class="">
    <NuxtLink to="/login"
      ><button
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
        Login
      </button></NuxtLink
    >
    <h1 @click="onClick">Test</h1>
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import dashboard from "../../e-commerce/src/components/dashboard.vue";
export default {
  components: { dashboard },
  name: "IndexPage",
  methods: {
    async onClick() {
      let data = {
          name: "One plus 10 pro",
          price: 75000,
          quantity: 10,
          categoryId: 1,
          description: "Snapdragon 8 Gen processor"
      };
      const res = await this.$store.dispatch("createProduct", data);
      console.log(res);
    },
  },
};
</script>
