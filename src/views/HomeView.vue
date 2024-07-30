<script setup lang="ts">
  
    
  
</script>

<script>

  
  export default {
    data(vm) {
      return {
          grid:100,
        }
    },
  };
</script>
  
<template>
  <main>



    <div class="bg-gray-900">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5 text-white">
              Kossi <span class="font-bold">Coder.</span>
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12 text-w">
            <a href="#" class="text-sm font-semibold leading-6 text-white">Accueil</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Services</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Mobile</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Web</a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-white">Discutons <span
                aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
          <!-- Background backdrop, show/hide based on slide-over state. -->
          <div class="fixed inset-0 z-50"></div>
          <div
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                </div>
                <div class="py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                    in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div class="mx-auto flex justify-center w-full py-32  gap-x-10 sm:py-48 lg:py-56">
          <div class="w-128">

            <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-start">
              <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-700 hover:ring-gray-900/20">
                EKPETSOU Kossi Stan. <a href="#" class="font-semibold text-indigo-600"><span
                    class="absolute inset-0" aria-hidden="true"></span>Read more <span
                    aria-hidden="true">&rarr;</span></a>
              </div>
            </div> -->
            <div class="z-200 shadow">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Amener vos idées à l'existence grace
                à mes
                <span class="text-indigo-500 font-bold">services</span>
              </h1>
              <p class="mt-6 text-lg leading-8 text-white">Je suis developpeur mobile flutter et web avec 2 ans
                d'experiences . consulter mes differents compte social . </p>
              <div class="mt-10 flex items-center justify-start gap-x-6">
                <a href="#"
                  class="rounded-md bg-black-750 px-3.5 py-2.5 flex justify-center gap-x-2 items-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <img src="../assets/images/github.png" alt="" class="h-6 w-6">
                  <span class="pt-0.5 font-bold"> Github</span>
                </a>
                <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span
                    aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>

          <div>
            <div class="flex gap-x-2 relative">
              <div class="shadow bg-black-650  w-72  h-96 p-4 rounded-lg text-white">

              </div>
              <div class="shadow absolute bg-black-750  w-72 p-4 h-96 rounded-lg  text-white  rotate-6 hover:rotate-2">
                <img src="../assets/images/dashboard.png" alt="" class="rounded-lg ">

                <div class="pt-20">
                  <div class="flex flex-col ">
                    <span class="font-bold text-xl">LaraFlow</span>
                    Un boilerplate de developpement en laravel
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
      </div>
    </div>



  </main>

  <article>
    <div class="mx-auto ">
      <div class="flex justify-center gap-x-4">
        <div class="bg-black-650 shadow rounded-lg w-128 p-4 text-white">
          <div class="pb-10">
            <p class="font-bold"> Frameworks</p>
          </div>

          <div class="flex flex-col gap-y-4">
            <div class="flex gap-x-4 items-center  border-b pb-4 border-gray-900">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/flutter.png" alt="" class="h-6 w-6">
              </div>
              <div class="w-full">
                <div class="flex flex-col">
                  <div>
                    <span class="font-bold text-xl">Flutter</span>
                  </div>
                  <div>
                    <span class="text-xs">
                      10+ projets avec le SDK flutter . 2 ans d'experiences avec ce framework
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-x-4 items-center border-b pb-4 border-gray-900">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/laravel.png" alt="" class="h-6 w-6">
              </div>
              <div class="w-full">
                <div class="flex flex-col">
                  <div>
                    <span class="font-bold text-xl">Laravel</span>
                  </div>
                  <div>
                    <span class="text-xs">
                      J'ai 2 ans d'experiences avec laravel , avec lequel j'ai coder plusieurs projets personnels
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-x-4 items-center border-b pb-4 border-gray-900">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/vuejs.png" alt="" class="h-6 w-6">
              </div>
              <div class="w-full">
                <div class="flex flex-col">
                  <div>
                    <span class="font-bold text-xl">Vue.JS</span>
                  </div>
                  <div>
                    <span class="text-xs">
                      <span class="text-xs">
                        vue.js est mon framework frontend de coeur
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-x-4 items-center border-b pb-4 border-gray-900">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/tailwind.png" alt="">
              </div>
              <div class="w-full">
                <div class="flex flex-col">
                  <div>
                    <span class="font-bold text-xl">Tailwind css</span>
                  </div>
                  <div>
                    <span class="text-xs">
                      <span class="text-xs">
                        Decouvert il y a 1 an et demi maintenant , il est devenu mon framework css de coeur
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-x-4 items-center border-b pb-4 border-gray-900">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/semantic.png" alt="" class="rounded-lg">
              </div>
              <div class="w-full">
                <div class="flex flex-col">
                  <div>
                    <span class="font-bold text-xl">Semantic ui</span>
                  </div>
                  <div>
                    <span class="text-xs">
                      <span class="text-xs">
                        J'ai particulierement utilisé ce framework css pendant au moins 2 ans
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-x-4 items-center ">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/node.png" alt="" class="rounded-lg w-full">
              </div>
              <div class="w-full">
                <div class="flex flex-col">
                  <div>
                    <span class="font-bold text-xl">Node.js</span>
                  </div>
                  <div>

                    <span class="text-xs">
                      J'ai eu une petite experience avec node.js pendant une année au cours de laquele j'ai développé
                      des projets personnels .
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="bg-black-650 shadow rounded-lg w-96 p-4  text-white">
            <div class="pb-10">
              <p class="font-bold"> Languages</p>
            </div>

            <div class="flex flex-wrap gap-x-2 gap-y-2">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/js.png" alt="" class="rounded-lg">
              </div>

              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/icon_dart.svg" alt="" class="rounded-lg">
              </div>
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/php.png" alt="" class="rounded-lg">
              </div>
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/c++.png" alt="" class="rounded-lg">
              </div>
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/python.png" alt="" class="rounded-lg">
              </div>
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/typescript.png" alt="" class="rounded-lg">
              </div>

            </div>
          </div>

          <div class="bg-black-650 shadow rounded-lg w-96 p-4 h-52 text-white mt-2">
            <div class="pb-10">
              <p class="font-bold">Base de données et Divers</p>
            </div>

            <div class="flex gap-x-2">
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/postgres.png" alt="" class="rounded-lg">
              </div>

              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/mysql.png" alt="" class="rounded-lg">
              </div>
              <div class="shadow bg-gray-900 rounded-lg p-2 w-16 h-16 flex justify-center items-center">
                <img src="../assets/images/photoshop.png" alt="" class="rounded-lg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>

  <article class="relative">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div>
    <div class="mx-auto mt-20 mb-20 w-128">
      <div class="text-center">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Recents projets
        </h2>
        <p class="mt-6 text-lg leading-8 text-white">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>

      </div>
    </div>
    <div class="mx-auto flex justify-center gap-x-10">
      <div>
        <div>
          <div class="flex gap-x-2 relative">
            <div class="shadow bg-black-650  w-72  h-96 p-4 rounded-lg text-white">

            </div>
            <div
              class="shadow absolute bg-black-750 w-72 cursor-pointer p-4 h-96 rounded-lg  text-white  rotate-2 hover:rotate-6">
              <img src="../assets/images/portfolio.png" alt="" class="rounded-lg ">

              <div class="pt-20">
                <div class="flex flex-col ">
                  <span class="font-bold text-xl">Portfolio</span>
                  Mon portfolio
                </div>
              </div>
              <div class="absolute right-2.5 bottom-2">
                <div class="flex gap-x-2 justify-center items-center">
                  <div>
                    <img src="../assets/images/vuejs.png" alt="" class=" w-6">
                  </div>
                  <div>
                    <img src="../assets/images/tailwind.png" alt="" class=" w-6">
                  </div>
                  <div>
                    <img src="../assets/images/typescript.png" alt="" class=" w-6">
                  </div>
                </div>
              </div>
              <div class="absolute left-2.5 bottom-2">
                <a href="#" class="text-sm font-semibold leading-6 text-white">Github <span
                    aria-hidden="true">→</span></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="flex gap-x-2 relative">
            <div class="shadow bg-black-650  w-72  h-96 p-4 rounded-lg text-white">

            </div>
            <div
              class="shadow absolute bg-black-750 w-72 cursor-pointer p-4 h-96 rounded-lg  text-white  rotate-2 hover:rotate-6">
              <img src="../assets/images/esugu.png" alt="" class="rounded-lg w-full">

              <div class="pt-10">
                <div class="flex flex-col ">
                  <span class="font-bold text-xl">Esugu</span>
                  Application mobile e-commerciale dont sur laquelle j'ai travaillé pendant mes 2 ans dans l'entreprise
                  DD VISION (Lome - Togo)
                </div>
              </div>
              <div class="absolute right-2.5 bottom-2">
                <div class="flex gap-x-2 justify-center items-center">
                  <div>
                    <img src="../assets/images/laravel.png" alt="" class=" w-6">
                  </div>
                  <div>
                    <img src="../assets/images/flutter.png" alt="" class=" w-6">
                  </div>

                </div>
              </div>
              <div class="absolute left-2.5 bottom-2">
                <a href="https://africa.esugu-app.com/" class="text-sm font-semibold leading-6 text-white">Site Web
                  <span aria-hidden="true">→</span></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="flex gap-x-2 relative">
            <div class="shadow bg-black-650  w-72  h-96 p-4 rounded-lg text-white">

            </div>
            <div
              class="shadow absolute cursor-pointer bg-black-750 w-72 p-4 h-96 rounded-lg  text-white  rotate-2 hover:rotate-6">
              <img src="../assets/images/dashboard.png" alt="" class="rounded-lg ">

              <div class="pt-20">
                <div class="flex flex-col ">
                  <span class="font-bold text-xl">LaraFlow</span>
                  Un boilerplate de developpement en laravel
                </div>
              </div>
              <div class="absolute right-2.5 bottom-2">
                <div class="flex gap-x-2 justify-center items-center">
                  <div>
                    <img src="../assets/images/laravel.png" alt="" class=" w-6">
                  </div>
                  <div>
                    <img src="../assets/images/tailwind.png" alt="" class=" w-6">
                  </div>
                  <div>
                    <img src="../assets/images/flowbite.png" alt="" class=" w-6">
                  </div>
                </div>
              </div>
              <div class="absolute left-2.5 bottom-2">
                <a href="#" class="text-sm font-semibold leading-6 text-white">Github
                  <span aria-hidden="true">→</span></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </article>
  <article class="mt-72">
    <div class="mx-auto flex justify-center gap-x-4">

      <div class="w-128">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Des applications mobiles codées sur
          <span class="text-indigo-500 font-bold">mésure</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-white">Je vous propose mes services de création d'application mobile . Je
          peux également intervenir sur des
          projets flutter existants </p>
        <div class="mt-10 flex items-center justify-start gap-x-6">
          <a href="#"
            class="rounded-md bg-black-750 px-3.5 py-2.5 flex justify-center gap-x-2 items-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <img src="../assets/images/github.png" alt="" class="h-6 w-6">
            <span class="pt-0.5 font-bold"> Github</span>
          </a>

        </div>
      </div>
      <div class="relative">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div>
          <img src="../assets/images/mobile1.jpg" alt="" class=" ">
        </div>

      </div>
    </div>



    <div class="flex justify-center text-center mt-20">
      <div class="w-128">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Des applications web
          <span class="text-indigo-500 font-bold">peformantes</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-white">Je peux intervenir sur des applications web tournant sur laravel et
          vue.js . Télécharger ce template gratuite sur mon github </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 mb-10">
          <a href="#"
            class="rounded-md bg-black-750 px-3.5 py-2.5 flex justify-center gap-x-2 items-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <img src="../assets/images/github.png" alt="" class="h-6 w-6">
            <span class="pt-0.5 font-bold"> Github</span>
          </a>

        </div>
      </div>
    </div>


    <div class="mx-auto flex justify-center gap-x-4">
      <div class="relative">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div class="flex justify-center">
          <img src="../assets/images/vue-admin2.png" alt="" class=" w-2/3 rounded-lg shadow ">
        </div>

      </div>



    </div>


  </article>

  <article class="mt-72">
    <div class="mx-auto flex justify-center gap-x-4">

      <div class="relative">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div>
          <img src="../assets/images/mobile1.jpg" alt="" class=" h-96 ">
        </div>

      </div>
      <!-- pi-angle-down -->
      <div class="w-128">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Des applications mobiles codées sur
          <span class="text-indigo-500 font-bold">mésure</span>
        </h1>
        <p class="mt-6 text-lg leading-8 text-white">Je vous propose mes services de création d'application mobile . Je
          peux également intervenir sur des
          projets flutter existants </p>

        <div class="mt-10 flex items-center justify-start gap-x-6">
          <a href="#"
            class="rounded-md bg-black-750 px-3.5 py-2.5 flex justify-center gap-x-2 items-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <img src="../assets/images/github.png" alt="" class="h-6 w-6">
            <span class="pt-0.5 font-bold"> Github</span>
          </a>

        </div>

      </div>

    </div>
  </article>

</template>
