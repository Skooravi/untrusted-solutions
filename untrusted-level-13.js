/*
 * robotMaze.js
 *
 * The blue key is inside a labyrinth, and extracting
 * it will not be easy.
 *
 * It's a good thing that you're a AI expert, or
 * we would have to leave empty-handed.
 */
 
function startLevel(map) {
    // Hint: you can press R or 5 to "rest" and not move the
    // player, while the robot moves around.
 
    map.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 
    map.placePlayer(map.getWidth()-1, map.getHeight()-1);
    var player = map.getPlayer();
 
    map.defineObject('robot', {
        'type': 'dynamic',
        'symbol': 'R',
        'color': 'gray',
        'onCollision': function (player, me) {
            me.giveItemTo(player, 'blueKey');
        },
        'behavior': function (me) {
// move randomly
//var moves = map.getAdjacentEmptyCells(me.getX(), me.getY());
// getAdjacentEmptyCells gives array of ((x, y), direction) pairs
//me.move(moves[map.getRandomInt(0, moves.length - 1)][1]);
 
var offset = 11
map.placeObject(1,offset,'block');
map.placeObject(map.getWidth()-2,map.getHeight()-1,'block');
 
if ( (me.getX() == map.getWidth()-2) && (me.getY() > 6))
{
  me.move('down');
}
 
if (player.atLocation(me.getX(), (me.getY()+offset+1)))
{
  me.move('down');
}
 
if (player.atLocation(me.getX(), (me.getY()+offset-1)))
{
  me.move('up');
}
 
if (player.atLocation(me.getX()+1, (me.getY()+offset)))
{
  me.move('right');
}
 
if (player.atLocation(me.getX()-1, (me.getY()+offset)))
{
  me.move('left');
}