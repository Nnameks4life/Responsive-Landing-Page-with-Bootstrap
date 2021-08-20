let base = 3;
let height = 2;

function triArea(base, height) {
  let sol = (base * height) / 2;
  return sol;
}
console.log(triArea(3, 2));

const triangle = {
  bio: ["lekki", "123", "red"],
  isOn: true,
  day: "tuesday",
  lga: "ajah",
  obj: { sch: "UNN", city: "Ikeja" },
};

const bioo = ["lekki", "123", "red"];

const { bio,obj,day,isOn } = triangle;

console.log(`my name is nnaemeka and i stay in ${bio[0]}`)
if(isOn === true){
console.log(`Today is ${bioo[0]} and I am in  ${obj.sch} and todday is ${}`);
// triArea(3,2)
}