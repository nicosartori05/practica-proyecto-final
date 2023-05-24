<script setup>
import { register } from "../services/auth.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { fields, loading, handleSubmit } = useRegister();

function useRegister() {
  const router = useRouter();
  const fields = ref({
    email: "",
    password: "",
    nombre: "", // Nuevo campo: Nombre
    apellido: "", // Nuevo campo: Apellido
    nacimiento: "", // Nuevo campo: Nacimiento
    nivel: "", // Nuevo campo: Nivel
    genero: "", // Nuevo campo: Género
    pais: "", // Nuevo campo: País
    ciudad: "", // Nuevo campo: Ciudad
    barrio: "", // Nuevo campo: Barrio
    telefono: "", // Nuevo campo: Teléfono
    terminos: false,
  });
  const loading = ref(false);

  async function handleSubmit() {
    loading.value = true;

    await register({
      ...fields.value,
    });
    loading.value = false;

    router.push("/");
  }
  return {
    fields,
    loading,
    handleSubmit,
  };
}
</script>

<template>
  <div class="row" id="header">
    <div class="col-2 text-center">
      <router-link :to="`/login`"
        ><i class="fi fi-sr-angle-left"></i
      ></router-link>
    </div>
    <div class="col-10">
      <h2 class="px-4 m-5">Registrarme</h2>
    </div>
  </div>

  <div class="row">
    <div class="col-xs">
      <form action="#" method="post" @submit.prevent="handleSubmit" class="p-4">
        <div class="row text-center">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" v-model="fields.nombre" />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <input type="text" id="apellido" name="apellido" placeholder="Apellido"  v-model="fields.apellido"/>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <input type="email" id="email" name="email" placeholder="E-mail"  v-model="fields.email"/>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <input type="password" id="contraseña" name="contraseña" placeholder="Contraseña"  v-model="fields.password"/>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <label for="nacimiento">Nacimiento</label>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10">
              <input type="date" class="" name="nacimiento" placeholder="Contraseña" v-model="fields.nacimiento"/>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <label for="nivel">Nivel de juego:</label>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10">
              <select name="nivel" id="nivel" v-model="fields.nivel">
                <option value="" disabled>seleccionar</option>
                <option value="alto">Alto</option>
                <option value="medio">Medio</option>
                <option value="bajo">Bajo</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <label for="genero">Genero:</label>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10">
              <select name="genero" id="genero" v-model="fields.genero">
                <option value="" disabled>seleccionar</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Prefiero no decir">Prefiero no decir</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <label for="pais">Pais:</label>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10">
              <select name="pais" id="pais" v-model="fields.pais">
                <option value="" disabled>seleccionar</option>
                <option value="Argentina">Argentina</option>
                <option value="Uruguay">Uruguay</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <label for="ciudad">Ciudad:</label>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10">
              <select name="ciudad" id="ciudad" v-model="fields.ciudad">
                <option value="" disabled>seleccionar</option>
                <option value="Buenos Aires">buenos aires</option>
                <!-- <option value=""></option> -->
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <label for="barrio">Barrio:</label>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10">
              <select name="barrio" id="barrio" v-model="fields.barrio">
                <option value="" disabled>seleccionar</option>
                <option value="Palermo">Palermo</option>
                <option value="Recoleta">Recoleta</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-2">
              <label for="telefono">Telefono:</label>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-10">
              <input type="text" placeholder="+54" name="telefono" v-model="fields.telefono"/>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-2 col-sm-2 col-md-4">
              <input type="checkbox" name="terminos" id="terminos" v-model="fields.terminos"/>
            </div>
            <div class="col-xs-10 col-sm-10 col-md-8">
              <label for=""
                >Acepto los <a href="">terminos y condiciones</a> de uso.</label
              >
            </div>
          </div>
        </div> 
        <div class="col-xs-12 col-sm-12 col-md-12">
          <button class="btn" >REGISTRARME</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
#header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
img {
  width: 80%;
}
form {
  display: flex;
  flex-direction: column;
}
form div {
  margin: 1rem 0;
}
label,
input,
select {
  font-weight: 600;
  color: rgb(189, 187, 187);
}
input,
select {
  width: 100%;
  padding: 0.8rem;
  border: 0.2px solid rgb(203, 203, 203);
  border-radius: 20px;
}
form button {
  margin-top: 2rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 18px;
}
#registro {
  margin-top: 2rem;
  text-align: center;
}
a {
  text-decoration: none;
  color: #73a812;
  text-align: center;
}
button {
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 18px;
  color: white;
  background-color: #73a812;
  width: 100%;
  margin: 2rem auto;
}
</style>
