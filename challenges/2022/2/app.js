function countHours(year, holidays) {
    let extra_hours = 0;
    holidays.forEach(holiday => {
        let new_date = new Date(holiday + "," + year);
        if(new_date.getDay() >= 1 && new_date.getDay() <= 5)
            extra_hours += 2;
    })
    return extra_hours;
}
