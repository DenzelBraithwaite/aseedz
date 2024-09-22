<script lang="ts">
  // Hooks
  import { onMount, createEventDispatcher } from 'svelte';

  // Transitions
  import { blur } from 'svelte/transition';

  // Modules/Helpers
  import Typed from 'typed.js';

  // stores
  import { terminalMessages, terminalMessagesLog } from '../stores/terminalMessages';

  const createEvent = createEventDispatcher();
  let showLogs = false;
  let typed: Typed;
  $: currentDisplayedMessage = showLogs ? [...$terminalMessagesLog] : [...$terminalMessages];

  onMount(() => {
    typed = new Typed('#terminal-text', {
      strings: [...currentDisplayedMessage],
      typeSpeed: 10,
    });
  });

  function displayDialogue(): void {
    typed.destroy(); // cleansup last terminal instance, otherwise they stack.
    typed = new Typed('#terminal-text', {
      strings: [...$terminalMessages],
      typeSpeed: 10,
    });
  }
</script>

<div transition:blur={{duration: 1000}} class="terminal-screen">
  <p id="terminal-text"></p>
  <div class="terminal-btn-flex-group">
    <button on:click={() => createEvent('close')} class="btn-terminal">Close</button>
    <button on:click={displayDialogue} class="btn-terminal">Next</button>
  </div>
</div>

<style lang="scss">
  .terminal-screen {
    position: absolute;
    background-color: #121212;
    height: 90%;
    width: 90%;
    border: 2px solid var(--white);
    border-top-width: 24px;
    border-radius: var(--border-radius-small);
    padding: 4px;
    overflow-wrap: break-word;
    transition: all 0.5s ease-out;
  }

  .terminal-btn-flex-group {
    position: absolute;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);
  }

  .btn-terminal {
    cursor: pointer;
    outline: none;
    border: 2px solid var(--white);
    color: var(--white);
    background: none;
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: var(--border-radius-small);
    transition: all 0.3s ease-out;

    &:hover {
      border: 2px solid var(--slate-900);
      color: var(--slate-900);
      background-color: var(--white);
      border-style: double;
      border-width: 4px;
    }
  }

  #terminal-text {
    text-wrap: wrap;
    font-size: 1.5rem;
    width: 100%;
  }
</style>