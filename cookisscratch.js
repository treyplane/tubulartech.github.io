class cookie {
  getInfo() {
    return {
      id: 'strictequalityexample', // change this if you make an actual extension!
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'cookie',
          blockType: Scratch.BlockType.COMMED,
          text: ' save [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            };
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
     document.cookie = args.ONE;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
