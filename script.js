/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let newArr = arr.map(function (val) {
      if (val.profession === "developer") return val;
    });
    console.log(newArr);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let newArr = [];
  
    arr.forEach((val) => {
      if (val.profession === "developer") newArr.push(val);
    });
  
    console.log(newArr);
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = { id: 4, name: "yani", age: "20", profession: "intern" };
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArr = arr.filter(function(value){
      if(value.profession=="admin") return false;
      else return true;
    })
  
    console.log(newArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr=[
      { id: 5, name: "virat", age: "33", profession: "SDE" },
      { id: 6, name: "rohit", age: "34", profession: "SDE" },
      { id: 7, name: "dhoni", age: "42", profession: "team_lead" },
    ];
  
    arr.push(...newArr);
    console.log(arr);
  }

  
  