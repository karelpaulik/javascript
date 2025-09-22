<template>
  <section>
    <h4>Part</h4>
    <input type="text" v-model="prt.a" />
    <input type="text" v-model="prt.b" />
    <input type="text" v-model="prt.c" />
    <pre>{{ prt }}</pre>

    <PartCompTS
      :pr-a="prt.a"
      :pr-b="prt.b"
      :pr-c="prt.c"
      :pr-d="prt.d"
      :pr-e="prt.e"
      :pr-f="prt.f"
      :pr-p="prt.p"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definuje rozhraní (interface) pro strukturu objektu prt
interface PrtType {
  a: string;
  b: string;
  c: string;
  d: { d1: string };
  e: { e1: string };
  f: { f1: string };
  g: { g1: string };
  h: { h1: string };
  i: { i1: string };
  p: string[];
}

// Inicializuje reaktivní proměnnou 'prt' s definovaným typem
const prt = ref<PrtType>({
  a: 'aa',
  b: 'bb',
  c: 'cc',
  d: { d1: 'dd' },
  e: { e1: 'ee' },
  f: { f1: 'ff' },
  g: { g1: 'gg' },
  h: { h1: 'hh' },
  i: { i1: 'ii' },
  p: ['pp1', 'pp2'],
});
</script>
