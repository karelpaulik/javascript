<template>
  <section>
    <h4>Part Component</h4>
    <input type="text" v-model="props.prA" />
    <input type="text" v-model="locB" />
    <input type="text" v-model="locC" />

    <pre>{{ props }}</pre>
    <pre>{{ locB }}</pre>
    <pre>{{ locC }}</pre>
  </section>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue';

const props = defineProps<{
  prA: string;
  prB: string;
  prC: string;
  prD: { d1: string };
  prE: { e1: string };
  prF: { f1: string };
  prG: { g1: string };
  prH: { h1: string };
  prI: { i1: string };
  prP: string[];
}>();

// props.prA                        // Prostá hodnota, která je reaktivní. Ale nemůžu předat do composable, který očekává ref.
const locB = ref(props.prB);        // Pro editaci dat.
const locC = toRef(props, 'prC');   // Reaktivní proměnná, kterou můžu předat do composable očekávající ref.
                                    // "props.prA" vs. "toRef(props, 'prA')": toto jsou dvě různé hodnoty.

const locE = ref(props.prE);        // Toto vytváří reaktivní proměnnou, která obsahuje referenci na původní objekt. Když změním potomka, měním rodiče !!! Porušují princim jednosměrného toku dat.
const locF = toRef(props, 'prF');   // Toto by nemělo být použito pro editaci. "toRef(props, 'prF')" stejné jako "props.prE"

const locH = ref({...props.prH});   // Vytvoří novou reaktivní proměnnou, nezávislou na rodiči. Ideální pro změnu dat. Pro promítnutí do rodiče nutno použít "emit"
const locI = toRef({...props, 'prI'});  // Nemá žádné praktické využití, nemá logiku.

// Pozn. toRef má hlavně význam pro PRIMITIVNÍ HODNOTY. Pro objekty a pole význam nemá.
// Pozor!!! Jiná syntaxe mezi: ref(props.prB) vs. toRef(props, 'prB')

// Shrnutí: ref()
// primit. hodnota: ref pro editaci dat
// objekt/pole: ref({props.prE})  editace dat: měním i rodiče
// objekt/pole: ref({...props.prE})  editace dat: měním pouze potomka

// Primitivní hodnoty
// 1. props.prA    Pro čtení dat. Primitivní hodnota, která je reaktivně synchronizována.
// 2. locB         Pro editaci dat v nové komponentě. Nová reaktivní proměnná, odpojená od rodiče. Je to nezávislý ref.
// 3. locC         Pro čtení dat. Nová reaktivní proměnná, odkazující na rodiče. Je to reaktivní reference, když se změní rodič, změní se i locC. Použití: pro předání do nějaké composable nebo funkce.
// 1. i 3. jsou zamýšleny ke čtení dat, ale pokud je změním, vue nehlásí chybu.
// Ani jedna z těchto možností změny dat nezmění data u rodiče.

// Objekty, pole
// props.prG  Přímý přístup k vlastnosti reaktivního objektu
// toRef(props.prG) Nový ref objekt, který je ale pouhým odkazam na props.prG. Takže do composables můžu předat jak props.prG, tak toRef(props, 'prG')
// Takže "toRef" pro objekty není třeba. Ale jeho použití není chyba.
// ref(prH)   Kopíruje referenci na objekt. Pokud měním potomka, měním i rodiče.
// ref({...props.prH}) Zákl. přístup pro editaci. Takto vytvořím NEZÁVISLOU kopii rodiče. 

</script>
