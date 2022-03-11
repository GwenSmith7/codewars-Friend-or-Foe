'use strict';

function friend(friends) {
  //your code here

  // loop through array, identify elements with only 4 characters, if 4 characters push to a new array

  const friendArr = [];

  friends.forEach((e) =>
    e.length === 4 ? friendArr.push(e) : console.log(`${e} is not a friend`)
  );

  return friendArr;
}
