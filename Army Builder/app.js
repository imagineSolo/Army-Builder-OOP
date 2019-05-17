class Unit {
  constructor(name, type, value, img) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.img = img;
  }
  addGeneral() {
    const army = document.querySelector('.new-army');
    const reinforcement = document.createElement('div');
    reinforcement.classList.add('general');
    reinforcement.innerHTML = `<img src=${this.img}>`;
    reinforcement.id = `${this.type}`;
    army.appendChild(reinforcement);
  }
  addUnit() {
    const army = document.querySelector('.new-army');
    const reinforcement = document.createElement('div');
    reinforcement.classList.add('unit');
    reinforcement.innerHTML = `<img src=${this.img}>`;
    reinforcement.id = `${this.type}`;
    army.appendChild(reinforcement);
  }
  removeUnit(target) {
    if (target.parentElement.className === 'unit') {
      target.parentElement.remove();
    }
  }
  showInfo() {
    const info = document.querySelector('.info-box span');
    info.innerHTML = `Unit: ${this.name} 
                      Type: ${this.type}
                      Value: ${this.value}`;
  }
  clearInfo() {
    const info = document.querySelector('.info-box span');
    info.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const general = new Unit('General', 'general', 10, 'img/general.jpg');
  general.addGeneral();
})

document.getElementById('knights').addEventListener('click', () => {
  const knights = new Unit('Knights', 'knights', 5, 'img/knights.jpg');
  knights.addUnit();
})
document.getElementById('light-cavalry').addEventListener('click', () => {
  const lightCavalry = new Unit('Light Cavalry', 'light-cavalry', 3, 'img/light-cavalry.jpg');
  lightCavalry.addUnit();
})
document.getElementById('heavy-infantry').addEventListener('click', (e) => {
  const heavyInfantry = new Unit('Heavy Infantry', 'heavy-infantry', 4, 'img/heavy-infantry.jpg');
  heavyInfantry.addUnit();
})
document.getElementById('light-infantry').addEventListener('click', () => {
  const lightInfantry = new Unit('Light Infantry', 'light-infantry', 1, 'img/light-infantry.jpg');
  lightInfantry.addUnit();
})
document.getElementById('bowmen').addEventListener('click', () => {
  const bowmen = new Unit('Bowmen', 'bowmen', 1, 'img/bowmen.jpg');
  bowmen.addUnit();
})
document.getElementById('peasant-bowmen').addEventListener('click', () => {
  const peasantBowmen = new Unit('Peasant Bowmen', 'peasant-bowmen', 1, 'img/peasant-bowmen.jpg');
  peasantBowmen.addUnit();
})
document.getElementById('catapult').addEventListener('click', () => {
  const catapult = new Unit('Catapult', 'catapult', 4, 'img/catapult.jpg');
  catapult.addUnit();
})
document.getElementById('trebuchet').addEventListener('click', () => {
  const trebuchet = new Unit('Trebuchet', 'trebuchet', 5, 'img/trebuchet.jpg');
  trebuchet.addUnit();
})

document.querySelector('.new-army').addEventListener('click', (e) => {
  const unit = new Unit;
  unit.removeUnit(e.target);
})

document.querySelector('#knights').addEventListener('mouseover', (e) => {
  const knights = new Unit('Knights', 'knights', 5, 'img/knights.jpg');
  knights.showInfo(e.target);
  document.querySelector('#knights').addEventListener('mouseleave', () => {
    knights.clearInfo();
  })
})
document.querySelector('#light-cavalry').addEventListener('mouseover', (e) => {
  const lightCavalry = new Unit('Light Cavalry', 'light-cavalry', 3, 'img/light-cavalry.jpg');
  lightCavalry.showInfo(e.target);
  document.querySelector('#light-cavalry').addEventListener('mouseleave', () => {
    lightCavalry.clearInfo();
  })
})
document.querySelector('#heavy-infantry').addEventListener('mouseover', (e) => {
  const heavyInfantry = new Unit('Heavy Infantry', 'heavy-infantry', 4, 'img/heavy-infantry.jpg');
  heavyInfantry.showInfo(e.target);
  document.querySelector('#heavy-infantry').addEventListener('mouseleave', () => {
    heavyInfantry.clearInfo();
  })
})
document.querySelector('#light-infantry').addEventListener('mouseover', (e) => {
  const lightInfantry = new Unit('Light Infantry', 'light-infantry', 1, 'img/light-infantry.jpg');
  lightInfantry.showInfo(e.target);
  document.querySelector('#light-infantry').addEventListener('mouseleave', () => {
    lightInfantry.clearInfo();
  })
})
document.querySelector('#bowmen').addEventListener('mouseover', (e) => {
  const bowmen = new Unit('Bowmen', 'bowmen', 1, 'img/bowmen.jpg');
  bowmen.showInfo(e.target);
  document.querySelector('#bowmen').addEventListener('mouseleave', () => {
    bowmen.clearInfo();
  })
})
document.querySelector('#peasant-bowmen').addEventListener('mouseover', (e) => {
  const peasantBowmen = new Unit('Peasant Bowmen', 'peasant-bowmen', 1, 'img/peasant-bowmen.jpg');
  peasantBowmen.showInfo(e.target);
  document.querySelector('#peasant-bowmen').addEventListener('mouseleave', () => {
    peasantBowmen.clearInfo();
  })
})
document.querySelector('#catapult').addEventListener('mouseover', (e) => {
  const catapult = new Unit('Catapult', 'catapult', 4, 'img/catapult.jpg');
  catapult.showInfo(e.target);
  document.querySelector('#catapult').addEventListener('mouseleave', () => {
    catapult.clearInfo();
  })
})
document.querySelector('#trebuchet').addEventListener('mouseover', (e) => {
  const trebuchet = new Unit('Trebuchet', 'trebuchet', 5, 'img/trebuchet.jpg');
  trebuchet.showInfo(e.target);
  document.querySelector('#trebuchet').addEventListener('mouseleave', () => {
    trebuchet.clearInfo();
  })
})