const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
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

// const command = process.argv[2];

// if (command == "add") {
//   console.log("Adding note!");
// } else if (command == "remove") {
//   console.log("Removing notes!");
// }
