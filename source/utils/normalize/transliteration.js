
const characters = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'j',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'shh',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'je',
  ю: 'yu',
  я: 'ya'
}

const translit = (text, replaceSpace) => {
  let result = ''
  for (let i = 0; i < text.length; i++) {
    if ({}.hasOwnProperty.call(characters, text[i])) {
      result += characters[text[i]]
    } else if (replaceSpace !== undefined && text[i] === ' ') {
      result += replaceSpace
    } else {
      result += text[i]
    }
  }
  return result
}

export default translit
