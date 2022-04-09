<script>
export default {
  data() {
    return {
      jobTitle: 'Fullstack web developer'
    }
  }
}
</script>

<template>
  <p class="greeting">{{ jobTitle }}</p>
</template>

<style>
.greeting {
  color: darkblue;
  font-weight: bold;
}
</style>
