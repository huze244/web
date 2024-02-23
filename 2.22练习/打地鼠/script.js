var game = document.querySelector('#game-container')
var childrenArray = Array.from(game.children);
childrenArray.forEach(function(item){
    item.innerHTML='老鼠'
})
