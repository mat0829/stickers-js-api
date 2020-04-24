class Prize {
  // `static` creates a 'class' method; Prize.methodName()
  static findPrize(id) {
    return this.allPrizes.find((prize) => prize.id === id) //`this` will be Prize when invoked like -> Prize.findPrize(1)
  }

  static updatePrize(updatedPrizeData) {
    const prizeToUpdate = this.findPrize(updatedPrizeData.id) // if we invoke Prize.updatePrize(newPrizeJSON), `this` will be Prize class
    prizeToUpdate.name = updatedPrizeData.name
    prizeToUpdate.image = updatedPrizeData.image
    prizeToUpdate.cost = updatedPrizeData.cost
    prizeToUpdate.purchased = updatedPrizeData.purchased
    return prizeToUpdate //return the updated prize instance for method chaining; prizeToUpdate.renderDetails() etc
  }

  constructor(prizeDataObj) {
    this.id = prizeDataObj.id
    this.errors = prizeDataObj.errors
    this.name = prizeDataObj.name
    this.image = prizeDataObj.image
    this.cost = prizeDataObj.cost
    this.purchased = prizeDataObj.purchased
    this.prizeParent = prizeDataObj.prizeParent
    this.prizeChild = prizeDataObj.prizeChild
    Prize.allPrizes.push(this)
  }

  renderPrizeCollection() {
    return `<span data-id="${this.id}"><img src="${this.image}" data-id="${this.id}"></span>`
  }

  renderAdultPrizeDetails() {
    if (this.errors !== undefined) {
      
      if (this.errors.length == 3) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
                <h2 style="color:red">${this.errors[2]}</h2>
          <button class="addPrizeForm">Back to Add a new Prize</button>
          `
      } else if (this.errors.length == 2) {
        return `<h2 style="color:red">${this.errors[0]}</h2>
                <h2 style="color:red">${this.errors[1]}</h2>
          <button class="addPrizeForm">Back to Add a new Prize</button>
          `
      } else {
        return `<h2 style="color:red">${this.errors}</h2>
          <button class="addPrizeForm">Back to Add a new Prize</button>
          `
      }
    }
    if (this.purchased == true) {
      const isPrizePurchasedString = `${this.prizeChild} has purchased: "${this.name}"!`
      return `<h2>${this.name}</h2>
          <img src="${this.image}">
          <h4>~ Created by: ${this.prizeParent}</h4>
          <h2>Cost: ${this.cost} Points!</h2>
          <h2>${isPrizePurchasedString}</h2>
          <button class="edit" data-id="${this.id}" data-action="edit">Edit this Prize!</button>
          <button class="delete" data-id="${this.id}" data-action="delete">Delete this Prize!</button>
          <button class="top">Top of Page</button>
          `
    } else {
      const isPrizePurchasedString = `${this.name} has not been purchased yet.`
      return `<h1>"${this.name}"</h1>
          <h3>~ Created by: ${this.prizeParent}</h3>
          <img src="${this.image}"><br>
          <h2>Cost: ${this.cost} Points!</h2>
          <h2>${isPrizePurchasedString}</h2>
          <button class="edit" data-id="${this.id}" data-action="edit">Edit this Prize!</button>
          <button class="delete" data-id="${this.id}" data-action="delete">Delete this Prize!</button><br><br>
          <button class="top">Top of Page</button>
          `
    }
  }
  renderChildPrizeDetails() {
    if (this.purchased == true) {
      const isPrizePurchasedString = `You purchased: "${this.name}"!`
      return `<h2>${this.name}</h2>
          <img src="${this.image}">
          <h4>~ Created by: ${this.prizeParent}</h4>
          <h2>Cost: ${this.cost} Points!</h2>
          <h2>${isPrizePurchasedString}</h2>
          <button class="top">Top of Page</button>
          `
    } else {
      const isPrizePurchasedString = `${this.name} has not been purchased yet.`
      return `<h1>"${this.name}"</h1>
          <h3>~ Created by: ${this.prizeParent}</h3>
          <img src="${this.image}">
          <h2>Cost: ${this.cost} Points!</h2>
          <h2>${isPrizePurchasedString}</h2>
          <button class="top">Top of Page</button>
          `
    }
  }
}

Prize.allPrizes = []