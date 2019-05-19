class Unit {
  constructor(name, domClass, type, value, img) {
    this.name = name;
    this.domClass = domClass;
    this.type = type;
    this.value = value;
    this.img = img;
  }
  addGeneral() {
    const army = document.querySelector('.new-army');
    const reinforcement = document.createElement('div');
    reinforcement.classList.add('general');
    reinforcement.innerHTML = `<img src=${this.img}>`;
    army.appendChild(reinforcement);
  }
  addUnit() {
    const value = document.querySelector('.value span');
    const army = document.querySelector('.new-army');
    const reinforcement = document.createElement('div');
    if (value.textContent > 0) {
      reinforcement.classList.add('unit');
      reinforcement.classList.add(`${this.domClass}`);
      reinforcement.innerHTML = `<img src=${this.img}>`;
      army.appendChild(reinforcement);
      value.innerHTML = parseInt(value.innerHTML) - this.value;
    }
  }
  removeUnit(target) {
    const value = document.querySelector('.value span');
    if (target.parentElement.classList.contains('unit')) {
      target.parentElement.remove();
      if (target.parentElement.classList.contains('knights')) value.innerHTML = parseInt(value.innerHTML) + 5;
      if (target.parentElement.classList.contains('light-cavalry')) value.innerHTML = parseInt(value.innerHTML) + 3;
      if (target.parentElement.classList.contains('heavy-infantry')) value.innerHTML = parseInt(value.innerHTML) + 4;
      if (target.parentElement.classList.contains('light-infantry')) value.innerHTML = parseInt(value.innerHTML) + 1;
      if (target.parentElement.classList.contains('bowmen')) value.innerHTML = parseInt(value.innerHTML) + 2;
      if (target.parentElement.classList.contains('peasant-bowmen')) value.innerHTML = parseInt(value.innerHTML) + 1;
      if (target.parentElement.classList.contains('catapult')) value.innerHTML = parseInt(value.innerHTML) + 4;
      if (target.parentElement.classList.contains('trebuchet')) value.innerHTML = parseInt(value.innerHTML) + 5;
    }
  }
  showInfo() {
    const info = document.querySelector('.info-box span');
    info.innerHTML = `Unit: ${this.name}<br>
    Type: ${this.type}<br>
    Value: ${this.value}`;
  }
  clearInfo() {
    const info = document.querySelector('.info-box span');
    info.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const general = new Unit('General', 'general', 'Commander', 10, 'img/general.jpg');
  general.addGeneral();
})

console.log(new Unit('Knights', 'knights', 'Cavalry', 5, 'img/knights.jpg'))

const knights = document.querySelectorAll('.knights');
knights.forEach((knight) => knight.addEventListener('click', () => {
  const knights = new Unit('Knights', 'knights', 'Cavalry', '5', 'img/knights.jpg');
  knights.addUnit();
}));

const lightCavalry = document.querySelectorAll('.light-cavalry');
lightCavalry.forEach((lc) => lc.addEventListener('click', () => {
  const lightCavalry = new Unit('Light Cavalry', 'light-cavalry', 'Cavalry', 3, 'img/light-cavalry.jpg');
  lightCavalry.addUnit();
}));

const heavyInfantry = document.querySelectorAll('.heavy-infantry');
heavyInfantry.forEach((hi) => hi.addEventListener('click', () => {
  const heavyInfantry = new Unit('Heavy Infantry', 'heavy-infantry', 'Infantry', 4, 'img/heavy-infantry.jpg');
  heavyInfantry.addUnit();
}));

const lightInfantry = document.querySelectorAll('.light-infantry');
lightInfantry.forEach((li) => li.addEventListener('click', () => {
  const lightInfantry = new Unit('Light Infantry', 'light-infantry', 'Infantry', 1, 'img/light-infantry.jpg');
  lightInfantry.addUnit();
}));

const bowmen = document.querySelectorAll('.bowmen');
bowmen.forEach((bowman) => bowman.addEventListener('click', () => {
  const bowmen = new Unit('Bowmen', 'bowmen', 'Ranged', 2, 'img/bowmen.jpg');
  bowmen.addUnit();
}));

const peasantBowmen = document.querySelectorAll('.peasant-bowmen');
peasantBowmen.forEach((pb) => pb.addEventListener('click', () => {
  const peasantBowmen = new Unit('Peasant Bowmen', 'peasant-bowmen', 'Ranged', 1, 'img/peasant-bowmen.jpg');
  peasantBowmen.addUnit();
}));

const catapult = document.querySelectorAll('.catapult');
catapult.forEach((ctpt) => ctpt.addEventListener('click', () => {
  const catapult = new Unit('Catapult', 'catapult', 'Siege', 4, 'img/catapult.jpg');
  catapult.addUnit();
}));

const trebuchet = document.querySelectorAll('.trebuchet');
trebuchet.forEach((trbt) => trbt.addEventListener('click', () => {
  const trebuchet = new Unit('Trebuchet', 'trebuchet', 'Siege', 5, 'img/trebuchet.jpg');
  trebuchet.addUnit();
}));

document.querySelector('.new-army').addEventListener('click', (e) => {
  const unit = new Unit;
  unit.removeUnit(e.target);
})

document.querySelector('.knights').addEventListener('mouseover', (e) => {
  const knights = new Unit('Knights', 'knights', 5, 'img/knights.jpg');
  knights.showInfo(e.target);
  document.querySelector('.knights').addEventListener('mouseleave', () => {
    knights.clearInfo();
  })
});

document.querySelector('.light-cavalry').addEventListener('mouseover', (e) => {
  const lightCavalry = new Unit('Light Cavalry', 'light-cavalry', 3, 'img/light-cavalry.jpg');
  lightCavalry.showInfo(e.target);
  document.querySelector('.light-cavalry').addEventListener('mouseleave', () => {
    lightCavalry.clearInfo();
  })
})
document.querySelector('.heavy-infantry').addEventListener('mouseover', (e) => {
  const heavyInfantry = new Unit('Heavy Infantry', 'heavy-infantry', 4, 'img/heavy-infantry.jpg');
  heavyInfantry.showInfo(e.target);
  document.querySelector('.heavy-infantry').addEventListener('mouseleave', () => {
    heavyInfantry.clearInfo();
  })
})
document.querySelector('.light-infantry').addEventListener('mouseover', (e) => {
  const lightInfantry = new Unit('Light Infantry', 'light-infantry', 1, 'img/light-infantry.jpg');
  lightInfantry.showInfo(e.target);
  document.querySelector('.light-infantry').addEventListener('mouseleave', () => {
    lightInfantry.clearInfo();
  })
})
document.querySelector('.bowmen').addEventListener('mouseover', (e) => {
  const bowmen = new Unit('Bowmen', 'bowmen', 1, 'img/bowmen.jpg');
  bowmen.showInfo(e.target);
  document.querySelector('.bowmen').addEventListener('mouseleave', () => {
    bowmen.clearInfo();
  })
})
document.querySelector('.peasant-bowmen').addEventListener('mouseover', (e) => {
  const peasantBowmen = new Unit('Peasant Bowmen', 'peasant-bowmen', 1, 'img/peasant-bowmen.jpg');
  peasantBowmen.showInfo(e.target);
  document.querySelector('.peasant-bowmen').addEventListener('mouseleave', () => {
    peasantBowmen.clearInfo();
  })
})
document.querySelector('.catapult').addEventListener('mouseover', (e) => {
  const catapult = new Unit('Catapult', 'catapult', 4, 'img/catapult.jpg');
  catapult.showInfo(e.target);
  document.querySelector('.catapult').addEventListener('mouseleave', () => {
    catapult.clearInfo();
  })
})
document.querySelector('.trebuchet').addEventListener('mouseover', (e) => {
  const trebuchet = new Unit('Trebuchet', 'trebuchet', 5, 'img/trebuchet.jpg');
  trebuchet.showInfo(e.target);
  document.querySelector('.trebuchet').addEventListener('mouseleave', () => {
    trebuchet.clearInfo();
  })
})