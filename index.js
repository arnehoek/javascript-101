requirejs(['js/controllers/zoo', 'js/model/bear', 'js/model/cow'], (zoo, Bear, Cow) => {
    let bear = new Bear('bear');
    let cow = new Cow('cow');

    bear.right().right().up().up();
    bear.growl();
    cow.mooh();

    zoo.addAnimal(bear, {onCollision: bear.growl});
    zoo.addAnimal(cow);

    cow.left().down().right().right().up();
    bear.down().down().left();
});
