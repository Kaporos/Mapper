	  
	  function removeFromArray(arr, value) { return arr.filter(function(ele){ return ele != value; });}

	  function getAllCountries(map){
	  
	  return Object.keys(map.series.regions[0].elements)
	  
	  }
	  function getSelectedRegionsMap(map){
		  result = {}
		  regionsMap = map.getSelectedRegions()
		  regionsMap.forEach(function (region) {
			  console.log(region);
			  region_color = map.series.regions[0].elements[region].element.config.style.selected.fill;
			  result[region] = region_color;
		  }
		  )
		  return result
		  
	  }

	  function resetMap(map){
		  map.clearSelectedRegions()		  
	  }
	  
	  
	  function colorize(map,code,color){
		  
		  
		colors = getSelectedRegionsMap(map)
		
		colors[code] = color
		map.clearSelectedRegions()

		Object.keys(colors).forEach(function (region) {
					console.log(region)
					console.log(colors[region])
					map.series.regions[0].elements[region].element.config.style.selected.fill = colors[region]
			
			})
		map.setSelectedRegions(Object.keys(colors))

		
		

	  }
	
  

	

