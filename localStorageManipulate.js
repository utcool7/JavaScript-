if (document.readyState !== "loading") {
  console.log("vscode");

  var keys = Object.keys(localStorage), 
    i = keys.length; 
  console.log("keys", keys);
  let stringifiedDetailsOfPeople, detailsOfPeople;

  while (i--) {
   
    if (keys[i].match(/userDetails/g)) {
      stringifiedDetailsOfPeople = localStorage.getItem(keys[i]);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);
      
      localStorage.removeItem(keys[i]);
    }
  }
}
