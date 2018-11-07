let teachers = [{
  name: "Ilia",
  age: 30,
  gender: "m",
  status: "Free",
  available: true,
}, {
  name: "Tim",
  age: 39,
  gender: "m",
  status: "On duty",
  available: false,
}, {
  name: "Marina",
  age: 9,
  gender: "f",
  status: "Ready to teach",
  available: true,
}, {
  name: "Klivden",
  age: 42,
  gender: "m",
  status: "Leeeroy Jenkins!"
}, {
  name: "Ivan",
  age: 17,
  gender: "m",
  status: "Ready to teach",
  available: true,
}];

function render(table, users) {
  for (let user of users) {
    let { name, age, gender, status, available } = user;
    
    let cssClasses = [];
    let attributes = [];

    

    switch(available) {
      case true:
        cssClasses.push('available');
        break;
      case false:
        cssClasses.push('unavailable');
        break;
      default:
        attributes.push('hidden');
    }

    if (gender === 'm') {
      cssClasses.push('male');
    }
    if (gender === 'f') {
      cssClasses.push('female');
    }

    if (age < 18) {
      attributes.push('style="text-decoration: line-through;"')
    }

    

    table.tBodies[0].insertAdjacentHTML('beforeEnd', `
      <tr class="${cssClasses.join(' ')}" ${attributes.join(' ')}>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${status}</td> 
      </tr>
    `);
  }
}

let table = document.querySelector('.js-teachers');
render(table, teachers);