<template>
      <div>
    <aside id="sidebar" class="hidden md:flex md:flex-col md:w-60 lg:w-72 md:z-50 md:fixed md:top-0 md:bottom-0">
      <SideMenu></SideMenu>
    </aside>
    <aside class="max-md:flex max-md:fixed max-md:z-50 max-md:w-screen max-md:h-screen" :class="{'!hidden': !showMobileMenu}">
      <SideMenu></SideMenu>
    </aside>
    <!-- <SideMenu></SideMenu> -->

    <div class="md:pl-60 lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow sm:px-6 sm:gap-x-6 md:px-8">
        <span class="absolute w-px h-px p-0 -m-px overflow-hidden text-clip whitespace-nowrap border-0">Open Sidebar</span>
        <button class="normal-case cursor-pointer -m-2 p-2 text-gray-700 md:hidden" @click="showMobileMenu = !showMobileMenu"> <!-- lg:hidden-->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </button>
        <div class="h-6 w-px bg-gray-300 md:hidden"></div>
        <div class="flex flex-1 gap-x-4 self-stretch">
          <form action="#" class="relative flex flex-1">
            <label class="absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0">Search</label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
              class=" pointer-events-none absolute top-0 bottom-0 left-0 h-full w-5 text-gray-400">
              <path fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"></path>
            </svg>
            <input type="search"
              class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 leading-5 sm:text-sm focus:outline-none focus:shadow-none focus:ring-offset-white"
              name="search" id="search-field" placeholder="Search...">
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400">
              <span class="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">View
                notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                </path>
              </svg>
            </button>
            <div class="hidden lg:block lg:h-6 lg:w-px bg-gray-200"></div>
            <div class="relative">
              <button type="button" class="-m-1.5 flex items-center p-1.5 focus:outline-none" @click="showUserMenu = !showUserMenu" @blur="showUserMenu = false">
                <span class="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">Open user menu</span>
                <img src="./assets/img/tim-cook.jpeg" class="max-w-full h-8 w-8 rounded-full bg-gray-400" alt="Profile Picture">
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-2 text-sm font-semibold leading-6 text-gray-900">Tim Cook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="ml-2 h-5 w-5 text-gray-400">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </button>
              <div class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right translate-x-px translate-y-0 rounded-md bg-white py-2 opacity-100 ring-1 ring-gray-100 shadow-lg text-sm" :class="{'hidden': !showUserMenu}" @click="showUserMenu = !showUserMenu">
                <a href="#" class="no-underline block px-3 py-1 leading-6 text-gray-800 hover:bg-gray-100">Your Profile</a>
                <a href="#" class="no-underline block px-3 py-1 leading-6 text-gray-800 hover:bg-gray-100">Sign Out</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <main class="lg:py-4 py-6">
        <div class="px-4 sm:px-6 lg:px-4">
          <div class="relative h-96 overflow-hidden rounded-xl border border-dashed bg-gray-100 opacity-75">
            <svg class="inset-0 h-full w-full stroke-neutral-300" fill="none">
              <defs>
                <pattern id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251" x="0" y="0" width="10" height="10"
                  patternUnits="userSpaceOnUse">
                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                </pattern>
              </defs>
              <rect stroke="none" fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)" width="100%" height="100%">
              </rect>
            </svg>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
    import { ref, provide } from 'vue';

    import SideMenu from  '../components/SideMenu.vue';

    const showMobileMenu = ref(false)
    provide('showMobileMenu', showMobileMenu)
    const showUserMenu = ref(false)
</script>