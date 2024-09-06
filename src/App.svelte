<script lang="ts">
  // Hooks
  import { onMount } from 'svelte';

  // Modules/Helpers
  import Typed from 'typed.js';
  import { World } from './lib/helpers/index';

  let typed: Typed;

  onMount(() => {
    typed = new Typed('#terminal-text', {
      strings: [
        `Remaining Actions: ${saveFile.remainingActions}<br>
        Days Passed: ${saveFile.dayCount}<br>
        Current Day: ${saveFile.currentDay}<br>
        Day of the year: ${saveFile.currentDayIndex}<br>
        Current Week: ${saveFile.currentWeek}<br>
        Current Month: ${saveFile.currentMonth} Moon<br>
        Month of the Year: ${saveFile.currentMonthIndex}<br>
        Current Year: ${saveFile.currentYearIndex} - ${saveFile.currentYear}<br>
        Current Season: ${saveFile.currentSeason}<br>
        Press Start to continue...`
      ],
      typeSpeed: 15,
    });
  })

  const saveFile = new World();
  console.log(saveFile);

  // TODO: Delete, just a temp reminder
//   var typed = new Typed('#element', {
//   /**
//    * @property {array} strings strings to be typed
//    * @property {string} stringsElement ID of element containing string children
//    */
//   strings: [
//     'These are the default values...',
//     'You know what you should do?',
//     'Use your own!',
//     'Have a great day!',
//   ],
//   stringsElement: null,

//   /**
//    * @property {number} typeSpeed type speed in milliseconds
//    */
//   typeSpeed: 0,

//   /**
//    * @property {number} startDelay time before typing starts in milliseconds
//    */
//   startDelay: 0,

//   /**
//    * @property {number} backSpeed backspacing speed in milliseconds
//    */
//   backSpeed: 0,

//   /**
//    * @property {boolean} smartBackspace only backspace what doesn't match the previous string
//    */
//   smartBackspace: true,

//   /**
//    * @property {boolean} shuffle shuffle the strings
//    */
//   shuffle: false,

//   /**
//    * @property {number} backDelay time before backspacing in milliseconds
//    */
//   backDelay: 700,

//   /**
//    * @property {boolean} fadeOut Fade out instead of backspace
//    * @property {string} fadeOutClass css class for fade animation
//    * @property {boolean} fadeOutDelay Fade out delay in milliseconds
//    */
//   fadeOut: false,
//   fadeOutClass: 'typed-fade-out',
//   fadeOutDelay: 500,

//   /**
//    * @property {boolean} loop loop strings
//    * @property {number} loopCount amount of loops
//    */
//   loop: false,
//   loopCount: Infinity,

//   /**
//    * @property {boolean} showCursor show cursor
//    * @property {string} cursorChar character for cursor
//    * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
//    */
//   showCursor: true,
//   cursorChar: '|',
//   autoInsertCss: true,

//   /**
//    * @property {string} attr attribute for typing
//    * Ex: input placeholder, value, or just HTML text
//    */
//   attr: null,

//   /**
//    * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
//    */
//   bindInputFocusEvents: false,

//   /**
//    * @property {string} contentType 'html' or 'null' for plaintext
//    */
//   contentType: 'html',

//   /**
//    * Before it begins typing
//    * @param {Typed} self
//    */
//   onBegin: (self) => {},

//   /**
//    * All typing is complete
//    * @param {Typed} self
//    */
//   onComplete: (self) => {},

//   /**
//    * Before each string is typed
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   preStringTyped: (arrayPos, self) => {},

//   /**
//    * After each string is typed
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStringTyped: (arrayPos, self) => {},

//   /**
//    * During looping, after last string is typed
//    * @param {Typed} self
//    */
//   onLastStringBackspaced: (self) => {},

//   /**
//    * Typing has been stopped
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onTypingPaused: (arrayPos, self) => {},

//   /**
//    * Typing has been started after being stopped
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onTypingResumed: (arrayPos, self) => {},

//   /**
//    * After reset
//    * @param {Typed} self
//    */
//   onReset: (self) => {},

//   /**
//    * After stop
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStop: (arrayPos, self) => {},

//   /**
//    * After start
//    * @param {number} arrayPos
//    * @param {Typed} self
//    */
//   onStart: (arrayPos, self) => {},

//   /**
//    * After destroy
//    * @param {Typed} self
//    */
//   onDestroy: (self) => {},
// });
</script>

<main class="main-content">
  <div class="terminal-screen">
    <p id="terminal-text"></p>
  </div>
</main>

<style lang="scss">
  .main-content {
    height: 100vh; // dvh not as supported (not at all in firefox)
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .terminal-screen {
    background-color: #121212;
    height: 90%;
    width: 90%;
    border: 2px solid var(--white);
    border-top-width: 24px;
    border-radius: 2px;
    padding: 4px;
    overflow-wrap: break-word;
  }

  #terminal-text {
    text-wrap: wrap;
    font-size: 1.5rem;
    width: 100%;
  }
</style>
