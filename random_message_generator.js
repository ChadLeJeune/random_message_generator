const swimmerNames = ['Michael', 'Jenni', 'Chad', 'Victoria', 'Matt'];

const events = [
    {distance: 100, stroke: 'Breast Stroke', record: '47'},
    {distance: 200, stroke: 'Breast Stroke', record: '100'},
    {distance: 100, stroke: 'Butterfly', record: '43'},
    {distance: 200, stroke: 'Butterfly', record: '94'},
    {distance: 100, stroke: 'Backstroke', record: '45'},
    {distance: 200, stroke: 'Backstroke', record: '96'},
    {distance: 100, stroke: 'Freestyle', record: '40'},
    {distance: 200, stroke: 'Freestyle', record: '87'},
];

const generate_random_time = distance => {
    if (distance === 100) {return Math.floor(Math.random() * 65) + 35;}  // Outputs times between 35 and 100 seconds.  
    if (distance === 200) {return Math.floor(Math.random() * 100) + 80;}  // Outputs times between 80 and 180 seconds.  
    else {console.log('Please input a valid distance (100 or 200).');};
}

const time_from_seconds = totalSeconds => {
    let hours = Math.trunc(totalSeconds / 3600);
    let minutes = Math.trunc((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds % 60;

    let formattedHours = `000${hours.toString()}`.slice(-3)
    let formattedMinutes = `00${minutes.toString()}`.slice(-2)
    let formattedSeconds = `00${seconds.toString()}`.slice(-2)

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const generate_random_message = () => {
    const swimmer = swimmerNames[Math.floor(Math.random() * swimmerNames.length)];
    const event = events[Math.floor(Math.random() * events.length)];
    const eventTime = generate_random_time(event.distance) ;
    
    if (eventTime < event.record) {
        return `${swimmer} swam the ${event.distance.toString()} ${event.stroke} in ${time_from_seconds(eventTime)} and broke the previous record of ${time_from_seconds(event.record)}!`;
    } else {
        return `${swimmer} swam the ${event.distance.toString()} ${event.stroke} in ${time_from_seconds(eventTime)}.`;
    };
}

console.log(generate_random_message());
