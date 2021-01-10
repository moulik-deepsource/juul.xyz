<template functional>
  <div class="hero flex justify-center py-8 shadow-md mb-8 bg-gradient-to-tr from-pink-400 to-yellow-400">
    <p class="text-4xl font-semibold text-gray-50">{{ props.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.hero {
  min-height: 1.875rem;
  width: 100%;
}
</style>
