import { Order } from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock['led'] = function (block) {
  const pin = block.getFieldValue('PIN');
  const status = block.getFieldValue('STATUS');

  // Generate the function call for this block.
  const code = `board.digital[${pin}].write(${status})\n`;
  return code;
};

forBlock['delay'] = function (block) {
  const seconds = block.getFieldValue('SECONDS');

  // Generate the function call for this block.
  const code = `time.sleep(${seconds})\n`;
  return code;
};

forBlock['button_control'] = function (block) {
  const buttonPin = block.getFieldValue('BUTTON_PIN');
  const ledPin = block.getFieldValue('LED_PIN');

  // Generate the function call for this block.
  const code = `
if board.digital[${buttonPin}].read() == 1:  # Assuming active high button input
    board.digital[${ledPin}].write(1)  # Turn LED on
else:
    board.digital[${ledPin}].write(0)  # Turn LED off\n
`;
  return code;
};