import moment from 'moment'

const baseUrl = 'https://api.iev.aero/api/flights'

const currentDatedate = moment().format('DD-MM-YYYY')

export const fetchAirportData = () => {
    return fetch(`${baseUrl}/${currentDatedate}`)
        .then(response => response.json())
}

// export const createTask = taskData => {
//     return fetch(baseUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8'
//         },
//         body: JSON.stringify(taskData)
//     })
// }

// export const updateTask = (taskId, updatedTaskData) => {
//     return fetch(`${baseUrl}/${taskId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8'
//         },
//         body: JSON.stringify(updatedTaskData)
//     })
// }

// export const deleteTask = (taskId) => {
//     return fetch(`${baseUrl}/${taskId}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8'
//         },
//     })
// }