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
		complementStrand(specimen) {
			console.log(`\n--- Complementary Check ---`)
			let count = 0
			for (let i = 0; i <= this.dna.length - 1; i++) {
				if ((this.dna[i] === 'A' && specimen.dna[i] === 'T') || (this.dna[i] === 'T' && specimen.dna[i] === 'A')) {
					count++
					continue
				}
				if ((this.dna[i] === 'C' && specimen.dna[i] === 'G') || (this.dna[i] === 'G' && specimen.dna[i] === 'C')) {
					count++
				}
			}
			const percentageComplement = ((count / this.dna.length) * 100).toFixed(2)
			console.log(`Specimen 1: ${this.dna}`)
			console.log(`Specimen 2: ${specimen.dna}`)
			console.log(`Complementary at: ${percentageComplement}%`)
			console.log(`--- End Complementary Check ---\n`)
			return percentageComplement
		},
	}
}

// Generage an array of number specimens
const generateSample = (number) => {
	const sampleArr = []
	for (let i = 0; i <= number - 1; i++) {
		sampleArr.push(pAequorFactory(i, mockUpStrand()))
	}
	return sampleArr
}

const spec1 = pAequorFactory(1, mockUpStrand())
const spec2 = pAequorFactory(2, mockUpStrand())

// spec1.mutate()
// console.log(spec1.compareDNA(spec2))
// console.log(spec1.complementStrand(spec2))
// console.log(spec1.willLikelySurvive())
// sampleArr = generateSample(30)
// console.log(sampleArr)
