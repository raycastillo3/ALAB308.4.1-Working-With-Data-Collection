// part 2: Expanding functionality :
const csvFile = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const delimeter = ',', newLine = '\n';
const newCSVFile = csvFile.split(newLine); 
const header = newCSVFile[0].split(delimeter); 

// console.log(newCSVFile.length);
// console.log(header.length);

//Array.from creates an array from the properties you passed in. 
// You dont have to do this on JS since you can create an array and push in an inner array
const arrStorage = Array.from({length:newCSVFile.length}, () => Array.from({length: header.length}));
// console.log(arrStorage);

for (let i = 0; i < arrStorage.length; i++) {
    console.log(arrStorage[i]);
}