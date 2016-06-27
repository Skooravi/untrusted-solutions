/*
 * robotNav.js
 *
 * The green key is located in a slightly more
 * complicated room. You'll need to get the robot
 * past these obstacles.
 */
 
function startLevel(map) {
    // Hint: you can press R or 5 to "rest" and not move the
    // player, while the robot moves around.
 
    map.placePlayer(0, map.getHeight() - 1);
    var player = map.getPlayer();
 
    map.defineObject('robot', {
        'type': 'dynamic',
        'symbol': 'R',
        'color': 'gray',
        'onCollision': function (player, me) {
            me.giveItemTo(player, 'greenKey');
        },
        'behavior': function (me) {
if (me.getX() < 30 && me.getY() < 5)
{
  me.move('down');
}
if (me.getX() < 30 && me.getY() >= 4)
{
  me.move('right');
}
if (me.getX() >= 30 && me.getX() <= 31 && me.getY() > 2 )
{
  me.move('up');
}
if (me.canMove('right'))
{
  me.move('right');
}
else
{
  me.move('down');
}
 
 
 
 
 
 
 
 
        }
    });