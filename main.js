// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G']
	return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = []
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase())
	}
	return newStrand
}

// Returns a specimen with random DNA stand
const pAequorFactory = (specimenNum, dna) => {
	return {
		specimenNum: specimenNum,
		dna: dna,
		mutate() {
			console.log(`\n--- Mutate ---`)
			console.log(`Before Mutation - ${dna}`)
			const randomIdx = Math.floor(Math.random() * dna.length)
			const toChange = dna[randomIdx]
			let randomDNA = returnRandBase()
			while (toChange === randomDNA) {
				randomDNA = returnRandBase()
			}
			console.log(`Mutating from ${toChange} to ${randomDNA} at position ${randomIdx}`)
			dna[randomIdx] = randomDNA
			console.log(`After Mutation - ${dna}`)
			console.log(`--- End Mutate ---\n`)
		},
		compareDNA(specimen) {
			console.log(`\n--- Compare DNA ---`)
			console.log(`Specimen 1 ${this.dna}`)
			console.log(`Specimen 2 ${specimen.dna}`)
			let count = 0
			for (let i = 0; i <= this.dna.length - 1; i++) {
				if (this.dna[i] === specimen.dna[i]) {
					count++
				}
			}
			const percentageIdentical = ((count / 15) * 100).toFixed(2)
			console.log(`${percentageIdentical}% DNA in common`)
			console.log(`--- End Compare DNA ---\n`)
			return percentageIdentical
		},
		willLikelySurvive() {
			let count = 0
			this.dna.forEach((element) => {
				if (element === 'C' || element === 'G') {
					count++
				}
			})
			console.log(`Survival Chances : ${((count / this.dna.length) * 100).toFixed(2)}%`)
			return (count / this.dna.length) * 100 >= 60
		},
	}
}

const spec1 = pAequorFactory(1, mockUpStrand())
const spec2 = pAequorFactory(2, mockUpStrand())

// spec1.mutate()
// console.log(spec1.compareDNA(spec2))
console.log(spec1.willLikelySurvive())
