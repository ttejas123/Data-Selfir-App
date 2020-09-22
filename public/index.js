function setup(){
		
		let lat, lon;
		
		    const button = document.getElementById('sub');
		    button.addEventListener('click', async event =>{
			const mood = document.getElementById("mood").value;
            video.loadPixels();//to use base64 we have to use this and also it's loading video pixal for base64 to store this pixals
			const image64 = video.canvas.toDataURL();//we are converting video data into text base64 data to store
			const data = { lat, lon, mood, image64};
			const option = {
                	method:'POST',
                	headers:{
                		'Content-Type':'application/json'
                	},
                	body:JSON.stringify(data)
                };
                const res = await fetch('/api',option);
                const json = await res.json();
                console.log(json); //data collected from option via map

		});
		if ('geolocation' in navigator) {
			console.log("geolocation is available");
			    navigator.geolocation.getCurrentPosition(position => {
            	        
		        lat = position.coords.latitude;
		        lon = position.coords.longitude;
		        document.getElementById('latitude').textContent = lat;
		        document.getElementById('longitude').textContent = lon;
                console.log(lat, lon);
   
			});
		}else{
			console.log("geolocation is not available");
		}

		noCanvas();
		const video = createCapture(VIDEO);
		video.size(340, 220);
	}	