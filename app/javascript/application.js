// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'
import * as bootstrap from 'bootstrap' // eslint-disable-line no-unused-vars

import LocalTime from 'local-time'
LocalTime.start()
document.addEventListener('turbo:morph', () => {
  LocalTime.run()
})
