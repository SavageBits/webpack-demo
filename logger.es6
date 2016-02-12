//this file is explicitly required in app.js
let checkName = (firstName, lastName) => {
  if(firstName !== 'mark' || lastName !== 'savage') {
    console.log('You are not Mark Savage');
  } else {
    console.log('You are Mark Savage');
  }
}

checkName('mark', 'savich');
