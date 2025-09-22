**Hlavní rozdíly** v syntaxi, kterou Vue používá pro definici props v JavaScriptu a TypeScriptu. 

---

### JavaScript (`defineProps` s velkým písmenem)

V JavaScriptu používáte globální **konstruktory**, které jsou velkými písmeny, k určení typu prop. Jsou to v podstatě vestavěné JavaScriptové třídy, které reprezentují typy.

* `String` pro řetězce
* `Number` pro čísla
* `Boolean` pro boolean hodnoty
* `Array` pro pole
* `Object` pro objekty
* `Function` pro funkce
* `Symbol` pro symboly

Tento přístup je součástí **validace props** ve Vue, nikoli deklarace typů v pravém slova smyslu.

```javascript
const props = defineProps({
  prA: String,
  prB: String,
  prC: String,
  prD: Object,
  prE: Object,
  prF: Object,
  prP: Array,
})
```

### TypeScript (`defineProps` s malým písmenem)

V TypeScriptu používáte **typové anotace**, které jsou malými písmeny a odrážejí základní primitivní typy v jazyce.

* `string` pro řetězce
* `number` pro čísla
* `boolean` pro boolean hodnoty
* `string[]` pro pole řetězců
* `{ d1: string }` pro definici tvaru objektu

Tento způsob poskytuje silnou typovou kontrolu, která je kontrolována v době kompilace. Je mnohem podrobnější a bezpečnější než validace v JavaScriptu, protože kontroluje nejen typ, ale i **strukturu dat**.

```typescript
const props = defineProps<{
  prA: string;
  prB: string;
  prC: string;
  prD: { d1: string };
  prE: { e1: string };
  prF: { f1: string };
  prP: string[];
}>();
```
