module.exports = {
  compress: {
    // Compress options
    drop_console: true, // Remove console.log statements
    drop_debugger: true, // Remove debugger statements
    pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'], // Remove specific console methods
    passes: 2, // Number of times to run compress
    dead_code: true, // Remove unreachable code
    conditionals: true, // Optimize if-s and conditional expressions
    evaluate: true, // Evaluate constant expressions
    booleans: true, // Optimize boolean expressions
    loops: true, // Optimize loops
    unused: true, // Drop unused variables/functions
    toplevel: true, // Drop unused toplevel functions and variables
    if_return: true, // Optimize if-s followed by return/continue
    join_vars: true, // Join consecutive var statements
    collapse_vars: true, // Collapse single-use non-constant variables
    reduce_vars: true, // Optimize variable assignments
  },
  mangle: {
    // Mangle options
    toplevel: true, // Mangle names declared in the toplevel scope
    properties: {
      regex: /^_/, // Only mangle properties that start with underscore
    },
  },
  format: {
    // Format options
    comments: false, // Remove comments
    beautify: false, // Don't beautify output
    preamble: null, // No preamble
  },
  sourceMap: {
    // Source map options
    filename: 'bundle.min.js',
    url: 'bundle.min.js.map',
  },
}; 