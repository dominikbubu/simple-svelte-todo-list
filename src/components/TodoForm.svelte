<script>
export let data;

const addToArray = (item) => {
    $data = [...$data, {
        name: item,
        status: false,
        id: Date.now()
    }];
};

const handleKeypress = (e) => {
    if(e.key === 'Enter') {
        let value = e.target.value;
        if(value === '') {
            alert('Please enter a value');
        } else {
            addToArray(value);
            e.target.value = '';
        }
    }
};
</script>

<main>
    <input type="text" on:keypress={handleKeypress}>
</main>

<style>
    input {
        margin-top: 3em;
		padding: 1em 2em;
        outline: none;
	}
</style>