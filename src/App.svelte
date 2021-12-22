<script>
import { data } from './Stores/TodoStore';
import TodoForm from "./components/TodoForm.svelte";
import TodoList from './components/TodoList.svelte';

</script>

<main>
	<h1>Todo</h1>

	<TodoForm {data}/>
	<TodoList {data}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 5em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>