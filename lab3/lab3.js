async function startProgram() {
    await parkour();

    exitProgram();
}

//0 degree is forward, 90 degree is turn right, 270 degree is turn left, 180 degree turn backwards

async function parkour() {
    //first arch
    await rollToDistance(0, 50, 30);

    //to second arch
    await rollToDistance(90, 50, 30);

    //second arch
    await rollToDistance(0, 50, 30);

    //to third arch
    await rollToDistance(360, 50, 30);

    //third arch
    await rollToDistance(0, 50, 60);

    //to forth arch
    await rollToDistance(90, 50, 30);

    //forth arch
    await rollToDistance(180, 50, 30);

    //to fifth arch
    await rollToDistance(90, 50, 30);

    //fifth arch
    await rollToDistance(180, 50, 90);

    //to sixth arch
    await rollToDistance(90, 50, 30);

    //sixth arch
    await rollToDistance(0, 50, 30);

    //to seventh arch
    await rollToDistance(90, 50, 30);

    //seventh arch and eight arch
    await rollToDistance(0, 50, 60);

    //to ninth arch
    await rollToDistance(360, 50, 30);

    //ninth arch
    await rollToDistance(0, 50, 30);

    //to tenth arch
    await rollToDistance(360, 50, 30);

    //tenth arch
    await rollToDistance(0, 50, 30);

    //to eleventh arch
    await rollToDistance(360, 50, 30);

    //to eleventh arch 2
    await rollToDistance(180, 50, 30);

    //to eleventh arch 3
    await rollToDistance(360, 50, 30);

    //eleventh arch
    await rollToDistance(0, 50, 30);

    //to twelveth arch
    await rollToDistance(90, 50, 30);

    //twelveth arch
    await rollToDistance(0, 50, 30);

    //to thirteenth arch
    await rollToDistance(90, 50, 60);

    //to thirteenth arch 2
    await rollToDistance(180, 50, 30);

    //to thirteenth arch 3
    await rollToDistance(90, 50, 30);

    //thirteenth arch
    await rollToDistance(0, 50, 40);

}