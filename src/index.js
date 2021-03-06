const emojis = ['π« ', 'π€', 'π€π€', 'π', 'π€£', 'π']

function getRandomInt(max = emojis.length) {
    return Math.floor(Math.random() * max);
}

function replace (element, periodChar) {
    const periodIndex = element.innerHTML.indexOf(periodChar)
    const periodBeforeTwoWard = element.innerHTML.slice(periodIndex - 2, periodIndex)
    const periodBeforeWard = element.innerHTML.slice(periodIndex - 1, periodIndex)
    if (periodBeforeTwoWard !== 'γ§γ' && periodBeforeTwoWard !== 'γΎγ' && (
        periodBeforeWard === 'γ­' || periodBeforeWard === 'γ' || periodBeforeWard === 'γ'
    )) {
        element.innerHTML = element.innerHTML.replace(periodChar, `γ${emojis[getRandomInt()]}`)
    } else {
        element.innerHTML = element.innerHTML.replace(periodChar, `${emojis[getRandomInt()]}`)
    }
}

window.setInterval(() => {
    document.querySelectorAll('.p-rich_text_section:not(.emoji-replaced)').forEach(element => {
        while(true) {
            replace(element, 'γ')
            replace(element, 'γ')
            if (!element.innerHTML.includes('γ') && !element.innerHTML.includes('γ')) break
        }
        element.classList.add('emoji-replaced')
    })
}, 1000)
