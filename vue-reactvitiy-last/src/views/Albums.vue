<template>
  <button @click="toggle">
    {{ awesome ? 'Show More' : 'Show Less' }}
  </button>

  
  <div v-if="!awesome">
    <div v-for="album in albums" :key="album.name" class="album-card">
      <img :src="album.img" :alt="album.alt">
      <h3>{{ album.name }}</h3>
      <p>${{ album.price }}</p>
    </div>
  </div>
</template>

<script setup>
 import { ref } from 'vue'
 
const awesome = ref(true)

const toggle = () => {
  awesome.value = !awesome.value
}


const albums = [
  { 
    name: "NewJeans",
    price: 39.99, 
    img: "/NewJeans.jpg", 
    alt: "NewJeans - Get Up cover art"
  },
  { 
    name: "LE SSERAFIM", 
    price: 39.99,
    img: "/Le sserafim.jpg",
    alt: "LE SSERAFIM - UNFORGIVEN cover art" 
  },
  { 
    name: "TWICE",
    price: 39.99,
    img: "/TWICE.jpg",
    alt: "TWICE - With YOU-th cover art" 
  },
  { 
    name: "Hearts2Hearts", 
    price: 39.99, 
    img: "/H2H.jpg", 
    alt: "Hearts2Hearts - FOCUS cover art" 
  },
  { 
    name: "izna", 
    price: 39.99, 
    img: "/IZNA.jpg", 
    alt: "izna - N/a cover art" 
  },
  { 
    name: "IVE", 
    price: 39.99,
    img: "/IVE.jpg", 
    alt: "IVE - IVE SWITCH cover art"
  },
  { 
    name: "BABYMONSTER",
    price: 39.99, 
    img: "/babymon.jpg", 
    alt: "BABYMONSTER - DRIP cover art"
  },
  { 
    name: "KiiKii", 
    price: 39.99,
    img: "/KiiKii.jpg",
    alt: "KiiKii - Uncut Gem cover art" 
  },
  { 
    name: "MEOVV",
    price: 39.99,
    img: "/MEOVV.jpg",
    alt: "MEOVV - MEOW cover art" 
  },
  { 
    name: "aespa", 
    price: 39.99, 
    img: "/aespa.jpg", 
    alt: "aespa - Armageddon cover art" 
  },
  { 
    name: "ITZY", 
    price: 39.99, 
    img: "/itzy.jpg", 
    alt: "ITZY - GOLD cover art" 
  },
  { 
    name: "ILLIT", 
    price: 39.99,
    img: "/illit.jpg", 
    alt: "ILLIT - Super Real Me cover art"
  },
  { 
    name: "Red Velvet",
    price: 39.99, 
    img: "/red velvet.jpg", 
    alt: "Red Velvet - Cosmic cover art"
  },
  { 
    name: "fromis_9", 
    price: 39.99,
    img: "/fromis.jpg",
    alt: "fromis_9 - Unlock My World cover art" 
  },
  { 
    name: "BLACKPINK",
    price: 39.99,
    img: "/blackpink.jpg",
    alt: "BLACKPINK - BORN PINK cover art" 
  },
  { 
    name: "KISS OF LIFE", 
    price: 39.99, 
    img: "/kiof.jpg", 
    alt: "KISS OF LIFE - Midas Touch cover art" 
  }
];

</script>

<style  scoped>

</style>