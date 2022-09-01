<template>
  <div id="app">
    <Header/>
    <AddTask/>
    <TaskManager/>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './components/layout/Header';
import AddTask from './components/AddTask';
import TaskManager from './components/TaskManager';

export default {
  name: 'app',
  components: {
    Header,
    AddTask,
    TaskManager
  }
}
</script>
