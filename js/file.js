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

            let section = document.createElement('section')
            let p = document.createElement('p')
            p.innerText = value('value-1') + 'Taka is Donated for' + text('text-1')
            let h1 = document.createElement('h1')
            h1.innerText = 'Date:' + ' ' + date().getDate() + ' ' + months()[date().getMonth()] + ' ' + date().getFullYear() + ' ' + date().toTimeString()
            let child1 = section.appendChild(p)
            let ch1 = section.appendChild(h1)
            getElement('history').appendChild(child1)
            getElement('history').appendChild(ch1)
        }
        else {
            alert('invalid input')
            hidden('my_modal_1')
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

            let section = document.createElement('section')
            let p = document.createElement('p')
            p.innerText = value('value-2') + 'Taka is Donated for' + text('text-2')
            let h1 = document.createElement('h1')
            h1.innerText = 'Date:' + ' ' + date().getDate() + ' ' + months()[date().getMonth()] + ' ' + date().getFullYear() + ' ' + date().toTimeString()
            let child2 = section.appendChild(p)
            let ch2 = section.appendChild(h1)
            getElement('history').appendChild(child2)
            getElement('history').appendChild(ch2)
        }
        else {
            alert('invalid input')
            hidden('my_modal_1')
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

            let section = document.createElement('section')
            let p = document.createElement('p')
            p.innerText = value('value-3') + 'Taka is Donated for' + text('text-3')
            let h1 = document.createElement('h1')
            h1.innerText = 'Date:' + ' ' + date().getDate() + ' ' + months()[date().getMonth()] + ' ' + date().getFullYear() + ' ' + date().toTimeString()
            let child3 = section.appendChild(p)
            let ch3 = section.appendChild(h1)
            getElement('history').appendChild(child3)
            getElement('history').appendChild(ch3)
        }
        else {
            alert('invalid input')
            hidden('my_modal_1')
        }
    })


getElement('history-btn').
    addEventListener('click', function () {
        hidden('hide')
        notHidden('history')
    })
getElement('donation-btn')
    .addEventListener('click', function () {
        hidden('history')
        notHidden('hide')
    })

document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'index1.html';
})

