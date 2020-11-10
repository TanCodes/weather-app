
var inputval = document.getElementById("inputval")
var buttonid = document.getElementById("buttonid")
 buttonid.addEventListener("click",()=>{

    var url ="http://api.openweathermap.org/data/2.5/weather?q="+ inputval.value +"&appid=your_api_id_here";
    fetch(url)
    .then(
        (apidata) => apidata.json()
        )

    .then((data) => {
        console.log(data)
        //city//
        var nameval = data['name']
        var namehtml = document.getElementById("namehtml")
        namehtml.innerHTML = nameval
        console.log(nameval)

        // description//
        var weatherval = data['weather'][0]['description']
        var desphtml = document.getElementById("desphtml")
        desphtml.innerHTML = weatherval
        console.log(weatherval)

        // temperature in F//
        var tempval = data['main']['temp']
        var tempfar = Math.floor(((tempval-273.15)*1.8)+32);
        var tempf = document.getElementById("tempf")
        tempf.innerHTML = `${tempfar} &#8457`  
        console.log("farenhite",tempfar)

         // temperature in c//
         var tempval = data['main']['temp']
         var tempcel = Math.floor(tempval-273.15);
         var tempc = document.getElementById("tempc")
         tempc.innerHTML = `${tempcel} &#8451`
         console.log("celcius",tempcel)

        // icon //
        var icondata = data['weather'][0]['icon']
        var icon = document.getElementById('icon')
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icondata}.png"></img>`
        console.log(icondata)

    })

   
    // error//
    .catch( (error) => {
            console.log("error is ", error)
        })
})
