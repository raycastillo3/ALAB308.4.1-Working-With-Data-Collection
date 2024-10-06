// part 2: Expanding functionality :
const csvFile = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const delimeter = ',', newLine = '\n';
const newCSVFile = csvFile.split(newLine); 
const header = newCSVFile[0].split(delimeter); 

const numOfColumns = header.length; 
const result = new Array(numOfColumns); 

const innerArr = [];
for (let i = 0; i < newCSVFile.length; i++) {
    const row = newCSVFile[i].split(delimeter); 
    result[i] = row
}

// console.log(result); 

//Initially, I tried using Array.from() which would create an array from the properties passed in
// However, I notice that even if I create a fixed size 2D array in javaScript. When I push elements
// into it. It wont maintain its fixed length.

//PART 3: Transforming Data
const arrOfObj = [];
for (let i = 1; i < result.length; i++) {
    const [id, name, occupation, age] = result[i]; 
    arrOfObj.push({id: id, name: name, occupation: occupation, age: age});
}

// console.log(arrOfObj);

// PART 4: Sorting and Manipulating Data

//1. remove the last element from the sorted array: 
const lastElementRemoved = arrOfObj.pop(); 
// console.log(arrOfObj) //test code
// 2. Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }
const objToInsert = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
arrOfObj.splice(1,0,objToInsert);
// console.log(arrOfObj) // test code
// 3. Add the following object to the end of the array: 
arrOfObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(arrOfObj);

// Calculate the average age of the group
let ageAvg = 0; 
for (let i = 0; i < arrOfObj.length; i++) {
    ageAvg += Number(arrOfObj[i].age); 
}
ageAvg = ageAvg / arrOfObj.length; 
// console.log(ageAvg) 


//PART 5: Full Cicle:
let csvValues = "";
let csv = "";

// csv
for (let i = 0; i < arrOfObj.length; i++) {
    const {id, name, occupation, age} = arrOfObj[i];
    csvValues += id + delimeter + name + delimeter + occupation + delimeter + age + newLine
}
//header
let csvHeader = Object.keys(arrOfObj[0]).join();
csv = csvHeader + newLine + csvValues;
//final output
console.log(csv);




// COPYRIGHTS @Ray2024: PLEASE DO NOT COPY MY CODE!!!!!!!!!!!!!!!!!!!!!!!!!

