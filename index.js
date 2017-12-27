requirejs(['js/controllers/zoo', 'js/model/animal', 'js/model/bear', 'js/model/cow'], zoo => {
    let bear = new Bear();
    let cow = new Cow();

    bear.right().right().up().up();
    console.log('position: ', bear.position);
    bear.growl();
    cow.mooh();

    zoo.addAnimal(bear);
    zoo.addAnimal(cow);
});
