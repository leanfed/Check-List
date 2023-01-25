
export const uniqueDate = (tasks) => {
    const unique = [];

    tasks.forEach(task => {
        if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
    });
    return unique;
};

export const orderDates = (date) => {
    return date.sort((a, b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");

        return firstDate - secondDate
    });
};