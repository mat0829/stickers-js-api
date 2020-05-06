class PrizeImage {
  
  static findPrizeImage(id) {
    return this.allPrizeImages.find((prizeImage) => prizeImage.id === id) // Find PrizeImage by passed in id
  }

  static updatePrizeImage(updatedPrizeImageData) {
    // Update attributes
    const prizeImageToUpdate = this.findPrizeImage(updatedPrizeImageData.id)
    prizeImageToUpdate.image = updatedPrizeImageData.imageUrl

    return prizeImageToUpdate // Return the updated PrizeImage instance
  }

  constructor(prizeImageDataObj) {
    this.id = prizeImageDataObj.id
    this.imageUrl = prizeImageDataObj.imageUrl
    PrizeImage.allPrizeImages.push(this)
  }

  renderPrizeImageCollection() {
    return `<span data-id="${this.id}"><img src="${this.imageUrl}" data-id="${this.id}"></span>`
  }

  renderPrizeImageDetails() {
    return `<img src="${this.imageUrl}"><br>
            <button class="topOfPrizeImages" data-id="${this.id}">Select a Different Prize Image</button>
            `
  }
}

PrizeImage.allPrizeImages = []