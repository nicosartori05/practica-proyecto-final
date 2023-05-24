<script setup>
import navbar from '../components/navbar.vue';
import cardsHome from '../components/cardsHome.vue';

</script>

<template>
<navbar title="Home"/>

<section id="CardsHome">
<div class="row">
    <div class="col-3">
        <cardsHome route="Home"/>
    </div>
    <div class="col-3">
        <cardsHome route="Feed"/>
    </div>
    <div class="col-3">
        <cardsHome route="Partidos"/>
    </div>
    <div class="col-3">
        <cardsHome route="Red"/>
    </div>
</div>
</section>
<section id="proximosPartidos">
    <div class="row">
        <div class="col-10">
            <h2>Proximos partidos</h2>
        </div>
        <div class="col-2">
            <i class="fi fi-sr-angle-double-small-right"></i>
        </div>
    </div>
</section>
</template>

<style scoped>
    #CardsHome{
        margin-top: 6rem;
    }
    #proximosPartidos{
        text-align: center;
    }
    #proximosPartidos div{
        align-items: center;
    }
section{
    margin-top: 2rem;
}
</style>