function bottles(inv){
  var consumed = 0;
  var startingAmount = {
    full: inv/2,
    caps: 0,
    empty: 0
  };
  function collect(onHand){
    var done = true;
    var fromEmpty = 0;
    var fromCaps = 0;
    // Drink
    consumed += onHand.full;
    onHand.empty += onHand.full;
    onHand.caps += onHand.full;
    onHand.full = 0;

    // Redeem Empty Bottles
    if (onHand.empty > 1 ) {
      fromEmpty = Math.floor(onHand.empty / 2);
      onHand.empty -= (fromEmpty * 2);
    }
    // Redeem caps
    if (onHand.caps > 4 ) {
      fromCaps = Math.floor(onHand.caps / 4);
      onHand.caps -= (fromCaps * 4);
    }
    // Collect New Bottles
    onHand.full = fromEmpty + fromCaps;
    if (onHand.full === 0 ){
      console.log(onHand);
      console.log("consued:", consumed);
      return consumed;
    }
    // debugger;
    return collect(onHand);
  }
  return collect(startingAmount);
}

console.log(bottles(10));
