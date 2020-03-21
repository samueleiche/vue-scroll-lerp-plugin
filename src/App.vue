<template>
  <div id="app" class="my-64 py-64">
    <div class="fixed top-0 inset-x-0">{{ $lerp.velocity }}</div>
    <div class="container mx-auto my-64 py-64 mx-n3">
      <div class="flex">
        <div class="w-1/2 px-3" :style="{ transform: `skewY(${$lerp.velocity}deg)` }">
          <h1 class="bold text-4xl">
            BOLD&
            CURIOUS&
            HONEST&
            TEAM
          </h1>
          <p>
            Our values make us who we are. Razor sharp judgement,
            insatiable curiosity, deep empathy, relentless passion,
            commercial sense, obsessed withoutcomes, honest and open.
            We speak up, show up and do.
          </p>
        </div>
        <div class="w-1/2 px-3" :style="{ transform: `skewY(${$lerp.velocity}deg)` }">
          <h1 class="bold text-4xl">
            BOLD&
            CURIOUS&
            HONEST&
            TEAM
          </h1>
          <p>
            Our values make us who we are. Razor sharp judgement,
            insatiable curiosity, deep empathy, relentless passion,
            commercial sense, obsessed withoutcomes, honest and open.
            We speak up, show up and do.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
    margin: 0;
}
</style>
