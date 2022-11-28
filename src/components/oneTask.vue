<template>
  <div class="row p-4 text-start fs-4">
    <div
      class="col-9 pb-3 fw-bolder border-bottom border-primary rounded"
      style="--bs-border-opacity: 0.5"
    >
      <div>{{ index + 1 }}- {{ task.title }}</div>
    </div>
    <div class="py-3 col-3 text-center text-primary">
      <i
        @click="taskStore.deleteTask(task.id)"
        class="fa-solid fa-trash fa-xl px-3 pe-auto"
      ></i>
      <i
        @click="taskStore.toggleFav(task.id)"
        class="fa-sharp fa-solid fa-heart fa-xl px-3 px-4"
        :class="{ 'opacity-50': !task.isFav }"
      ></i>
    </div>
  </div>
</template>

<script>
import { useTaskstore } from "../stores/storeTasks";
export default {
  name: "oneTask",
  props: ["task", "index"],
  setup() {
    const taskStore = useTaskstore();

    return { taskStore };
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
}
</style>
