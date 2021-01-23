<template>
  <div class="contact container flex flex-col justify-center items-center">
    <h1 class="text-5xl mb-10 font-bold">Contact</h1>

    <ContactForm />

    <div class="flex mt-10">
      <a
        href="https://github.com/martin-juul"
        target="_blank"
        rel="nofollow noreferrer"
      >
        <Github />
      </a>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
import { Github } from "@icon-park/vue";

export default {
  name: "Contact",
  components: {
    ContactForm,
    Github,
  },
  mounted() {
    document.title = "Contact | Juul";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Where to find me");
  },
};
</script>
