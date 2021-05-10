<template>
  <main
    flex="~ col"
    align="items-center"
    justify="content-center"
    p="4"
    class="space-y-8"
  >
    <div flex="1">
      <div
        flex="~ col"
        space="y-4"
        align="items-center"
        justify="content-center"
      >
        <a href="/" title="Home">
          <img
            class="w-16 h-16"
            src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
          />
        </a>
        <h1 text="4xl" font="">Login</h1>
      </div>
    </div>

    <form action="" flex="~ col" class="space-y-4" w="full md:90">
      <div flex="~ col" class="space-y-2">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          ring="1 black"
          border="none rounded-md"
        />
      </div>
      <div flex="~ col" class="space-y-2">
        <div flex="~" justify="content-between" class="space-x-1">
          <label for="password">Password</label>
          <a
            href="/users/password/new"
            class="underline text-gray-400 hover:(text-black)"
            >Forgot your password?</a
          >
        </div>
        <input
          type="password"
          name="password"
          id="password"
          ring="1 black"
          border="none rounded-md"
        />
      </div>

      <div p="t-4">
        <button
          type="submit"
          title="login"
          bg="hex-111111"
          w="full"
          p="2"
          text="white"
          border="none rounded-md"
        >
          Login
        </button>
      </div>
    </form>
  </main>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>