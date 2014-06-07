
// var counter = 0;

// var move = function(){
// 	var object = new Object();
// 	object.class = 'boba-ball';
// 	// object["left"] = Math.floor(Math.random() * 100) + "px";
// 	// object["top"] = Math.floor(Math.random() * 100) + "px";
// 	object.id = 'ball' + counter;
	
// 	jQuery('<div/>', object).appendTo('#boba-bottom');

// 	console.log(object);

// 	$("#ball" + counter).css('left', Math.floor(Math.random() * 100) + "%");
// 	$("#ball" + counter).css('top', Math.floor(Math.random() * 100) + "%");

// 	counter += 1;
// }

// //window.setInterval(move, 1000);
//
// PhysicsJS
// A modular, extendable, and easy-to-use physics engine for javascript
//
// Use the select box in the top right to see more examples!
//
Physics(function (world) {

    var viewWidth = 500//window.innerWidth
        ,viewHeight = 500//window.innerHeight
        // center of the window
        ,center = Physics.vector(viewWidth, viewHeight).mult(0.5)
        // bounds of the window
        ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)
        ,attractor
        ,edgeBounce
        ,renderer
        ;

    // create a renderer
    renderer = Physics.renderer('canvas', {
        el: 'viewport'
        ,width: viewWidth
        ,height: viewHeight
    });

    // add the renderer
    world.add(renderer);
    // render on each step
    world.on('step', function () {
        world.render();
    });

    // constrain objects to these bounds
    edgeBounce = Physics.behavior('edge-collision-detection', {
        aabb: viewportBounds
        ,restitution: 0.2
        ,cof: 0.8
    });

    // resize events
    window.addEventListener('resize', function () {

        viewWidth = 500;//window.innerWidth;
        viewHeight = 500;//window.innerHeight;

        renderer.el.width = viewWidth;
        renderer.el.height = viewHeight;

        viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
        // update the boundaries
        edgeBounce.setAABB(viewportBounds);

    }, true);

    // move the attractor position to match the mouse coords
    // renderer.el.addEventListener('mousemove', function( e ){
    //     attractor.position({ x: e.pageX, y: e.pageY });
    // });

    for(var i = 0; i < 20; i+=1){
        var square = Physics.body('circle', {
            x: Math.floor(Math.random() * 500),
            y: Math.floor(Math.random() * 500),
            vx: Math.random() * 2.5,
            vy: Math.random() * 5,
            radius: 20
        });

        world.add( square );

    }

   
    
    world.render();

    // world.add([
    //     Physics.behavior('constant-acceleration')
    // ]);

    world.add( Physics.behavior('edge-collision-detection', {
        aabb: viewportBounds,
        restitution: 0.3
    }) );
    // ensure objects bounce when edge collision is detected
    world.add( Physics.behavior('body-impulse-response') );

    world.add( Physics.behavior('body-collision-detection') );
    world.add( Physics.behavior('sweep-prune') );

    // subscribe to ticker to advance the simulation
    Physics.util.ticker.on(function( time ) {
        world.step( time );
    });

    // start the ticker
    Physics.util.ticker.start();
});

// go ahead... expand the code and play around...
