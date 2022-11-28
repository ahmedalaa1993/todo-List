<template>
  <div class="container text-center p-4 bg-primary bg-opacity-10">
    <h1 class="pt-3 pb-4">What is your task ?</h1>
    <Heading class="pb-3" />
    <user-options />
    <tasks-list />
  </div>
</template>

<script>
import Heading from "./components/Heading.vue";
import tasksList from "./components/tasksList.vue";
import UserOptions from "./components/UserOptions.vue";
import { useTaskstore } from "./stores/storeTasks";
export default {
  // name: "App",
  components: {
    Heading,
    tasksList,
    UserOptions,
  },

  setup() {
    const taskStore = useTaskstore();
    function bkData() {
      return (taskStore.tasks = [
        ...JSON.parse(localStorage.getItem("persons")),
      ]);
    }

    // bkData() {
    //   return (this.tasks.value = [
    //     ...JSON.parse(localStorage.getItem("persons")),
    //   ]);
    // },

    return { taskStore, bkData };
  },
};
</script>

<style scoped></style>
