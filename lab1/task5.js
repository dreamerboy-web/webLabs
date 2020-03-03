exports.calendar = (month, year) =>{
    let days = new Date(year, month, 0).getDate();
    console.log(`Year ${year} has 365 days and ${month} month has ${days} days!!`);
};