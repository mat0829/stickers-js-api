class Sticker {
  // `static` creates a 'class' method; Sticker.methodName()
  static findSticker(id) {
    return this.allStickers.find((sticker) => sticker.id === id) //`this` will be Sticker when invoked like -> Sticker.findSticker(1)
  }

  static updateSticker(updatedStickerData) {
    const stickerToUpdate = this.findSticker(updatedStickerData.id) // if we invoke Sticker.updateSticker(newStickerJSON), `this` will be Sticker class
    stickerToUpdate.image = updatedStickerData.image
    return stickerToUpdate //return the updated sticker instance for method chaining; stickerToUpdate.renderDetails() etc
  }

  constructor(stickerDataObj) {
    this.id = stickerDataObj.id
    this.image = stickerDataObj.image
    Sticker.allStickers.push(this)
  }

  renderStickerCollection() {
    return `<span data-id="${this.id}"><img src="${this.image}" data-id="${this.id}"></span>`
  }

  renderStickerDetails() {
    return `<img src="${this.image}">
          `
  }
}

Sticker.allStickers = []