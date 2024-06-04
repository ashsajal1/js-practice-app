import { QnaTypes } from "./javascript";

export const vue3Concepts: QnaTypes[] = [
  {
    id: "vue3-1",
    question: "What are the key features of the Composition API in Vue 3?",
    answer:
      "The Composition API provides a flexible, scalable, and reactive way to write Vue components. Key features include composable functions, reactive state management, better TypeScript support, and improved code organization.",
    topic: "vue3",
    subTopic: "Composition API",
    code: `
  import { ref, computed } from 'vue'
  
  export default {
    setup() {
      const count = ref(0)
      const doubleCount = computed(() => count.value * 2)
  
      function increment() {
        count.value++
      }
  
      return {
        count,
        doubleCount,
        increment
      }
    }
  }
  `,
    quiz: {
      question: "What is the main purpose of the Composition API in Vue 3?",
      options: [
        "To provide a more organized and scalable way to write Vue components",
        "To improve performance of Vue applications",
        "To add better TypeScript support",
        "All of the above",
      ],
      answer: "All of the above",
    },
  },
  {
    id: "vue3-2",
    question:
      "Explain the differences between the Options API and the Composition API in Vue 3",
    answer:
      "The main differences are: 1) Organizing component logic: Options API uses options, Composition API uses functions. 2) Reactivity: Options API uses 'this', Composition API uses reactive refs. 3) TypeScript support: Composition API is designed for TypeScript. 4) Reusability: Composition API makes it easier to create reusable, testable functions.",
    topic: "vue3",
    subTopic: "Composition API vs Options API",
    code: `
  // Options API
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      }
    }
  }
  
  // Composition API
  import { ref } from 'vue'
  
  export default {
    setup() {
      const count = ref(0)
  
      function increment() {
        count.value++
      }
  
      return {
        count,
        increment
      }
    }
  }
  `,
    quiz: {
      question:
        "What is the main difference in organizing component logic between the Options API and Composition API?",
      options: [
        "Options API uses options, Composition API uses functions",
        "Options API uses classes, Composition API uses functions",
        "There is no difference in organizing component logic",
        "Options API uses mixins, Composition API uses composables",
      ],
      answer: "Options API uses options, Composition API uses functions",
    },
  },
  {
    id: "vue3-3",
    question: "What are the key differences between Vue 2 and Vue 3?",
    answer:
      "Key differences include: 1) Performance improvements, 2) Composition API, 3) Better TypeScript support, 4) New built-in components (Fragment, Teleport, Suspense), 5) Smaller bundle size, and 6) Improved debugging experience. There are also some breaking changes.",
    topic: "vue3",
    subTopic: "Vue 2 vs Vue 3",
    code: `
  // Vue 2
  new Vue({
    el: '#app',
    data: {
      count: 0
    },
    methods: {
      increment() {
        this.count++
      }
    }
  })
  
  // Vue 3
  import { createApp, ref } from 'vue'
  
  const app = createApp({
    setup() {
      const count = ref(0)
  
      function increment() {
        count.value++
      }
  
      return {
        count,
        increment
      }
    }
  })
  
  app.mount('#app')
  `,
    quiz: {
      question:
        "Which of the following is NOT a key difference between Vue 2 and Vue 3?",
      options: [
        "Performance improvements",
        "Composition API",
        "Smaller bundle size",
        "Improved data binding",
      ],
      answer: "Improved data binding",
    },
  },
];
