const fs = require("fs");

// load data
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

// Save Data
const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData);
  fs.writeFileSync("data.json", saveAllDataJson);
};

// order(1) =======> Add
const addData = (id, fname, lname, city, age, gpa) => {
  const allData = loadData();
  const duplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  console.log(duplicatedData);

  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      city: city,
      age: age,
      gpa: gpa,
    });

    saveAllData(allData);
  } else {
    console.log("ERROR DUPLICATED ID");
  }
};

// order(2) =====> Delete
const deleteData = (id) => {
  const allData = loadData();
  const dataAfterDeleting = allData.filter((obj) => {
    return obj.id !== id;
  });
  saveAllData(dataAfterDeleting);
};

// order(3) =====> Find , Read or Search
const findData = (id) => {
  const allData = loadData();
  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  console.log(itemNeeded);
};

// order(4) ========> Show list of data
const listData = () => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log(obj.fname, obj.age, obj.city, obj.gpa);
  });
};
// order(4) ========> Show all data
const showAllData = () => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log(
      "\nid = " + obj.id,
      "\nName = " + obj.fname + " " + obj.lname,
      "\nCity = " + obj.city,
      "\nAge = " + obj.age,
      "\nGPA = " + obj.gpa,
      "\n______________________________________________________"
    );
  });
};

module.exports = {
  addData,
  deleteData,
  findData,
  listData,
  showAllData,
};
