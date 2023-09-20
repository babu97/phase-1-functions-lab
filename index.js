// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
const  hqStreet = 42;

return  Math.abs(pickupLocation- hqStreet)
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
      const feet = blocks * 264;
  
    return feet;
  }
  function distanceTravelledInFeet( startBlock, endBlock){
    const distanceInFeet = Math.abs(endBlock - startBlock) * 264;


    return distanceInFeet;

  }


  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = Math.abs(endBlock - startBlock) * 264;
  
    if (distanceInFeet > 2500) {
      return 'cannot travel that far';
    } else if (distanceInFeet <= 400) {
      
      return 0;
    } else if (distanceInFeet <= 2000) {
    
      return (distanceInFeet - 400) * 0.02;
    } else {
      return 25;
    }
  }
  