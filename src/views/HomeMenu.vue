<template>
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-gray-800">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex flex-row items-center font-bold text-xl gap-x-2 ">
                <img class="h-8 w-8" src="../assets/img/icon-leaf.png" alt="Your Company">
                <h1 class="text-green-700">BPMS</h1>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="sr-only">View Home</span>
                    <HomeIcon class="h-6 w-6" />
                </button>
  
                <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="h-6 w-6"/>
                </button>
  
                <!-- Profile dropdown -->
                <div class="relative ml-3">
                  <div>
                    <button type="button" @click="showUserMenu = !showUserMenu" class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </button>
                  </div>
                  <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" :class="{ 'hidden': !showUserMenu  }" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <button type="button" @click="showMobileMenu = !showMobileMenu" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6"/>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Mobile menu, show/hide based on menu state. -->
        <div id="mobile-menu" class="'md:hidden'" :class="{'!hidden' : !showMobileMenu}">
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
              </div>
              <button type="button"  class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6"/>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
              <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
            </div>
          </div>
        </div>
      </nav>
  
      
      <main class="flex flex-col items-center">
        <div class="flex flex-row justify-center items-center bg-white rounded-md sm:w-full md:w-1/2 flex-wrap py-6 px-6 md:px-8 mt-10 md:mt-12">
            <router-link :to="{name: 'home'}" class="flex flex-col items-center group m-4 w-24">
                <img src="@/assets/icons/book.svg" class="w-16 group-hover:drop-shadow-lg group-hover:-translate-y-1 pb-2 transition ease-linear" alt="Master Records">
                <h4 class="font-semibold text-gray-800 text-sm truncate">Master Records</h4>
            </router-link>

            <router-link :to="{name: 'home'}" class="flex flex-col items-center group m-4 w-24">
                <img src="@/assets/icons/cashflow.svg" class="w-16 group-hover:drop-shadow-lg group-hover:-translate-y-1 pb-2 transition ease-linear" alt="Credit & Collection">
                <h4 class="font-semibold text-gray-800 text-sm truncate">Credit & Collection</h4>
            </router-link>

            <router-link to="#" class="flex flex-col items-center group m-4">
                <img src="@/assets/icons/accounting.svg" class="w-16 group-hover:drop-shadow-lg group-hover:-translate-y-1 pb-2 transition ease-linear" alt="Accounting">
                <h4 class="font-semibold text-gray-800 text-sm">Accounting</h4>
            </router-link>

            <router-link :to="{name: 'home'}" class="flex flex-col items-center group m-4 w-24">
                <img src="@/assets/icons/book.svg" class="w-16 group-hover:drop-shadow-lg group-hover:-translate-y-1 pb-2 transition ease-linear" alt="Master Records">
                <h4 class="font-semibold text-gray-800 text-sm truncate">Master Records</h4>
            </router-link>

            <router-link :to="{name: 'home'}" class="flex flex-col items-center group m-4 w-24">
                <img src="@/assets/icons/cashflow.svg" class="w-16 group-hover:drop-shadow-lg group-hover:-translate-y-1 pb-2 transition ease-linear" alt="Credit & Collection">
                <h4 class="font-semibold text-gray-800 text-sm truncate">Credit & Collection</h4>
            </router-link>

            <router-link to="#" class="flex flex-col items-center group m-4">
                <img src="@/assets/icons/accounting.svg" class="w-16 group-hover:drop-shadow-lg group-hover:-translate-y-1 pb-2 transition ease-linear" alt="Accounting">
                <h4 class="font-semibold text-gray-800 text-sm">Accounting</h4>
            </router-link>

        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import {HomeIcon, BellIcon, Bars3Icon} from '@heroicons/vue/24/outline'
  import { ref } from 'vue'
//   import router from '../router';
  const showMobileMenu = ref(false);
  // provide('showMobileMenu', showMobileMenu)
  const showUserMenu = ref(false);
  
  </script>