getdata();
		async function getdata(){
			const response = await fetch('/api'); //fetch data from route(/api) and put that data in response
			const data = await response.json();   //now convert response data into json format
		    for(item of data){
		    	const root = document.createElement('div');//Help to crete Html Element in JS
		    	const mood = document.createElement('div');
		    	mood.textContent = `mood: ${item.mood}`;  //Excuting Functionality of element
		    	const geo = document.createElement('div');
		    	geo.textContent = ` ${item.lat}, ${item.lon}`;
		    	const date = document.createElement('div');
		    	const dateString = new Date(item.timestamp).toLocaleString();
		    	date.textContent = dateString;
		    	const image = document.createElement('img');
		    	image.src = item.image64;
		    	root.append(mood, geo, date, image);
		    	document.body.append(root);

		    	//Style For Element
                /*
					let div = document.createElement('div');
          			div.id = 'content';
        			div.innerHTML = 'Hello There <p>CreateElement example</p>';
        			document.body.appendChild(div);
        			var x = document.createElement("STYLE");
  					var t = document.createTextNode("div {background-color: red;} p{background-color: blue;}");
  					x.appendChild(t);
  					document.head.appendChild(x);
                */


		    }
		    console.log(data);              //console,log in client side
		}