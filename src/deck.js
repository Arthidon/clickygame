function shuffle(array) {
    const _array = array.slice(0)
    for(let i = 0; i < array.length -1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
    console.log(_array);
    return _array
}

export default function initializeDeck() {
    let id = 0
    const cards = ['doll1', 'doll2', 'doll3', 'doll4', 'doll5', 'doll6', 'doll7', 'doll8'].reduce((acc, type) => {
        acc.push ({
            id: id++,
            type
        })
        acc.push ({
            id: id++,
            type   
        })
        return acc
    }, [])

    return shuffle(cards)
}