class Sticker {

  static findSticker(id) {
    return this.allStickers.find((sticker) => sticker.id === id) // Find Sticker by passed in id
  }

  static updateSticker(updatedStickerData) {
    // Update attributes
    const stickerToUpdate = this.findSticker(updatedStickerData.id)
    stickerToUpdate.image = updatedStickerData.image

    return stickerToUpdate // Return the updated Sticker instance
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
    return `<img src="${this.image}"><br>
            <button class="topOfStickers" data-id="${this.id}">Select a Different Sticker</button>
            `
  }
}

Sticker.allStickers = []