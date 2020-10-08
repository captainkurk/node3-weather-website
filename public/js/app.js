console.log('client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    const secondMsg = 
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data)=> {
        if (data.error) {
            messageOne.textContent=data.error
        } else {
            messageOne.textContent=data.location
            messageTwo.textContent='Here is the weather description : ' + data.forecast.weatherDescription + ' and the temperature is ' + data.forecast.temperature + ' ,it feels like '+ data.forecast.feelslike + ' the pressure is ' + data.forecast.pressure + ' and the humidity is ' + data.forecast.humidity
        }


        
    })
})
})
