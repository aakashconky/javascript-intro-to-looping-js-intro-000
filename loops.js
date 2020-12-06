function forLoop(array) {
  for (let i = 0; i < 25; i++) {		for (let i = 0; i < 25; i++) {
    if (i === 1) {			if (i === 1) {
      array.push("I am 1 strange loop.")				array.push('I am 1 strange loop.');
    } else {			} else {
      array.push(`I am ${i} strange loops.`)				array.push(`I am ${i} strange loops.`);
    }			}
  }		}


  return array		return array;
