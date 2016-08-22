
const characters = {
  а: 'a',
  А: 'A',
  б: 'b',
  Б: 'B',
  в: 'v',
  В: 'V',
  г: 'g',
  Г: 'G',
  д: 'd',
  Д: 'D',
  е: 'e',
  Е: 'E',
  ё: 'yo',
  Ё: 'Yo',
  ж: 'zh',
  Ж: 'Zh',
  з: 'z',
  З: 'Z',
  и: 'i',
  И: 'I',
  й: 'j',
  Й: 'J',
  к: 'k',
  К: 'K',
  л: 'l',
  Л: 'L',
  м: 'm',
  М: 'M',
  н: 'n',
  Н: 'N',
  о: 'o',
  О: 'O',
  п: 'p',
  П: 'P',
  р: 'r',
  Р: 'R',
  с: 's',
  С: 'S',
  т: 't',
  Т: 'T',
  у: 'u',
  У: 'U',
  ф: 'f',
  Ф: 'F',
  х: 'h',
  Х: 'H',
  ц: 'c',
  Ц: 'C',
  ч: 'ch',
  Ч: 'Ch',
  ш: 'sh',
  Ш: 'Sh',
  щ: 'shh',
  Щ: 'Shh',
  ъ: '',
  Ъ: '',
  ы: 'y',
  Ы: 'Y',
  ь: '',
  Ь: '',
  э: 'je',
  Э: 'Je',
  ю: 'yu',
  Ю: 'Yu',
  я: 'ya',
  Я: 'Ya'
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
