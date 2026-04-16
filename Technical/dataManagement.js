/**
 * Example of controlled update in nested MongoDB structures
 */
function updateCharacterBalance(characterDoc, charId, amount) {
    const index = characterDoc.characters.findIndex(c => c.chartid === charId)
    if (index === -1) return null

    characterDoc.characters[index].balance.currency += amount

    // inform mongoose about deep changes
    characterDoc.markModified(`characters.${index}.balance.currency`)

    return characterDoc
}
