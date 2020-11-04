/*              ·~=≠≠x#≠≠=-                         ·=≈≠xxx≠≈~-·              
            ·~≠#%&$$$$&%x≈~·                        ~=≠#%$$$$$&%x≈-           
          ~x&$$$$$$$x~·  -%~                        #≈   -≈&$$$$$$$#≈·        
        =%$$$$$$$$$$-  -≠$$-                        x$%=·  x$$$$$$$$$&≠-      
      -%$$$$$$$$$$$$$%%$$$≈                         ·&$$&%&$$$$$$$$$$$$&≠     
     ·&$$$$$$$$$$$$$$$$$&=                           ·#$$$$$$$$$$$$$$$$$$≈    
     ≈$$$$$$$$$$$$$$$$$#-                              ≈&$$$$$$$$$$$$$$$$$    
     ≈$$$$$$$$$$$$$$$$$                                 ≈$$$$$$$$$$$$$$$$$    
     ·%$$$$$$$$$$$$$$$≈                                  &$$$$$$$$$$$$$$$=    
      ~#$$$$$$$$$$$$&≈                                   ·#$$$$$$$$$$$$&x     
      #%%%&&$$$$$&%≈-     =-   ·-=≈≈xxxxxx≠≠=~-·  -=       =x%$$$$$$&&%%&-    
      ≈$$&&%###≠~-       ·$&≈x%&$$$$$$$$$$$$$$$%#≠&$-        ·-≈###%&&$$%     
       #$$$$$$$x        ·≈$$$$$$$$$$$$$$$$$$$$$$$$$$%≈-        -$$$$$$$$~     
       ·x&$$&&%##≈-   ~x&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#=·  ·=x#%&&&$&%=      
         -%&$$$$$$$≠=%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&x≈%$$$$$$$&≈        
           -=≠x#%&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%#≠=~·         
             ·~≠%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%≠=-·          
≈====≈≠≠≠xx#%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&%%#xx≠≠≈=≈
%&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&%
 ··-=x%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%x=-·· 
       -≈#&$$$$$$$$$$$$$$$$$$$$&$$$$$$$$$$$$$$&$$$$$$$$$$$$$$$$$$$$&#≈-       
          ·=%$$$$$$$$$$$$$$$$$$%=x%$$$$$$$$%≠~%$$$$$$$$$$$$$$$$$$%=·          
     ·-~≈≠x#%$$$$$$$$$$$$$$$$$$$x  -x$$$$≠·  x$$$$$$$$$$$$$$$$$$$%#x≠≈~-·     
   =≠&$$$$$%%%&$&%$$$$$$$$$$$$$$$%≠≠%$$$$%≠≠&$$$$$$$$$$$$$$$%&$&%%%$$$$$&≠~   
  -$&$&#≠==x&$$%%$$~~≠#&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&#≠~~$$%%$$&x==≠#%$%$=  
  ≈$$$~  ≈%$$#x&$$~    ·-=≠#%&&$$$$$$$$$$$$$$$$&%%#≠=-·    ~$$&x#$$%≈  -$$$x  
  ≠$$≠  #$$%-~%$#~           ··-~~==========~~-··           ~#$%~·%$$#  =$$#  
  ≠$%  ·$$#·-$&≈                                              ≠&$-·#$$·  #$#  
  ≈$=  ~$%  -$&                                                &$·  %$~  -$x  
  -&   ~$~   &≠                                                #%   ~$~   #=*/




/*


	TWIST NOTATION

	UPPERCASE = Clockwise to next 90 degree peg
	lowercase = Anticlockwise to next 90 degree peg



	FACE & SLICE ROTATION COMMANDS

	F	Front
	S 	Standing (rotate according to Front Face's orientation)
	B 	Back
	
	L 	Left
	M 	Middle (rotate according to Left Face's orientation)
	R 	Right
	
	U 	Up
	E 	Equator (rotate according to Up Face's orientation)
	D 	Down



	ENTIRE CUBE ROTATION COMMANDS
	
	X   Rotate entire cube according to Right Face's orientation
	Y   Rotate entire cube according to Up Face's orientation
	Z   Rotate entire cube according to Front Face's orientation



	NOTATION REFERENCES

	http://en.wikipedia.org/wiki/Rubik's_Cube#Move_notation
	http://en.wikibooks.org/wiki/Template:Rubik's_cube_notation


*/




$(document).ready( function(){ 


	var useLockedControls = true,
		controls = useLockedControls ? ERNO.Locked : ERNO.Freeform;

	var ua = navigator.userAgent,
		isIe = ua.indexOf('MSIE') > -1 || ua.indexOf('Trident/') > -1;

	window.cube = new ERNO.Cube({
		hideInvisibleFaces: true,
		controls: controls,
		renderer: isIe ? ERNO.renderers.IeCSS3D : null
	});


	var container = document.getElementById( 'container' );
	container.appendChild( cube.domElement );



	if( controls === ERNO.Locked ){
		var fixedOrientation = new THREE.Euler(  Math.PI * 0.1, Math.PI * -0.25, 0 );
		cube.object3D.lookAt( cube.camera.position );
		cube.rotation.x += fixedOrientation.x;
		cube.rotation.y += fixedOrientation.y;
		cube.rotation.z += fixedOrientation.z;
	}


	const sounds = {
		"10-1": "../sounds/Sound-01.mp3",
		"1-1": "../sounds/Sound-02.mp3",
		"2-1": "../sounds/Sound-03.mp3",
		"11-1": "../sounds/Sound-04.mp3",
		"20-1": "../sounds/Sound-05.mp3",
		"19-1": "../sounds/Sound-06.mp3",
		"18-1": "../sounds/Sound-07.mp3",
		"9-1": "../sounds/Sound-08.mp3",
		"0-1": "../sounds/Sound-09.mp3",

		"0-0": "../sounds/Sound-10.mp3",
		"1-0": "../sounds/Sound-11.mp3",
		"2-0": "../sounds/Sound-12.mp3",

		"2-2": "../sounds/Sound-13.mp3",
		"11-2": "../sounds/Sound-14.mp3",
		"20-2": "../sounds/Sound-15.mp3",

		"20-5": "../sounds/Sound-16.mp3",
		"19-5":"../sounds/Sound-17.mp3", 
		"18-5":"../sounds/Sound-18.mp3", 

		"18-4": "../sounds/Sound-19.mp3",
		"9-4": "../sounds/Sound-20.mp3",
		"0-4": "../sounds/Sound-21.mp3",

		"3-0": "../sounds/Sound-22.mp3",
		"4-0":"../sounds/Sound-23.mp3",
		"5-0": "../sounds/Sound-24.mp3",

		"5-2":  "../sounds/Sound-25.mp3",
		"14-2": "../sounds/Sound-26.mp3",
		"23-2": "../sounds/Sound-27.mp3",

		"23-5": "../sounds/Sound-28.mp3",
		"22-5": "../sounds/Sound-29.mp3",
		"21-5":"../sounds/Sound-30.mp3",

		"21-4":"../sounds/Sound-31.mp3", 
		"12-4": "../sounds/Sound-32.mp3",
		"3-4": "../sounds/Sound-33.mp3",

		"6-0": "../sounds/Sound-34.mp3",
		"7-0":"../sounds/Sound-35.mp3" ,
		"8-0": "../sounds/Sound-36.mp3" ,

		"8-2":  "../sounds/Sound-37.mp3",
		"17-2": "../sounds/Sound-38.mp3",
		"26-2": "../sounds/Sound-39.mp3",

		"26-5": "../sounds/Sound-40.mp3",
		"25-5": "../sounds/Sound-41.mp3",
		"24-5":"../sounds/Sound-42.mp3",

		"24-4": "../sounds/Sound-43.mp3",
		"15-4": "../sounds/Sound-44.mp3",
		"6-4": "../sounds/Sound-45.mp3",

		"6-3": "../sounds/Sound-46.mp3",
		"7-3": "../sounds/Sound-47.mp3",
		"8-3": "../sounds/Sound-48.mp3",
		"17-3": "../sounds/Sound-49.mp3",
		"26-3": "../sounds/Sound-50.mp3",
		"25-3": "../sounds/Sound-51.mp3",
		"24-3": "../sounds/Sound-52.mp3",
		"15-3": "../sounds/Sound-53.mp3",
		"16-3": "../sounds/Sound-54.mp3",
	}

	
	console.log(window.cube);
	cube.inspect(); 
	//window.cube.shuffle()
	
	
	//OUR CODE
	cube.domElement.addEventListener('click', (e) => {

		if(e.target.getAttribute('sticker')) {
			let stickerId = e.target.getAttribute('sticker');


			const sound = new Howl({
				src: [sounds[stickerId]]
			});
			sound.play();

			console.log(stickerId);
			cube.up.northEast.inspect(); 
			//
			let positions = ['up', 'right', 'down', 'left', 'front', 'back'];
			let facePositions = ['northWest', 'north', 'northEast', 'west', 'origin', 'east', 'southWest', 'south', 'southEast'];
			
			console.log(cube[positions[0]][facePositions[0]].id)	
			// console.log(cube.up.north.inspect()); 
			// console.log(cube.up.north.back.color); //this one does update!!!!
			// console.log(cube.back.color);
		}
	});

	// The deviceMotion function provide some subtle mouse based motion
	// The effect can be used with the Freeform and Locked controls.
	// This could also integrate device orientation on mobile

	// var motion = deviceMotion( cube, container );

	// motion.decay = 0.1; 				// The drag effect
	// motion.range.x = Math.PI * 0.06;	// The range of rotation 
	// motion.range.y = Math.PI * 0.06;
	// motion.range.z = 0;
	// motion.paused = false;				// disables the effect

});