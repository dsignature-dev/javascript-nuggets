// faster/easier way to access/unpack values from arrays

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const {
  first,
  last: shakeAndBake,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;

console.log(first, city, zip, shakeAndBake, favoriteSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName,lastName,sister);

function printPerson({ first, last, siblings: { sister } }) {
  console.log(first, last, sister);
}
printPerson(bob);
