A Tiny AngularJS + Socket.IO Example
=====================================
Sending Socket.IO events from a server into an AngularJS application and back in 20 lines of node.js server, 20 lines of client JS, and 5 lines of HTML.

This is heavily based on, but pared down to the essence of, the examples at:

* [This HTML5Rocks Tutorial](http://www.html5rocks.com/en/tutorials/frameworks/angular-websockets)
* [This StackOverflow Question](http://stackoverflow.com/questions/13575856/node-js-angularjs-socket-io-pushed-data-not-available-in-the-controller)
* [This email thread](https://groups.google.com/forum/#!topic/angular/ZWbeEBkxPXE)
* [AngularJS.org](http://www.angularjs.org)

Credit especially to @btford for the factory pattern that makes it all work.

Running
-------
Start the node.js server:

    $ node server.js

Go to `http://localhost:8080` in your browser.

