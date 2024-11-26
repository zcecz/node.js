var fs = require("fs");

//appends text to a file and if the file does note exist it creates thye file
fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//Opens the file for writing or whatever flag is used. If the file does not exist it creates the file
fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

//Overwrites any text that is inside the specified file and if the files does not exist it creates the file.
fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//This function appends This is my text to the desired file and prints Updated! in the console
fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

//This function overwrites the content of the specified file and replaces it with This is my text.
fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});

//This function would delete the specified file
/*
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
*/

//This function rename the desired file to whater you put inside the funciton
//It can not rename files when the function is inside this js file but if run standalone inside a cli it will rename the desire file
fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});