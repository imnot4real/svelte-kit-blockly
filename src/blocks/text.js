import * as Blockly from 'blockly/core';

// Define the 'led' block
const ledBlock = {
  type: 'led',
  message0: "toggle LED at pin %1 to status %2",
  args0: [
    {
      type: "field_input",
      name: "PIN",
      text: "0"
    },
    {
      type: "field_dropdown",
      name: "STATUS",
      options: [
        ["on", "1"],
        ["off", "0"]
      ]
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: 'Toggle the LED on or off at the specified pin.',
  helpUrl: ''
};

// Define the 'delay' block
const delayBlock = {
  type: 'delay',
  message0: "delay by %1 seconds",
  args0: [
    {
      type: "field_number",
      name: "SECONDS",
      value: 0,
      min: 0,
      precision: 0.1
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: 'Pause the program for the specified number of seconds.',
  helpUrl: ''
};

// Define the 'button_control' block
const buttonControlBlock = {
  type: 'button_control',
  message0: "control LED at pin %1 with button at pin %2",
  args0: [
    {
      type: "field_input",
      name: "LED_PIN",
      text: "0"
    },
    {
      type: "field_input",
      name: "BUTTON_PIN",
      text: "0"
    }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230,
  tooltip: 'Control an LED with a button. Turn the LED on or off based on button input.',
  helpUrl: ''
};

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  ledBlock, delayBlock, buttonControlBlock, setupBlock,
]);
