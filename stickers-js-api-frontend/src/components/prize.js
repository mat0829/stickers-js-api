class Prize {
  
  static findPrize(id) {
    return this.allPrizes.find((prize) => prize.id === id) // Find Prize by passed in id
  }

  static updatePrize(updatedPrizeData) {
    // Update attributes
    const prizeToUpdate = this.findPrize(updatedPrizeData.id)
    prizeToUpdate.name = updatedPrizeData.name
    prizeToUpdate.image = updatedPrizeData.image
    prizeToUpdate.cost = updatedPrizeData.cost
    prizeToUpdate.purchased = updatedPrizeData.purchased

    return prizeToUpdate // Return the updated Prize instance
  }

  constructor(prizeDataObj) {
    if (prizeDataObj.errors !== undefined) {
      this.errors = prizeDataObj.errors
    } else {
        this.id = prizeDataObj.id
        this.name = prizeDataObj.name
        this.image = prizeDataObj.image
        this.cost = prizeDataObj.cost
        this.purchased = prizeDataObj.purchased
        this.prizeParent = prizeDataObj.prize_parent
        this.prizeChild = prizeDataObj.prize_child
        Prize.allPrizes.push(this)
    }
  }

  renderPrizeSpan() {
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
      const isPrizePurchasedString = `${this.prizeChild.name} has purchased: "${this.name}"!`
      
      return `<h2>${isPrizePurchasedString}</h2>
              <h3>~ Created by: ${this.prizeParent.name}</h3>
              <img src="${this.image}"><br><br>
              <button class="edit" data-id="${this.id}" data-action="edit">Edit this Prize!</button>
              <button class="delete" data-id="${this.id}" data-action="delete">Delete this Prize!</button><br><br>
              <button class="addPrizeForm">Create another new Prize</button><br><br>
              <button class="top">Top of Page</button><br><br>
              `
    } else {
        const isPrizePurchasedString = `"${this.name}" has not been purchased yet.`

        return `<h2>${isPrizePurchasedString}</h2>
                <h3>~ Created by: ${this.prizeParent.name}</h3>
                <img src="${this.image}"><br>
                <h2>Cost: ${this.cost} Points!</h2>
                <button class="edit" data-id="${this.id}" data-action="edit">Edit this Prize!</button>
                <button class="delete" data-id="${this.id}" data-action="delete">Delete this Prize!</button><br><br>
                <button class="addPrizeForm">Create another new Prize</button><br><br>
                <button class="top">Top of Page</button><br><br>
                `
    }
  }
  
  renderChildPrizeDetails() {
    if (this.purchased == true) {
      const isPrizePurchasedString = `You have purchased: "${this.name}"!`

      return `<h1>${isPrizePurchasedString}</h1>
              <h3>~ Created by: ${this.prizeParent.name}</h3>
              <img src="${this.image}"><br><br>
              <button class="top">Top of Page</button><br><br>
              `
    } else {
        const isPrizePurchasedString = `"${this.name}" has not been purchased yet.`
        
        return `<h1>"${this.name}"</h1>
                <h3>~ Created by: ${this.prizeParent.name}</h3>
                <img src="${this.image}">
                <h2>${isPrizePurchasedString}</h2>
                <h2>Cost: ${this.cost} Points!</h2>
                <button class="buyPrize" data-id="${this.id}">Purchase this Prize</button><br><br>
                <button class="top">Top of Page</button><br><br>
                `
    }
  }
}

Prize.allPrizes = []