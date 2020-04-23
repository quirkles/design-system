# Button demo

## To develop

Run `npm run dev` to start the webpack dev server with live reloading

## To serve

Run `npm run start` to clean, build, and run the server

## To test

Run `npm run test` run jest, unit tests are, admittedly, lacking in coverage, i just wanted to set up jest and get some component tests written, the non component units are not tested, just a time constraint really.

## Notes

- I used webpack top build and serve and run a dev server, mostly because i havent used it in a long time! I wanted to get up to speed and exercise those muscles a little. I use the dev-server middleware to spin up a simple dev server with live hot module reloading.
- I wrote a couple of higher order components to 1: handle the responsiveness and inject the active breakpoint as a prop to its child and 2: just show a demo allowing for switching he styles of the card
- For the responsiveness i just created an observable from the window resize event and debounced and piped it through a sunction to grab the active breakpoint and emit an event when the breakpoint changed, then used hooks to wire up that observable to allow for passing the breakpoint to its children.
- I used sass and cribbed from zurb foundation to allow for creating a color palette and manipulating colors and such.
