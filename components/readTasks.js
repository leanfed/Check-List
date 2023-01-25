import { createTask } from "./addTask.js";
import { uniqueDate, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTasks = () => {
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const date = uniqueDate(taskList);

    const order = orderDates(date);

    date.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date))
        taskList.forEach((task) => {
            const taskdate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskdate)
            if (diff == 0) {
                list.appendChild(createTask(task));
            };

        });
    })
};