<template>
  <nav position="sticky top-0 left-0 z-10" bg="white" w="full" shadow="~ gray-400">
    <div flex="~" align="items-center">
      <div flex="1" p="2">
        <a href="/" title="Home">
          <img
            src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
          />
        </a>
      </div>
      <ul flex="~" p="x-2" align="items-center">
        <li>
          <a
            href="/document"
            title="Document"
            class="text-gray-500 hover:(text-gray-700)"
            p="3.5"
            border="hover:(b-1 blue-400)"
            >Document</a
          >
        </li>
        <li>
          <a
            href="/api"
            title="Api"
            class="text-gray-500 hover:(text-gray-700)"
            p="3.5"
            border="hover:(b-1 blue-400)"
            >Api</a
          >
        </li>
        <li>
          <a
            ring="1 gray-400 hover:(gray-700)"
            p="y-1 x-2"
            m="x-2"
            border="rounded"
            title="Login"
            href="/login"
          >
            Login
          </a>
        </li>
        <li>
          <a
            p="y-1 x-2"
            m="x-2"
            border="rounded"
            class="text-white"
            ring="1 hex-111"
            bg="black hover:(opacity-80)"
            href="/registor"
          >
            Registor
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>