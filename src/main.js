import gTranslate from './scripts/translate'

import './sass/index.scss'

const domReady = callback => {
   document.readyState === 'interactive' || document.readyState === 'complete'
      ? callback()
      : document.addEventListener('DOMContentLoaded', callback)
}

domReady(() => {
   console.log('running')

   const translate = document.querySelector('.lang-switcher')

   translate.addEventListener('click', e => gTranslate(e))

})
