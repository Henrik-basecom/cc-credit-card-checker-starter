// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, dnaArr) {
  return {
    specimenNum: num,
    dna: dnaArr,
    mutate: function () {
      const rndIndex = Math.floor(Math.random() * this.dna.length);
      const oldLet = this.dna[rndIndex];
      let newLet = returnRandBase();
      while (oldLet === newLet) {
        newLet = returnRandBase();
      }
      this.dna[rndIndex] = newLet;
      return this.dna;
    },
    compareDNA: function (pAequorObj) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequorObj.dna[i]) count++;
      }
      const percentage = Math.round(count * (100 / this.dna.length));
      console.log(
        `specimen #${this.specimenNum} and specimen #${pAequorObj.specimenNum} have ${percentage}% DNA in common.`
      );
    },
    willLikelySurvive: function () {
      console.log(this.dna);
      const count = this.dna.reduce((acc, curr) => {
        if (curr === 'C' || curr === 'G') return acc + 1;
        return acc;
      }, 0);
      const percentage = Math.round(count * (100 / this.dna.length));
      return percentage >= 60 ? true : false;
    },
  };
}

const spicmens = [];
for (let i = 0; i < 30; i++) {
  const spicemen = pAequorFactory(i, mockUpStrand());
  spicmens.push(spicemen);
}

console.log(spicmens);
