<template>
  <!-- <div class="Nav-main">
  <div class="dropdown">
      <div class="tham tham-e-squeeze tham-w-6">
      <div class="tham-box">
        <div class="tham-inner" />
      </div>
    </div>
      <div class="menu">
        <div><nuxt-link to="/">Home</nuxt-link></div>
        <div><nuxt-link to="/SignUp">Sign Up</nuxt-link></div>
        <div><nuxt-link to="/profile">My Page</nuxt-link></div>
      </div>
    </div>
    <div>Hellow World!!!</div>
    <div>Navピースだよ!!!</div>

    
</div> -->

  <div>
    <div class="container w-full max-w-7xl">
      <div
        x-data="{ open: false }"
        class="
          flex flex-col
          max-w-screen-xl
          p-5
          mx-auto
          md:items-center md:justify-between md:flex-row md:px-6
          lg:px-8
        "
      >
        <div
          class="flex flex-row items-center justify-between lg:justify-start"
        >
          <a
            href="/"
            class="
              text-lg
              font-bold
              tracking-tighter
              text-blue-600
              transition
              duration-500
              ease-in-out
              transform
              tracking-relaxed
              lg:pr-8
            "
          >
            PARENTING APP
          </a>
          
        </div>
        <nav
        >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm text-gray-500
              md:mt-0
              hover:text-blue-600
              focus:outline-none focus:shadow-outline
            "
            href="/"
            >HOME</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm text-gray-500
              md:mt-0
              hover:text-blue-600
              focus:outline-none focus:shadow-outline
            "
            href="/profile"
            >MY PAGE</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm text-gray-500
              md:mt-0
              hover:text-blue-600
              focus:outline-none focus:shadow-outline
            "
            href="/graph"
            >Graph</a
          >

          <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
            <button
              class="
                items-center
                block
                px-10
                py-2.5
                text-base
                font-medium
                text-center text-blue-600
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
              "
            >
              Sign in
            </button>
            <button
              class="
                items-center
                block
                px-10
                py-3
                text-base
                font-medium
                text-center text-white
                transition
                duration-500
                ease-in-out
                transform
                bg-blue-600
                rounded-xl
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-blue-500
              "
            >
              <nuxt-link to="/SignUp">Sign up</nuxt-link>
            </button>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <div
        class="p-5 overflow-y-auto whitespace-nowrap scroll-hidden bg-gray-50"
      >
        <ul class="inline-flex items-center list-none">
          <li>
            <a
              href="/unchi"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-blue-600
              "
              >Unchi</a
            >
          </li>
          <li>
            <a
              href="/urine"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-blue-600
              "
              >Urine</a
            >
          </li>
          <li>
            <a
              href="/food"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-blue-600
              "
              >Milk</a
            >
          </li>
          <li>
            <a
              href="/"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-blue-600
              "
              >Height</a
            >
          </li>
          <li>
            <a
              href="/"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-blue-600
              "
              >Wight</a
            >
          </li>
          <li>
            <a
              href="/allergy"
              class="
                px-4
                py-1
                mr-1
                text-base text-gray-500
                transition
                duration-500
                ease-in-out
                transform
                rounded-md
                focus:shadow-outline focus:outline-none focus:ring-2
                ring-offset-current ring-offset-2
                hover:text-blue-600
              "
              >Allergy</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
.Nav-main {
  width: 100%;
  background-color: rgb(158, 116, 116);
  text-align: center;
  padding: 5%;
}

.dropdown {
  position: relative;
  width: 8%;
}

.menu {
  position: absolute;
  visibility: hidden;
}

.dropdown:hover .menu {
  visibility: visible;
}
</style>