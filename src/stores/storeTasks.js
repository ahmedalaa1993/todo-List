import { defineStore } from "pinia";

export const useTaskstore = defineStore("taskStore", {
  state: () => ({
    type: true,

    tasks: [...JSON.parse(localStorage.getItem("tasks"))],

    //[ {
    //   id: 1,
    //   title: "task 1",
    //   isFav: false,
    // },
    // {
    //   id: 2,
    //   title: "task 2",
    //   isFav: false,
    // },
    // {
    //   id: 3,
    //   title: "task 3",
    //   isFav: true,
    // }],
  }),
  getters: {
    favs() {
      return this.tasks.filter((i) => i.isFav == true);
    },
    favCount() {
      return this.tasks.reduce((acc, i) => {
        return i.isFav ? acc + 1 : acc;
      }, 0);
    },
    allCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    typeTrue() {
      this.type = true;
    },
    typeFalse() {
      this.type = false;
    },
    addTask(newTask) {
      this.tasks.push(newTask);
      let Arr = this.tasks;
      localStorage.setItem("tasks", JSON.stringify(Arr));
    },
    deleteTask(id) {
      console.log("del", id);
      return (
        (this.tasks = this.tasks.filter((i) => i.id !== id)),
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
      );
    },
    toggleFav(id) {
      const task = this.tasks.find((i) => i.id == id);
      task.isFav = !task.isFav;
      // this.isfav = !this.isfav;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      console.log(JSON.parse(localStorage.getItem("tasks")));
    },
  },
});
