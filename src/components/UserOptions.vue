<template>
  <div class="row p-4">
    <div class="col-6 row">
      <div class="col-9">
        <input
          class="form-control form-control-lg col-"
          type="text"
          v-model="search"
        />
      </div>
      <button class="btn btn-primary btn-lg col-3">Search</button>
    </div>
    <div class="col-6 text-end">
      <button @click="taskStore.typeTrue()" class="btn btn-primary mx-2 btn-lg">
        All Tasks
      </button>
      <button @click="taskStore.typeFalse()" class="btn btn-primary btn-lg">
        Favourite Tasks
      </button>
    </div>
  </div>
</template>

<script>
import { useTaskstore } from "../stores/storeTasks";
export default {
  name: "UserOptions",
  setup() {
    const taskStore = useTaskstore();

    return { taskStore };
  },
};
</script>

<style scoped></style>
