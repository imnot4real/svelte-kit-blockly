<script>
  import * as Blockly from 'blockly';
  import { blocks } from '../blocks/text';
  import { forBlock } from '../generators/javascript';
  import { pythonGenerator } from 'blockly/python';
  import { save, load } from '../serialization';
  import { toolbox } from '../toolbox';

  let ws;

  // Register the blocks and generator with Blockly
  Blockly.common.defineBlocks(blocks);
  Object.assign(pythonGenerator.forBlock, forBlock);

  // Function to reset code and output divs, show generated code, and eval it
  const runCode = () => {
    const code = pythonGenerator.workspaceToCode(ws);
    document.getElementById('generatedCode').innerText = code;
    document.getElementById('output').innerHTML = '';
  };

  // Lifecycle hook to set up Blockly when the component is mounted
  import { onMount } from 'svelte';
  onMount(() => {
    ws = Blockly.inject('blocklyDiv', { toolbox });
    load(ws);
    runCode();

    // Save changes and run code when workspace state changes
    ws.addChangeListener((e) => {
      if (!e.isUiEvent) {
        save(ws);
        if (
          e.type !== Blockly.Events.FINISHED_LOADING &&
          !ws.isDragging()
        ) {
          runCode();
        }
      }
    });
  });
</script>

<style>
  #pageContainer {
    display: flex;
    width: 100%;
    height: 100vh;
  }

  #blocklyDiv {
    flex-grow: 1;
    min-width: 600px;
    height: 100%;
  }

  #outputPane {
    display: flex;
    flex-direction: column;
    width: 400px;
    overflow: auto;
    margin: 1rem;
  }

  #generatedCode {
    height: 50%;
    background-color: rgb(247, 240, 228);
  }

  #output {
    height: 50%;
  }
</style>

<!-- HTML structure for Blockly workspace and output -->
<div id="pageContainer">
  <div id="blocklyDiv"></div>
  <div id="outputPane">
    <div id="generatedCode"></div>
    <div id="output"></div>
  </div>
</div>
