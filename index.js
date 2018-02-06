requirejs(['js/model/animal', 'js/model/bear', 'js/model/cow', 'js/model/zoo'], () => {
    let bear = new Bear();
    let cow = new Cow();
    let zoo = new Zoo();

    bear.right().right().up().up();
    console.log('position: ', bear.position);
    bear.growl();
    cow.mooh();

    zoo.addAnimal(bear);
    zoo.addAnimal(cow);
});
