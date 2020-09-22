function play(map,markers_list){
		
		markers_list.forEach(function(marker){
		
				markers_glist.push(marker["name"])
				markers_names.push(marker["name"])
		})
		map.addMarkers(markers_list)	
		ask();	
}

function ask(){
		if (markers_glist.length > 0){
			current_marker = chance.pickone(markers_glist)
			markers_glist = removeFromArray(markers_glist,current_marker)
			document.getElementById("text").innerHTML = current_marker
			return true
		}
		return false
}
