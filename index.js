function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}
function distanceTravelledInFeet(start, end) {
  return start < end ? (end - start) * 264 : (start - end) * 264;
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);

  if (distance <= 400) {
    //free if distance is 400 or less
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    //if distance is more than 400 & less than or equal 2000
    //take the free first 400 feet out, then times remainder by .02 for cost
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    //if distance is more than 200 & less than 2500
    //its a flat fee of 25
    return 25;
  } else {
    //any other distance would be too far
    return "cannot travel that far";
  }
}
