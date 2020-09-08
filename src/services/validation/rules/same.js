import Validator from './../validator'
import replaceWildcards from './../../../utils/replaceWildcards'

export default class same extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName,
    }
  }

  get otherPath() {
    return this.attributes[0]
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  init() {
    this.watchOther()
  }

  check(value) {
    if (!this.filled(value) && !this.filled(this.other$.value)) {
      return true
    }

    return value == this.other$.value
  }
}