/**********************
 * fordingTheRiver.js *
 **********************
 *
 * And there's the river. Fortunately, I was prepared for this.
 * See the raft on the other side?
 *
 * Everything is going according to plan.
 */
 
function startLevel(map) {
    var raftDirection = 'down';
 
    map.placePlayer(map.getWidth()-1, map.getHeight()-1);
 
    map.defineObject('raft', {
        'type': 'dynamic',
        'symbol': '¦',
        'color': '#420',
        'transport': true, // (prevents player from drowning in water)
        'behavior': function (me) {
            me.move(raftDirection);
        }
    });
 
    map.defineObject('water', {
        'symbol': '¦',
        'color': '#44f',
        'onCollision': function (player) {
            player.killedBy('drowning in deep dark water');
        }
    });
 
    for (var x = 0; x < map.getWidth(); x++) {
        for (var y = 5; y < 15; y++) {
            map.placeObject(x, y, 'water');
        }
    }
 
    map.placeObject(20, 5, 'raft');
    map.placeObject(0, 2, 'exit');
    map.placeObject(0, 1, 'block');
    map.placeObject(1, 1, 'block');
    map.placeObject(0, 3, 'block');
    map.placeObject(1, 3, 'block');
 
    
    map.defineObject('boat', {
        'type': 'dynamic',
        'symbol': '¦',
        'color': '#ff0',
        'transport': true, // (prevents player from drowning in water)
    });
    
    map.placeObject(21, 5,  'boat');
    map.placeObject(21, 6,  'boat');
    map.placeObject(21, 7,  'boat');
    map.placeObject(21, 8,  'boat');
    map.placeObject(21, 9,  'boat');
    map.placeObject(21, 10, 'boat');
    map.placeObject(21, 11, 'boat');
    map.placeObject(21, 12, 'boat');
    map.placeObject(21, 13, 'boat');
    map.placeObject(21, 14, 'boat');
 
}
 
function validateLevel(map) {
    map.validateExactlyXManyObjects(1, 'exit');
    map.validateExactlyXManyObjects(1, 'raft');
}