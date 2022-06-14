const emojis = ['🫠', '🤗', '🤟🤟', '🙏', '🤣', '😍']

function getRandomInt(max = emojis.length) {
    return Math.floor(Math.random() * max);
}

function replace (element, periodChar) {
    const periodIndex = element.innerHTML.indexOf(periodChar)
    const periodBeforeTwoWard = element.innerHTML.slice(periodIndex - 2, periodIndex)
    const periodBeforeWard = element.innerHTML.slice(periodIndex - 1, periodIndex)
    if (periodBeforeTwoWard !== 'です' && periodBeforeTwoWard !== 'ます' && (
        periodBeforeWard === 'ね' || periodBeforeWard === 'す' || periodBeforeWard === 'ん'
    )) {
        element.innerHTML = element.innerHTML.replace(periodChar, `〜${emojis[getRandomInt()]}`)
    } else {
        element.innerHTML = element.innerHTML.replace(periodChar, `${emojis[getRandomInt()]}`)
    }
}

window.setInterval(() => {
    document.querySelectorAll('.p-rich_text_section:not(.emoji-replaced)').forEach(element => {
        while(true) {
            replace(element, '。')
            replace(element, '、')
            if (!element.innerHTML.includes('。') && !element.innerHTML.includes('、')) break
        }
        element.classList.add('emoji-replaced')
    })
}, 1000)
