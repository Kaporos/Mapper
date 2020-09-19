import slugify, json
terms  = open("world_list.txt","r").read().split("\n")

json_output = []

for term in terms:
	term_def = {}
	if term == "":
		continue
	print(slugify.slugify(term))
	term_def["term"] = term
	term_def["definition"] = term
	json_output.append(term_def)

open("output.json","w").write(json.dumps(json_output))
	
