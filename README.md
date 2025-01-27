# Blockly Arduino Control Interface

## Project Overview
This project implements a visual programming interface using Blockly to create Arduino control programs. The application allows users to create programs for LED control and button interactions using a drag-and-drop interface, which then generates the corresponding Python code.

## Features

### Custom Blocks
1. LED Control Block
   - Allows toggling LED state on specified pins
   - Parameters: PIN number and STATE (on/off)
   - Generates corresponding Python code for digital pin control

2. Delay Block
   - Implements timing delays in the program
   - Parameter: Duration in seconds
   - Generates Python time.sleep() commands

3. Button Control Block
   - Creates button-LED interaction logic
   - Parameters: LED_PIN and BUTTON_PIN
   - Generates if-else logic for button state checking

### Technical Implementation
- Built using SvelteKit for the frontend framework
- Integrates Blockly for visual programming
- Generates Python code compatible with Arduino control
- Implements workspace persistence using local storage
- Features a split-pane interface with live code preview

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation Steps
1. Clone the repository:
```bash
git clone [repository-url]
cd blockly-arduino-control
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Access the application at `http://localhost:3000`

## Project Structure
```
src/
├── App.svelte              # Main application component
├── main.js                 # Application entry point
├── components/
│   └── BlocklyComponent.svelte  # Blockly workspace component
├── blocks/
│   └── text.js            # Custom block definitions
├── generators/
│   └── javascript.js      # Code generation logic
├── serialization.js       # Workspace state management
└── toolbox.js            # Toolbox configuration
```

## Sample Program
Here's an example program that demonstrates button-controlled LED functionality:

1. Place a "button_control" block in the workspace
2. Set the LED pin to 13 and button pin to 2
3. The generated code will look like this:
```python
if board.digital[2].read() == 1:  # Read button state
    board.digital[13].write(1)    # Turn LED on
else:
    board.digital[13].write(0)    # Turn LED off
```

## Technical Details

### Block Definitions
Custom blocks are defined in `text.js` using Blockly's block definition format. Each block includes:
- Type identifier
- Input fields configuration
- Visual styling
- Connection types
- Tooltip information

### Code Generation
The application uses Python code generation to create Arduino-compatible code:
- LED commands translate to digital pin operations
- Timing uses Python's time.sleep()
- Button logic generates conditional statements

### Workspace Features
- Automatic code generation on block changes
- Workspace state persistence between sessions
- Real-time code preview
- Error handling and validation

## Future Enhancements
1. Additional Hardware Support
   - Support for analog inputs/outputs
   - PWM control for LED brightness
   - Multiple button combinations

2. Interface Improvements
   - Custom block categories
   - Code validation
   - Download generated code
   - Circuit visualization

3. Advanced Features
   - Serial communication blocks
   - Custom function definitions
   - Variable management
   - Loop constructs

## Known Limitations
1. Currently generates Python code only
2. Limited to digital input/output operations
3. No direct Arduino upload capability
4. Basic error handling

## Troubleshooting
1. Blank Screen
   - Clear browser cache
   - Verify all dependencies are installed
   - Check browser console for errors

2. Code Generation Issues
   - Verify block connections
   - Check pin number validity
   - Ensure proper block sequence

## Contributing
Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request with detailed description

## License
This project is licensed under the MIT License.
