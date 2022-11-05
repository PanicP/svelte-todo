<script>
    import { store } from '../../store/store'

    let inputVal = ''
    let isInputEditting = false
    let inputRef
    const handleSubmitInput = event => {
        if (event.key === 'Enter') {
            $store.tasks = [...$store.tasks, inputVal]
            // inputRef.blur()
            inputVal = ''
        }
    }

    const handleRemoveTask = index => {
        console.log(index)
        $store.tasks = $store.tasks.filter((_, i) => i !== index)
    }

    const handleEditting = () => {
        isInputEditting = true
    }
</script>

<div>
    <div class="title">
        <p>This is a todo apps</p>
    </div>
    <div class="input">
        <input
            type="text"
            aria-label="Task"
            placeholder="Please enter a new task"
            bind:value={inputVal}
            bind:this={inputRef}
            on:keypress={handleSubmitInput}
        />
    </div>
    <div class="tasks">
        {#each $store.tasks as task, index}
            {#if isInputEditting}
                <input
                    type="text"
                    aria-label="Task"
                    placeholder="Please enter a new task"
                    bind:value={inputVal}
                    bind:this={inputRef}
                    on:keypress={handleSubmitInput}
                />
            {:else}
                <div>{task}</div>
            {/if}

            <!-- <button on:click={() => handleEditting()}>edit</button> -->
            <button on:click={() => handleRemoveTask(index)}>X</button>
        {/each}
    </div>
</div>

<style>
</style>
