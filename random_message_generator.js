const swimmerNames = ['Michael', 'Jenni', 'Chad', 'Victoria', 'Matt']

const events = [
    {distance: 100, stroke: 'Breast Stroke', record: '47'},
    {distance: 200, stroke: 'Breast Stroke', record: '100'},
    {distance: 100, stroke: 'Butterfly', record: '43'},
    {distance: 200, stroke: 'Butterfly', record: '94'},
    {distance: 100, stroke: 'Backstroke', record: '45'},
    {distance: 200, stroke: 'Backstroke', record: '96'},
    {distance: 100, stroke: 'Freestyle', record: '40'},
    {distance: 200, stroke: 'Freestyle', record: '87'},
]

const generate_random_time = distance => {
    if (distance === 100) {return Math.floor(Math.random() * 65) + 35}  // Outputs times between 35 and 100 seconds.  
    if (distance === 200) {return Math.floor(Math.random() * 100) + 80}  // Outputs times between 80 and 180 seconds.  
    else {console.log('Please input a valid distance (100 or 200).')}
}

const generate_random_message = () => {
    const swimmer = swimmerNames[Math.floor(Math.random() * swimmerNames.length)]
    const event = events[Math.floor(Math.random() * events.length)]
    const eventTime = generate_random_time(event.distance) 
    
    if (eventTime < event.record) {
        return `${swimmer} swam the ${event.distance.toString} in ${eventTime.toString} seconds and broke the previous record of ${event.record.toString}!`
    } else {
        return `${swimmer} swam the ${event.distance.toString} in ${eventTime.toString} seconds`
    }
}