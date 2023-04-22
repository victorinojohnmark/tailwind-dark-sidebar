<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <aside id="sidebar" class="hidden lg:flex lg:flex-col lg:w-72 lg:z-50 lg:fixed lg:top-0 lg:bottom-0">
      <div class="flex flex-col flex-grow gap-y-5 pb-4 px-6 bg-gray-900 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 h-16">
          <!-- <img class="w-auto h-8 max-w-full" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Your Company"> -->
          <h1 class="text-2xl font-extrabold text-green-700">ZL-BPMS</h1>
        </div>

        <nav class="flex flex-col flex-1">
          <ul role="list" class="flex flex-col flex-1 gap-y-7 list-none m-0 p-0">
            <li>
              <ul role="list" class="flex flex-col gap-y-1 -mx-2 list-none m-0 p-0">
                <li>
                  <a href="#" class="flex text-white font-semibold text-sm leading-6 p-2 bg-gray-800 rounded-md gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 font-semibold text-sm leading-6 p-2 rounded-md gap-x-3 hover:bg-gray-800 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path></svg>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 font-semibold text-sm leading-6 p-2 rounded-md gap-x-3 hover:bg-gray-800 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 font-semibold text-sm leading-6 p-2 rounded-md gap-x-3 hover:bg-gray-800 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg>
                    Calendar
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 font-semibold text-sm leading-6 p-2 rounded-md gap-x-3 hover:bg-gray-800 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg>
                    Documents
                  </a>
                </li>
                <li>
                  <a href="#" class="flex text-gray-400 font-semibold text-sm leading-6 p-2 rounded-md gap-x-3 hover:bg-gray-800 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path></svg>
                    Reports
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a href="#" class="-mx-2 flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow sm:px-6 sm:gap-x-6 lg:px-8">
        <span class="absolute w-px h-px p-0 -m-px overflow-hidden text-clip whitespace-nowrap border-0">Open Sidebar</span>
        <button class="normal-case cursor-pointer -m-2 p-2 text-gray-700 lg:hidden"> <!-- lg:hidden-->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
        </button>
        <div class="h-6 w-px bg-gray-300 lg:hidden"></div>
        <div class="flex flex-1 gap-x-4 self-stretch">
          <form action="#" class="relative flex flex-1">
            <label class="absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0">Search</label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class=" pointer-events-none absolute top-0 bottom-0 left-0 h-full w-5 text-gray-400"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg>
            <input type="search" class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 leading-5 sm:text-sm focus:outline-none focus:shadow-none focus:ring-offset-white" name="search" id="search-field" placeholder="Search...">
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400">
              <span class="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">View notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path></svg>
            </button>
            <div class="hidden lg:block lg:h-6 lg:w-px bg-gray-200"></div>
            <div class="relative">
              <button type="button" class="-m-1.5 flex items-center p-1.5">
                <span class="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0">Open user menu</span>
                <img src="./assets/img/tim-cook.jpeg" class="max-w-full h-8 w-8 rounded-full bg-gray-400" alt="Profile Picture">
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-2 text-sm font-semibold leading-6 text-gray-900">Tim Cook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="ml-2 h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>
                </span>
              </button>
              <div class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right translate-x-px translate-y-0 rounded-md bg-white py-2 opacity-100 ring-1 ring-gray-100 shadow-lg">
                <a href="#" class="no-underline block px-3 py-1 leading-6 text-gray-800 hover:bg-gray-100">Your Profile</a>
                <a href="#" class="no-underline block px-3 py-1 leading-6 text-gray-800 hover:bg-gray-100">Sign Out</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-4">
          <div class="relative h-96 overflow-hidden rounded-xl border border-dashed bg-gray-100 opacity-75">
            <svg class="absolute inset-0 h-full w-full stroke-neutral-300" fill="none"><defs><pattern id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path></pattern></defs><rect stroke="none" fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)" width="100%" height="100%"></rect></svg>
          </div>
        </div>
      
    </main>
    </div>
    
    
  </div>
  
</template>
