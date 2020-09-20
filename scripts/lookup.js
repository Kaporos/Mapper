



  function play(map){
		  
		  
		  total_regions = getAllCountries(map);
		  
		  current_regions = chance.pickset(total_regions,start_with)
		  current_regions.forEach(function(code){
			total_regions = removeFromArray(total_regions,code)  
		   })
		  random_ask();
	  }
	
	  function winGame(){
		 alert("You just win !")
		 document.location.reload()
	  }
	  
	  
	  function failCountry(map,code){
		tries += 1
		colorize(map,code,"red")

		
		
		if (allowed_tries == tries){
				failed = true
				colorize(map,current_code,"blue")
				map.setFocus({region:current_code,animate:true})
				tries = 0
		}
		
		
	  }
	  
	  
	  function winCountry(map,code){
		colorize(map,code,"lightgreen")
		clearCountry()
		if (failed == false){
			if (Object.keys(counter).includes(code)){
				
					counter[code] += 1
			}else{
				counter[code] = 1
			}
			if (counter[code] == repetitions){
				current_regions = removeFromArray(current_regions,code)
				if (total_regions.length > 0){
					new_code = (chance.pickone(total_regions))
					current_regions.push(new_code)
					total_regions = removeFromArray(total_regions,new_code)
				}
				
			}
		}
		failed = false
		tries = 0
		map.setFocus({
              x: 0.0,
              y: 0.0,
              scale: 1,
              animate: false
            })
		setTimeout(() => {  resetMap(map); 

		if (current_regions.length == 0){
			winGame()
		}else{
			random_ask()
		}	
		
		}, 750);
		
	  }
	  	  
	function random_ask(){
		//regions = Object.keys(map.series.regions[0].elements)
		while (true){
			current_code = chance.pickone(current_regions)
			if (current_code != last_code){
				break;
			}
		}
		ask(current_code)
		
		}
  
	async function ask(code){
		
		code_place = document.getElementById("text")
		name = map.series.regions[0].elements[code].config.name
		name = i18n(name)
		code_place.innerHTML = name
		console.log("Done")
		last_code = code
		
	}
	
	function verify(code){
		if (code === current_code){
			return true
		}
		return false
	}
  
  
