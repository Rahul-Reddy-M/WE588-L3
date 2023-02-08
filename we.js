function getinfo() {
    let cname = document.getElementById("city").value

    let response = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cname + "&appid=34f68967b1082704908d7ec905afb11d&units=metric")
    response.then((res) => {
        res.json().then((data) => {
            let { main: { temp, temp_max, temp_min } } = data
            console.log("country name: " + data.sys.country)
            console.log("minimum temp: " + temp_min)
            console.log("maximum temp: " + temp_max)

            let resultspace = document.getElementById("resultspace")
            resultspace.innerHTML += "country name: " + data.sys.country + "<br><br>minimum temp: "
                + temp_min + "<br><br>maximum temp: " + temp_max



        })
    })
    a(cname)
}
    /*let fData=fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cname+"&appid=34f68967b1082704908d7ec905afb11d")
    fData.then((res1)=>{
        res1.json().then((data) => {
            let wArray=data.list
            
            for(i=0;i<wArray.length;i=i+8)
            {
                console.log(wArray[i].main.temp)
            }
    
        })
    })*/
function a(cname){
    let response1 = fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cname + "&appid=34f68967b1082704908d7ec905afb11d&units=metric")

    response1.then((res) => {
        res.json().then((data) => {
            let j = 0;
            var temp = [];
            var date = [];
            for (let i = 0; i < data.list.length; i = i + 8) {
                temp[j] = data.list[i].main.temp;
                a = data.list[i].dt_txt.split(" ")
                date[j] = a[0];
                console.log(temp[j], date[j])
                j++;
            }
            plotting(date, temp)

        })
    })


}
function plotting(date, temp) {

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: date,
            datasets: [{
                backgroundColor:["red","green","yellow","blue","brown"],
                label: 'weatherreport',
                data: temp,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}