<script setup>
import { ref } from 'vue';
const flag = true;

</script>

<template>

<div class="container">
    
    <!-- <header>
     <template v-if="!flag">
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/register">Registro</router-link>
            </li>
            <li>
              <router-link to="/login">Iniciar sesion</router-link>
            </li>
          </ul>
        </nav>
      </template>
    </header>
     -->
    <main>
        <router-view></router-view>
    </main>
    <!-- <template v-if="!flag">
      <footer>
        <p>&copy; Nicolas Sartori</p>
      </footer>
    </template> -->
  </div>



</template>

<style scoped>
.container{
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
/* header{
  grid-row: 1;
} */
main{
padding: 1rem;
  grid-row: 2;
}
footer{
  grid-row: 3;
}
</style>