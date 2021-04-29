getMinVal() {
   if (this.root === null) {
      throw "Empty tree!";
   }
   let currNode = this.root;

   while (currNode.left !== null) {
      currNode = currNode.left;
   }
   return currNode.data;
}

getMaxVal() {
if (this.root === null) {
      throw "Empty tree!";
}
let currNode = this.root;

while (currNode.right !== null) {
   currNode = currNode.right;
}
   return currNode.data;
}
