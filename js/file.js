getElement('alternate').addEventListener('click', function (event) {
    event.target.style.backgroundColor = '#B4F461'
    getElement('donation-btn').style.backgroundColor = 'white'
})
getElement('alternate').addEventListener('click', function (event) {
    getElement('history-btn').style.backgroundColor = 'white'
    event.target.style.backgroundColor = '#B4F461'
})


getElement('donate-1')
    .addEventListener('click', function () {
        if (inputMoney('value-1') > 0 && inputMoney('value-1') <= availableMoney('available-amount')) {
            let amount = inputMoney('value-1')
            let yetDonated = moneyDonated('donation-1')
            let moneyAvailable = availableMoney('available-amount')
            getElement('donation-1').innerText = amount + yetDonated;
            getElement('available-amount').innerText = moneyAvailable - amount
        }
        else {
            alert('invalid input')
        }
    })


getElement('donate-2')
    .addEventListener('click', function () {
        if (inputMoney('value-2') > 0 && inputMoney('value-2') <= availableMoney('available-amount')) {
            let amount = inputMoney('value-2')
            let yetDonated = moneyDonated('donation-2')
            let moneyAvailable = availableMoney('available-amount')
            getElement('donation-2').innerText = amount + yetDonated;
            getElement('available-amount').innerText = moneyAvailable - amount
        }
        else {
            alert('invalid input')
        }
    })

getElement('donate-3')
    .addEventListener('click', function () {
        if (inputMoney('value-3') > 0 && inputMoney('value-3') <= availableMoney('available-amount')) {
            let amount = inputMoney('value-3')
            let yetDonated = moneyDonated('donation-3')
            let moneyAvailable = availableMoney('available-amount')
            getElement('donation-3').innerText = amount + yetDonated;
            getElement('available-amount').innerText = moneyAvailable - amount
        }
        else {
            alert('invalid input')
        }
    })




document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'index1.html';
})

