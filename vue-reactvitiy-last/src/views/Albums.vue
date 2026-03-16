<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap" rel="stylesheet">

  <main class="shop">

    <h1 class="shop-title">K-Pop Album Shop</h1>

    <div class="looks">
      <div class="cart">
        <div class="cart-buttons">
          <button @click="showKpopCart = !showKpopCart">
            {{ showKpopCart ? 'Hide Cart' : 'Show Cart' }}
          </button>

          <button @click="resetAll"> Reset Cart </button>
        </div>
        <h2>Total: ${{ totalPrice().toFixed(2) }}</h2>
        <div v-if="showKpopCart">
          <div v-if="cart.length === 0">
            Cart is empty
          </div>

          <div v-for="item in cart" :key="item.name" class="cart-item">
            {{ item.name }} - ${{ item.price }}

            <button @click="removeAlbum(item.name)">
              Remove
            </button>

          </div>
        </div>

      </div>


      <div class="albums">

        <div class="card" v-for="album in albums" :key="album.name">
          <h3>{{ album.name }}</h3>
          <p>${{ album.price }}</p>

          <div class="albumImage">
            <img :src="album.img" :alt="album.alt">
          </div>

          <button @click="addAlbum(album)">Add to Cart</button>

        </div>

      </div>

    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const showKpopCart = ref(true)
const cart = ref([])

function addAlbum(album) {

  cart.value.push({
    name: album.name,
    price: album.price
  })

}

function removeAlbum(name) {
      cart.value = cart.value.filter(item => item.name !== name)
}

function resetAll() {

  cart.value = []

}

function totalPrice() {

  let total = 0

  for (let i = 0; i < cart.value.length; i++) {
    total += cart.value[i].price
  }

  return total
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
]
</script>

<style scoped>
.shop {
  padding: 30px;
  background: #f7efe9;
  font-family: Arial;
}

.shop-title {
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
}

.looks {
  display: flex;
  gap: 30px;
}

.cart {
  width: 260px;
  background: #f6f6f2;
  border: 3px solid #b78484;
  border-radius: 15px;
  padding: 20px;
    font-family: "Cherry Bomb One", system-ui;
  font-size: 13px;
}

.cart-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.cart-item {
  margin-bottom: 10px;
}

.albums {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
    font-family: "Cherry Bomb One", system-ui;
  font-size: 25px;
  
  width: 200px;
  border: 3px solid #deb5ff;
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  background: #edd2ff;
}

.albumImage {
  background: #eee;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
}

img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

button {
  cursor: pointer;
  font-family: "Cherry Bomb One", system-ui;
  font-size: 13px;
  border-radius: 10px;
}
</style>