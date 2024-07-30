function makeUppercase(value) {
  console.log(value.toUpperCase());
}
// makeUppercase("peter");

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

handleName("Dina", makeUppercase);
handleName("Dina", reverseString);

handleName("susan", function (value) {
  console.log(value);
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("hello world");
});

// // array methods, setTimeout etc
