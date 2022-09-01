<template>
  <div class="todo-item">
    <p>
      <input type="checkbox" class="cb" @click="markComplete">
      {{task.name}}
      <button @click="deleteTask(task)" class="btn-del">Delete</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Task",
  props: ["task"],
  methods: {
    ...mapActions(['removeTask', 'updateTask']),
    markComplete() {
      const updatedTask = {
          id: this.task.id,
          name: this.task.name,
          completed: !this.task.completed
      };
      this.updateTask(updatedTask);
    },
    deleteTask(data) {
      this.removeTask(data);
    }
  }
}
</script>
