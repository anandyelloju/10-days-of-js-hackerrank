// Javascript Dates

function getDayName(dateString) {    
    return new Date(dateString).toLocaleDateString('en-US', { weekday: 'long' });
}