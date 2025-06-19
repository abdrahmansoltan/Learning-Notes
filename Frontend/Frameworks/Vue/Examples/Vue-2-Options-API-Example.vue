<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>

    <p v-if="message">{{ message }}</p>

    <input
      v-model="inputValue"
      placeholder="Type something..."
    />
    <button @click="addItem">Add</button>

    <ul>
      <li
        v-for="item in filteredItems"
        :key="item.id"
        :class="{ selected: selectedIds.includes(item.id) }"
        @click="toggleItem(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>

    <p>Total items: {{ totalItems }}</p>

    <slot name="footer">Default footer content</slot>
  </div>
</template>

<script>
export default {
  name: 'FullComponentVue2',

  props: {
    message: {
      type: String,
      default: ''
    },
    initialItems: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      title: 'Full Vue 2 Component Reference',
      inputValue: '',
      items: [...this.initialItems],
      selectedIds: []
    }
  },

  computed: {
    totalItems() {
      return this.items.length
    },
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.inputValue.toLowerCase())
      )
    }
  },

  watch: {
    items: {
      handler(newItems) {
        this.$emit('update:items', newItems)
      },
      deep: true
    }
  },

  methods: {
    addItem() {
      if (this.inputValue.trim()) {
        this.items.push({
          id: Date.now(),
          name: this.inputValue.trim()
        })
        this.inputValue = ''
      }
    },
    toggleItem(id) {
      const index = this.selectedIds.indexOf(id)
      if (index > -1) {
        this.selectedIds.splice(index, 1)
      } else {
        this.selectedIds.push(id)
      }
    }
  },

  mounted() {
    console.log('Component mounted')
  }
}
</script>

<style scoped>
.component-wrapper {
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s;
}

li.selected {
  background-color: lightblue;
}

input {
  padding: 0.4rem;
  margin-right: 0.5rem;
}
</style>