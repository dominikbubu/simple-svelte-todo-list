<script>
import 'animate.css';

export let data;

const removeTodo = (todo) => {
  $data = $data.filter(t => t.id !== todo.id)
};

</script>

<main>
    <div>
        {#each $data as item (item.id)}
            <h3 class="animate__bounceIn">{item.name} <span on:click={() => {
               removeTodo(item)
            }}>X</span></h3>
        {/each}
    </div>
</main>

<style>
    div {
        margin-top: 2em;
    }

    h3 {
        font-size: 2em;
        margin-top: .4em;
    }

    span {
        font-size: 1em;
        cursor: pointer;
        color: red;
    }
</style>