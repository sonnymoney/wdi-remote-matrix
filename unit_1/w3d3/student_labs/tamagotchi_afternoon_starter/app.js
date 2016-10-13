console.log('¡hoy es Miercoles!');


var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
  },
  puke: function() {
    this.health--;
    console.log('Bleeeeh! Sick!!!!!!');
    console.log(this.name + ' has current health: ' + this.health);
  },
  yawn: function() {
    this.restedness--;
    console.log('Yaaaawwwwn! So tired');
    console.log(this.name + ' has current restedness: ' + this.restedness);
  }
}

var player = {
  name: "Xanax",
  feedTamagotchi: function(food) {
    tamagotchi1.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi1.name + ' has been fed ' + food + ' and now has: ' + tamagotchi1.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function() {
    tamagotchi1.health++;
    console.log(tamagotchi1.name + ' has been medicated and now has health: ' + tamagotchi1.health);
  },
  knockOutTamagotchi: function() {
    tamagotchi1.restedness++;
    console.log('The tamagotchi got some Zzzzs! Restedness: ' + tamagotchi1.restedness);
  }
}

var game = {
  hunger: null,
  sleep: null,
  sick: null,
  start: function() {
    this.hunger = setInterval(function() {
      tamagotchi1.cry();
    }, 6000);
    this.sleep = setInterval(function() {
      tamagotchi1.yawn();
    }, 10000);
    this.sick = setInterval(function() {
      tamagotchi1.puke();
    }, 25000);

  },
  stop: function() {
    console.log('attempting to stop');
    clearInterval(this.hunger);
    clearInterval(this.sleep);
    clearInterval(this.sick);
  }
}
