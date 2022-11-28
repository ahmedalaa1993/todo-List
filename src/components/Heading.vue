<template>
  <div class="row">
    <div class="col-9">
      <input
        class="form-control form-control-lg"
        type="text"
        v-model="newtask"
        placeholder="enter your task"
      />
    </div>
    <button
      @click="addNewTask"
      class="col-3 btn btn-outline-primary"
      type="submit"
    >
      ADD
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useTaskstore } from "../stores/storeTasks";

export default {
  name: "Heading",
  setup() {
    const taskStore = useTaskstore();
    const newtask = ref("");

    function addNewTask() {
      if (newtask.value.length > 0) {
        taskStore.addTask({
          id: Math.floor(Math.random() * 1000),
          title: newtask.value,
          isFav: false,
        });
      }
      newtask.value = "";
    }

    return { newtask, taskStore, addNewTask };
  },
};
</script>

<style scoped></style>
