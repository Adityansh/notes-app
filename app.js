const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// just to check github
// added github complete
// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note's title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note's body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    console.log("listing the note");
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("Reading the note");
  },
});

yargs.parse();
