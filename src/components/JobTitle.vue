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
  <p id="job-title" itemprop="jobTitle">{{ jobTitle }}</p>
</template>

<style>
#job-title {
  color: darkblue;
  font-weight: bold;
}
</style>
