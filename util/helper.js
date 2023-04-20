function printDate() {
    let currentDate = new Date();
    return ("today's date is ", currentDate.getDate());
}

function printMonth() {
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    return (`current month is${month} `);
}

function printBatchInfo() {
    const now = new Date();
    const daysOfWeek = now.getDay();
    const weekOfMonth = Math.ceil((now.getDate() / 7));
  

    return (`Californium, w${weekOfMonth} D${daysOfWeek}, the topic for today is Nodejs module system `);
}

export { printDate, printMonth, printBatchInfo };