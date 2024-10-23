// Code your solution in th
function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);
}
function distanceFromHqInFeet(location) {
    const hq = 42;
    return Math.abs((location - hq) * 264);
}
function distanceTravelledInFeet(location, hq) {
    return Math.abs((location - hq)* 264);
}
function calculatesFarePrice(start, destination) {
    const distance = Math.abs((destination - start)* 264)
    if (distance <= 400) {
        return 0;
    }else if(distance >400 && distance <=2000){
        return (distance - 400)*0.02;
    }else if(distance >2000 && distance <=2500) {
        return 25;
    }else{
        return "cannot travel that far"
    }
    
}


