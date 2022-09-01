<template>
  <div>
    <input
      type="text"
      v-model="task.name"
      class="name"
      placeholder="Add Task"
    />

    <button @click="onSubmit" class="btn-submit">Add</button>

    <div class="error">{{ error }}</div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";

export default {
  name: "AddTask",
  data() {
    return {
      task: {
        name: "",
        completed: false,
      },
      error: "",
    };
  },

  methods: {
    ...mapActions(["addTask"]),

    onSubmit() {
      if (this.task.name.trim().length >= 5) {
        this.addTask(this.task);
        this.error = "Done";
      } else {
        this.error = "Length";
      }
    },
  },
};
</script>