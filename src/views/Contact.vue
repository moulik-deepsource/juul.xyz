<template>
  <div class="contact container flex flex-col justify-center items-center mt-40">
    <h1 class="text-5xl mb-10 font-bold">Find me here.</h1>

    <div class="bg-black p-5 shadow-2xl">
      <div class="bg-white p-1">
        <div class="flex flex-col text-3xl bg-black text-white p-10">
          <a
              class="hover:underline ease-in-out"
              href="https://github.com/martin-juul"
              target="_blank"
              rel="noopener nofollow"
          >github.com/martin-juul</a>

          <a
              class="hover:underline ease-in-out"
              href="https://www.linkedin.com/in/martin-juul"
              target="_blank"
              rel="noopener nofollow"
          >linkedin.com/in/martin-juul</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  mounted() {
    document.title = 'Contact | Juul';
    document.querySelector('meta[name="description"]').setAttribute('content', 'Where to find me');
  },
};
</script>
