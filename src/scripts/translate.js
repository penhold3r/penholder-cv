import { setCORS } from 'google-translate-api-browser'

const gTranslate = e => {
   const translate = setCORS('https://cors-anywhere.herokuapp.com/')
   const button = e.currentTarget
   const label = e.currentTarget.querySelector('span')
   const texts = document.querySelectorAll('.to-translate')

   button.classList.add('loading')

   texts.forEach(txt => {
      const word = txt.textContent
      const translation = label.innerHTML.toLowerCase() === 'en'
         ? { from: 'es', to: 'en' }
         : { from: 'en', to: 'es' }

      translation.from != translation.to &&
         translate(word, translation)
            .then(res => {
               console.log(`Original: ${word}, translation: ${res.text}`)
               txt.innerHTML = res.text
               label.innerHTML = translation.from
               button.classList.remove('loading')
            })
            .catch(err => {
               console.error(err)
               button.classList.remove('loading')
            })
   })
}

export default gTranslate
