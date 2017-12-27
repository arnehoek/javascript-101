requirejs(['js/model/animal', 'js/model/bear', 'js/model/cow'], () => {
    let bear = new Bear();
    let cow = new Cow();

    bear.right().right().up().up();
    console.log('position: ', bear.position);
    bear.growl();
    cow.mooh();
});
