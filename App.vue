<template>
	<div id="app">
		<div>
			<input type="text" v-model="newTodo" @keyup.enter="addTodo">
			<button  @click="addTodo">Add</button>
		</div>
		<ul class="todoList">
			<li v-for="todo in todos" >
				{{ todo.name }} -
				<button @click="deleteTodo(todo)">Remove</button>
			</li>
		</ul>
	</div>

</template>

<script>
import { db } from "./firebase";

export default {
  name: "app",
  data() {
    return {
      todos: [],
      newTodo: ""
    };
  },
  firestore() {
    return {
      todos: db.collection("todos")
    };
  },
  methods: {
    addTodo: function() {
      this.$firestore.todos.add({
        name: this.newTodo,
        timestamp: new Date()
      });
      this.newTodo = "";
    },
    deleteTodo: function(todo) {
      this.$firestore.todos.doc(todo[".key"]).delete();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todoList {
  list-style: none;
}
</style>
