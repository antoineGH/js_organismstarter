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
	}
}

const spec1 = pAequorFactory(1, mockUpStrand())
spec1.mutate()
