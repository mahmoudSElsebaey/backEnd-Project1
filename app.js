const fs = require("fs");
const yargs = require("yargs");
const orders = require("./orders");

// ====> Add
yargs.command({
  command: "add",
  describe: "adding new item",
  builder: {
    fname: {
      describe: "to add first name",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "to add last name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    orders.addData(x.id, x.fname, x.lname, x.city, x.age, x.gpa);
  },
});

// ====> delete
yargs.command({
  command: "delete",
  describe: "deleting an item",
  handler: (x) => {
    orders.deleteData(x.id);
  },
});

// ====> Find , Read or Search
yargs.command({
  command: "find",
  describe: "finding an item",
  builder: {
    id: {
      describe: "this is id to use it to find an item that has this id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    orders.findData(x.id);
  },
});

yargs.command({
  command: "showList",
  describe: "to show list from the data",
  handler: () => {
    orders.listData();
  },
});

yargs.command({
  command: "showAllData",
  describe: "to show list from the data",
  handler: () => {
    orders.showAllData();
  },
});

// console.log(yargs.argv);
yargs.parse();
