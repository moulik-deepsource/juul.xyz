<template functional>
  <form
    action="https://send.pageclip.co/XXb20PtxGWiDxWkp93Lvw20mXhmnIUpd/contact-form"
    class="pageclip-form flex flex-col w-full justify-center"
    method="post"
  >
    <label for="email-input">E-mail</label>
    <input
      id="email-input"
      class="p-2 border-2 border-gray-200 rounded"
      type="email"
      name="email"
      placeholder="E-Mail Address"
      required
    />

    <label for="subject-input" class="mt-2">Subject</label>
    <input
      id="subject-input"
      class="p-2 border-2 border-gray-200 rounded"
      type="text"
      name="subject"
      placeholder="Hello Martin"
      autocomplete="off"
      required
    />

    <label for="message-textarea" class="mt-2">Message</label>
    <textarea
      id="message-textarea"
      class="p-2 border-2 border-gray-200 rounded"
      name="body"
      minlength="200"
      autocomplete="off"
      required
    ></textarea>

    <button
      type="submit"
      class="pageclip-form__submit submit-btn mt-2 hover:bg-blue-50 ease-in-out"
    >
      <span>Send</span>
    </button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style>
.submit-btn {
  border: double 2px transparent;
  background-image: linear-gradient(#ffffff, #ffffff),
    linear-gradient(270deg, #00c5d7, #b95dd7 50%, #ffb367 100%);
  background-clip: content-box, border-box;
  background-repeat: no-repeat;
  background-size: 100% 100%, 100% 200%;
  background-position: 0 0, 0 100%;
  background-origin: padding-box, border-box;
  max-width: 50px;
  border-radius: 10%;
  align-self: center;
  padding: 2px;
}
</style>
