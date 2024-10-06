// If I had to refactor my code from the last assignment. I would use an array of objects to parse CSV files
// By using an array of objects I dont have to create a bunch of variables and storing each cell,
const csvFile = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const newLine = '\n';
const delimeter = ',';
const arrCSVStorage = [];

const newCSVFile = csvFile.split(newLine);
// const header = newCSVFile[0].split(delimeter); on csv files header is always the first row, however since I am using an array of objects the keys become the headers

for (let i = 1; i < newCSVFile.length; i++) {
    const row = newCSVFile[i].split(',');
    const [id, name, occupation, age] = row; 
    arrCSVStorage.push({ID:id, Name: name, Occupation:occupation, Age:age})
}

console.log(arrCSVStorage);

// COPYRIGHTS @Ray2024: PLEASE DO NOT COPY MY CODE!!!!!!!!!!!!!!!!!!!!!!!!!