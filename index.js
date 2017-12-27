requirejs(['js/controllers/zoo', 'js/model/bear', 'js/model/cow'], (zoo, Bear, Cow) => {
    let bear = new Bear();
    let cow = new Cow();

    bear.right().right().up().up();
    bear.growl();
    cow.mooh();

    zoo.addAnimal(bear);
    zoo.addAnimal(cow);
});
