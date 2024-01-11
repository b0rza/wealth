<template>
  <div class="navbar relative">
    <div class="max-w-7xl mx-auto px-4">
      <nav class="md:flex justify-between space-x-10">
        <NuxtLink to="/">
          <NavBtn>Home</NavBtn>
        </NuxtLink>
        <NuxtLink to="/entry">
          <NavBtn>Entry</NavBtn>
        </NuxtLink>
        <NuxtLink to="/categories">
          <NavBtn>Categories</NavBtn>
        </NuxtLink>
        <button @click="toggleTheme">
          <fa :icon=icon />
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const { toggleTheme, isLightMode } = useTheme();

const icon = 'fa-solid fa-moon';

// const icon = computed(() => {
//   return `fa-solid fa-${ isLightMode ? 'moon' : 'sun' }`;
// });
</script>
