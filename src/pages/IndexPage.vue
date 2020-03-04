<template>
  <div class="">
    <div v-for="card in cards" :key="card.name">
      <HomeCard v-bind:userData="card"/>
    </div>
  </div>
</template>

<script>
import HomeCard from "../components/home/HomeCard"
export default {
name: 'IndexPage',
    components: {
      HomeCard
    },
    data: function() {
      return {
        cards: [
          {
            name: "John",
            imageUrl: "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
            role: "Web Developer"
          },
          {
            name: "John",
            imageUrl: "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
            role: "Web Developer"
          },
          {
            name: "John",
            imageUrl: "https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg",
            role: "Web Developer"
          }
        ]
      }
    }
}
</script>

<style>

</style>