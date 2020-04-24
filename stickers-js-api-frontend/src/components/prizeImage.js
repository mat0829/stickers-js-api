class PrizeImage {
  // `static` creates a 'class' method; PrizeImage.methodName()
  static findPrizeImage(id) {
    return this.allPrizeImages.find((prizeImage) => prizeImage.id === id) //`this` will be PrizeImage when invoked like -> PrizeImage.findPrizeImage(1)
  }

  static updatePrizeImage(updatedPrizeImageData) {
    const prizeImageToUpdate = this.findPrizeImage(updatedPrizeImageData.id) // if we invoke PrizeImage.updatePrizeImage(newPrizeImageJSON), `this` will be PrizeImage class
    prizeImageToUpdate.image = updatedPrizeImageData.imageUrl
    return prizeImageToUpdate //return the updated prizeImage instance for method chaining; prizeImageToUpdate.renderDetails() etc
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