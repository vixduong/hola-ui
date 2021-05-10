<template>
  <main
    flex="~ col"
    class="scrollbar-hide flex-col md:(flex-row overflow-hidden h-screen)"
  >
    <div>
      <div
        w="full md:108"
        h="64 md:screen"
        style="
          background-image: url(https://images.unsplash.com/8/berries.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max);
        "
        bg="cover"
        p="8"
        flex="~ col"
        class="space-y-4"
      >
        <div w="16">
          <a href="/" title="home">
            <img
              title="logo"
              src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg"
            />
          </a>
        </div>
        <h2 text="4xl white" font="bold">Creation starts here</h2>
      </div>
    </div>
    <div
      flex="1"
      p="4 lg:16"
      class="scrollbar-hide space-y-8 md:(overflow-y-scroll)"
    >
      <div flex="~ col" align="items-center" space="y-2">
        <h1 text="6xl" font="bold">Join</h1>
        <p>
          Already have an account?
          <a
            rel="nofollow"
            href="/login"
            class="underline text-gray-300 hover:text-black"
            >Login</a
          >
        </p>
      </div>

      <form action="" flex="~ col" class="space-y-4">
        <div
          flex="~"
          class="space-x-0 space-y-2 flex-col sm:(flex-row space-x-8 space-y-0)"
        >
          <div flex="1">
            <div flex="~ col" class="space-y-2">
              <label for="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                ring="1 black"
                border="none rounded-md"
              />
            </div>
          </div>
          <div flex="1">
            <div flex="~ col" class="space-y-2">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                ring="1 black"
                border="none rounded-md"
              />
            </div>
          </div>
        </div>
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
          <label for="usermane"
            >Usermane
            <span text="gray-500"
              >(only letters, numbers, and underscores)</span
            ></label
          >
          <input
            type="text"
            name="usermane"
            id="usermane"
            ring="1 black"
            border="none rounded-md"
          />
        </div>
        <div flex="~ col" class="space-y-2">
          <label for="password"
            >Password <span text="gray-500">(min. 6 char)</span></label
          >
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
            title="register"
            bg="hex-111111"
            w="full"
            p="2"
            text="white"
            border="none rounded-md"
          >
            Join
          </button>
        </div>
      </form>

      <p class="text-center text-sm">
        By joining, you agree to the
        <a href="/terms" class="underline text-gray-300 hover:text-black"
          >Terms</a
        >
        and
        <a href="/privacy" class="underline text-gray-300 hover:text-black"
          >Privacy Policy</a
        >.
      </p>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>