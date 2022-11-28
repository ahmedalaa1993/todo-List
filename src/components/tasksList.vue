<template>
  <div v-if="taskStore.type">
    <p class="lead text-primary text-sm-start fw-bolder">
      {{ taskStore.allCount }} Tasks
    </p>
    <div v-for="(task, index) in taskStore.tasks" :key="task">
      <one-task :task="task" :index="index" />
    </div>
  </div>

  <div v-else>
    <p class="lead text-primary text-sm-start fw-bolder">
      {{ taskStore.favCount }} Favourite Tasks
    </p>
    <div v-for="(task, index) in taskStore.favs" :key="task.id">
      <one-task :task="task" :index="index" />
    </div>
  </div>
  <p>{{ taskStore.fav }}</p>
</template>

<script>
import { useTaskstore } from "../stores/storeTasks";
import oneTask from "./oneTask.vue";
export default {
  components: { oneTask },
  name: "tasksList",
  setup() {
    const taskStore = useTaskstore();

    return { taskStore };
  },
};
</script>

<style scoped></style>
