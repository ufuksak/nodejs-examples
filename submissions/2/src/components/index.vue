<template>
  <div id="items">
    <h1>{{ rItems.name }}</h1>
    <div v-for="item in rItems.items" class="item" v-bind:key="item.score">
      <h3>Items with Score {{ item.score }}</h3>
      <ul>
        <li :class="item.elements.length === 1 ? 'only-one' : ''"
          v-for="element in item.elements"
          v-bind:key="element.id">
          {{ element.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Object
  },
  computed: {
    rItems: function () {
      this.items.items.sort((a, b) => b.name.localeCompare(a.name));

      let restructuredItems = {};

      let newItems = [];
      this.items.items.forEach((el) => {
        if (!newItems.some((e) => e.score === el.score)) {
          let e = { score: el.score, elements: [] };
          e.elements.push({ id: el.id, name: el.name });
          newItems.push(e);
        } else {
          let item = newItems.find((e) => e.score === el.score);
          item.elements.push({ id: el.id, name: el.name });
        }
      });

      restructuredItems.name = this.items.name;
      restructuredItems.items = newItems;

      return restructuredItems;
    }
  }
};
</script>

<style scoped>
.only-one {
  color: red;
}
</style>