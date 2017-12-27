requirejs(['js/controllers/zoo', 'js/model/bear', 'js/model/cow'], (zoo, Bear, Cow) => {
    let bear = new Bear('bear');
    let cow = new Cow('cow');

    bear.right().right().up().up();
    bear.growl();
    cow.mooh();

    zoo.addAnimal(bear);
    zoo.addAnimal(cow);

    cow.left().down();
});
