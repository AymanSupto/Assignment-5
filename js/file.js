
document.getElementById('alternate').addEventListener('click',function(event){
    event.target.style.backgroundColor = '#B4F461'
    document.getElementById('donation-btn').style.backgroundColor = 'white'
})
document.getElementById('alternate').addEventListener('click',function(event){
    document.getElementById('history-btn').style.backgroundColor = 'white'
    event.target.style.backgroundColor = '#B4F461'
 })

 document.getElementById('blog').addEventListener('click', function(){
    window.location.href = 'index1.html';
 })
 
