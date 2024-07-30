const person = ["hello", "great"];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === "hello") {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "Dina");

console.log(state);
