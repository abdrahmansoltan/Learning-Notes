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

<script lang="ts" setup>
// @ts-nocheck
import { computed, defineEmits, defineProps, onMounted, ref, watch } from 'vue';

interface Item {
  id: number
  name: string
}

const props = defineProps<{
  message?: string
  initialItems?: Item[]
}>()

const emit = defineEmits<{
  (e: 'update:items', items: Item[]): void
}>()

const title = ref('Full Vue 3 Component Reference')
const inputValue = ref('')
const items = ref<Item[]>(props.initialItems || [])
const selectedIds = ref<number[]>([])

const totalItems = computed(() => items.value.length)

const filteredItems = computed(() =>
  items.value.filter((item) =>
    item.name.toLowerCase().includes(inputValue.value.toLowerCase())
  )
)

watch(
  items,
  (newItems) => emit('update:items', newItems),
  { deep: true }
)

const addItem = () => {
  if (inputValue.value.trim()) {
    items.value.push({
      id: Date.now(),
      name: inputValue.value.trim(),
    })
    inputValue.value = ''
  }
}

const toggleItem = (id: number) => {
  const index = selectedIds.value.indexOf(id)
  if (index > -1) {
    selectedIds.value.splice(index, 1)
  } else {
    selectedIds.value.push(id)
  }
}

onMounted(() => {
  console.log('Component mounted')
})
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