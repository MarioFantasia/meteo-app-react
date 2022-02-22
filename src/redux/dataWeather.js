/* FUNZIONE CHE ESTRAPOLA DATI DA "oldArr" E LI INSERISCE IN "newArr" */
/*
    I associo ad ogni key un valore
    I nomi dei valori sono relativi all'oggetto di risposta API 'seconda chiamata'
*/
export function setObject (newArr, oldArr) {
    return oldArr.map( (item, index) => {
        newArr[index] = {
            'id': item.id,
            'name': item.name,
            'live': item.id === 1 ? true : false,
            'dtCurrentIta' : item.current.dt,
            'timeZone' : item.timezone,
            'timeZoneOffeset' : item.timezone_offeset, 
            'unixTime': setDate(setTimeUnix(item.current.dt, item.timezone, item.timezone_offset)),
            'morning' : setDate(item.current.dt).morning,
            'currently': {
                'weather': item.current.weather[0].main,
                'temp' : parseInt(item.current.temp),
                'icon' : `http://openweathermap.org/img/wn/${item.current.weather[0].icon}.png`,
            },
            'hourly': getInfoToday(item.hourly),
            'weekly': getInfoWeek(item.daily),
            'monthly' : getInfoMonth(item.daily)
        }
    })
}


//const pos = oldArr.findIndex(elm => elm.live===true);  
/* Funzione per il posizonamento dell'elemento avente live===true SEMPRE nella prima posizione*/
export function orderArrayElm ( newArr = [], oldArr) {
    return oldArr.map((elm, index) => {
        if(elm.id === 1 && index!==0) {
            const pos = oldArr.findIndex(elm => elm.id === 1);
            console.log(pos);
            const tmp = newArr[0];
            newArr[0] = oldArr[pos]
            newArr[pos] = tmp;
            return oldArr.map((el, i) => {
                if(el.live !==true && !newArr.includes(el)) {
                    newArr.push(el);
                }
            })
        } else {
            newArr = oldArr;
            return newArr;
        }

    })
}


/* FUSO ORARIO */
/* 
Setto il fuso orario in base a quello italiano
*/
export function setTimeUnix (dateTime, timeZone, timeZoneOffset) {
    if (timeZone === "Europe/London") {
        return dateTime + 3600
    } else if (timeZone === "Europe/Rome"){
        return dateTime;
    } else {
        return dateTime + timeZoneOffset + 3600
    }
}

/* CONVERSIONE E SETTAGGIO DEI DATI RELATIVI A DATA E ORARIO */
export function setDate(timestamp) {
    //conversione
    let time = new Date(timestamp * 1000); 

    /* SETTAGGIO */
    let month = time.getMonth()
    //sommo 1 per non farlo partire da zero "getMonth() => [0,11]"
    switch(month + 1 ){
        case 1: month = "January";
            break;
        case 2: month = "February";
            break;
        case 3: month = "March";
            break;
        case 4: month = "April";
            break;
        case 5: month = "May";
            break;
        case 6: month = "June"; 
            break;
        case 7: month = "July";
            break;
        case 8: month = "August";
            break;
        case 9: month = "September";
            break;
        case 10: month = "October";
            break;
        case 11: month = "November";
            break;
        case 12: month = "December";
            break;

        default: return month;
    }

    //Giorno [1,31]
    let date = time.getDate(); 

    //Nome del giorno
    let day = time.getDay(); 
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default: return day;
    }

    //minuti. Condizione per hh:m => hh:mm
    let min = time.getMinutes();
    if (min < 10 ) {
        min = `0${min}`;
    }

    //serve per a.m o p.m
    let morning = false;

    //ora. stessa condizione dei minuti. condizione per [0,24] => [0,12] am/pm
    let hour = time.getHours();
    if (hour > 12) {
        morning = false
        hour = hour - 12;
        min = `${min} p.m`;
    } else {
        min = `${min} a.m`;
        morning = true

    }
    return {month, hour, date, day, min, morning}
}

/* FUNZIONE PER LA COMPLAZIONE DELLA KEY HOURLY */
export function getInfoToday(arr) {
    let newArr = [];

    /* divido per 2 perche la risposta api da dati per 48h ma per il progetto sono necessarie 24h */
    for(let i = 0; i < arr.length/2 ; i++) {
        newArr[i] = 
            {
                'id' : i+1,
                'morning' : setDate(arr[i].dt).morning,
                'temp' : parseInt(arr[i].temp),
                'time' : setDate(arr[i].dt).hour
            }

    }
    return newArr;
}

/* FUNZIONE PER LA COMPLAZIONE DELLA KEY WEEKLY */
export function getInfoWeek(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr[i] = 
            {   
                'id' : i+1,
                'time' : setDate(arr[i].dt).day,
                'temp' : parseInt(arr[i].temp.day),
                'icon' : `http://openweathermap.org/img/wn/${arr[i].weather[0].icon}.png`,
                'description' : arr[i].weather[0].description,
            }
    }

    return newArr;
}

/* FUNZIONE PER LA COMPLAZIONE DELLA KEY MONTHLY*/
/* 
Non essendo possibile ottenere i dati per un mese "bisogna pagare", ho creato delle previsioni fake per la settimana successiva
*/
export function getInfoMonth(arr) {
    let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        newArr[i] = 
            {   
                'time' : {
                    'day' : setDate(arr[i].dt).day.substring(0, 3),
                    'date' : setDate(arr[i].dt).date + 7, //le previsioni sono per la settimana successiva alla attuale
                    'month' : setDate(arr[i].dt).month.substring(0,3)
                },

                'weather' : {
                    'icon' : `http://openweathermap.org/img/wn/${arr[i].weather[0].icon}.png`,
                    'temp' : `${parseInt(arr[i].temp.day)}°`,
                    'description' : arr[i].weather[0].description,
                    'tempMin' : `${parseInt(arr[i].temp.min)}°`,
                    'tempMax' : `${parseInt(arr[i].temp.max)}°`,
                },

                'other' : {
                    'humidity' : `${arr[i].humidity}%`,
                    'uv' : parseInt(arr[i].uvi),
                    'dew_point' : `${parseInt(arr[i].dew_point)}°C`,
                },
            }
    }

    return newArr;
}




