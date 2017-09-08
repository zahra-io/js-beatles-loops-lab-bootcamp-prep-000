function theBeatlesPlay(musician, instrument) {
  var musiciansAndInstruments = [];
  for (var i = 0; i < musician.length; i++) {
    musiciansAndInstruments.push(`${musician[i]} plays ${instrument[i]}.`);
  }
  return musiciansAndInstruments;
}
