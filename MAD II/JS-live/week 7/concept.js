//    ┌──────────────────┐
//    │ Parent Component │          The Complete Communication Loop
//    └────────┬─────────┘          Parent to Child: Uses Props (Data goes down).
//             │                    Child to Parent: Uses Emits (Events go up).
//     Props   │  (Data Down)
//             ▼
//    ┌──────────────────┐
//    │ Child Component  │
//    └────────┬─────────┘
//             │
//     Emits   │  (Events/Signals Up)
//             ▼
//    ┌──────────────────┐
//    │ Parent Component │
//    └──────────────────┘

// 1. Child Component (CustomButton.vue)
// The child uses defineEmits to announce an event.
//  <button @click="$emit('increase')">Click Me</button>

// 2. Parent Component (App.vue)
// The parent listens to that signal using @ (v-on) and updates its own data.
//  <CustomButton @increase="count++" />

// Parent ➡️ Child (डेटा भेजना): पैरेंट में : लगाओ ➡️ चाइल्ड में defineProps से पकड़ो.
// Like -- defineProps(['username'])
// Child ➡️ Parent (डेटा भेजना): चाइल्ड में $emit करो ➡️ पैरेंट में @ से पकड़ो.

//___________________________________________________________________________________________________


// Vuex is an official state management pattern and library for Vue.js applications.


// Grandparent ──> Parent ──> Child ──> Grandchild ❌

// With Vuex (Clean):
//    ┌────────────────────────┐
//    │       Vuex Store       │ <─── Centralized Box 📦
//    └─┬──────────┬──────────┬┘
//      │          │          │
//      ▼          ▼          ▼
// Grandparent   Parent   Grandchild ─── (Direct Access ✅)



// There are four main parts

//    ┌────────────────────────┐
//    │          State         │ <─── Store Data Like - Data property
//    └─┬──────────┬──────────┬┘
//    ┌────────────────────────┐
//    │        Getters         │ <─── Filter Data Like - Computed properties
//    └─┬──────────┬──────────┬┘
//    ┌────────────────────────┐
//    │       Mutations        │ <─── Change in State Data  -- Synchronous
//    └─┬──────────┬──────────┬┘
//    ┌────────────────────────┐
//    │        Actions         │ <─── Api Call Managament -- Asynchronous
//    └─┬──────────┬──────────┬┘
// 
