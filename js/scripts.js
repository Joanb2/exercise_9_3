var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops".toUpperCase();
var textNew = text.replace("Velociraptor", dinosaur);

console.log(textNew.length);
console.log(textNew.length/2); 

console.log(textNew.slice(0, 72));