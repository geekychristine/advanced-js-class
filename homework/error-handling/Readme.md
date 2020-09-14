# Error Handling

## Plan for the Worst

There are times while we're writing code in our programs when errors will occur, and it's important that we handle them _gracefully._ You could write an entire application without handling any errors at all, but if you expect anyone else to work with your code, you should anticipate possibilities that would prevent your code from running as expected, and "throw" helpful errors to assist the user of your code to figure out what went wrong and how to fix it.

This kind of thinking in software design is called ["Defensive Programming/Coding"](https://en.wikipedia.org/wiki/Defensive_programming). For this assignment, we're going to intentionally throw an Error based on certain conditions we know could go wrong. This is called ["Error Handling"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Exception_handling_statements), where we _handle_ the error by telling our program what it should do when it occurs.

## Error Handling

Without error-handling, our programs will "fail silently", not giving the user any hint as to what went wrong, which could mean hours of frustration for them trying to reproduce the issue and troubleshoot the cause. To create a better developer experience, let's always try to ask ourselves "what if" and try to think of ways our functions could break.

In JavaScript, there's a special Keyword called `throw` that is only used for errors (or "exceptions" as it's called in most programming languages). It will cause the execution of the code to stop, and pass execution over to the first `catch` block in the call stack. If none exists, the program will terminate.
