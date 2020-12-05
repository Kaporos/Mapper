function play() {

    country_list = chance.pickset(countries, CURRENT_NUMBER)
    ask()


}

function ask(){
    app.isTextInput = false

    code = app.last_country

    if (country_list.length > 1){
    while (code === app.last_country){
        code = chance.pickone(country_list)
    }
    }else{
        code = country_list[0]
    }
    country_name = map.series.regions[0].elements[code].config.name


    translated_name = i18n(country_name)
    app.current_country = translated_name
    app.good_answer = i18n(CAPITALS[code])

    all_capitals = removeFromArray(Object.values(CAPITALS),app.good_answer)

    others = chance.pickset(all_capitals, HOW_MANY_ANSWERS - 1)
    others.push(app.good_answer)

    others = chance.shuffle(others)

    app.choices = others
    
    if (Object.keys(app.streak).includes(translated_name)){
        if(app.streak[translated_name] >= HOW_MANY_TO_TEXT){
            if(app.streak[translated_name] < HOW_MANY_TO_OK){
                app.isTextInput = true
                console.log("TEXT ")
            }
            
        }
    }else{
        console.log("Pass streak")
    }
    app.last_country = code




}

