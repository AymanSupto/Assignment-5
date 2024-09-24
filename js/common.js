function getElement(id) {
    let element = document.getElementById(id)
    return element;
}
function inputMoney(id) {
    let money = document.getElementById(id).value
    let no = parseFloat(money)
    return no;
}
function moneyDonated(id) {
    let donation = document.getElementById(id).innerText
    let no = parseFloat(donation)
    return no;
}
function availableMoney(id) {
    let moneyAvailable = document.getElementById(id).innerText
    let no = parseFloat(moneyAvailable)
    return no;
}
function hidden(id) {
    document.getElementById(id).style.display = 'none'
}
function notHidden(id){
    document.getElementById(id).style.display = 'block'
}
function text(id){
    return document.getElementById(id).innerText
}
function value(id){
    return document.getElementById(id).value
}