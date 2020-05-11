import request from 'superagent';

const backendURL = `https://calm-escarpment-70276.herokuapp.com`;

//goes to the workout page, it's just the one exercise
export const getExercise = async (workoutId) => {
    const data = await request.get(`${backendURL}/exercises/${workoutId}`)
    return data.body;
}

//goes to workout list, displays all the lists
export const getExercises = async () => {
    const data = await request.get(`${backendURL}/exercises/`)
    return data.body;
}

//add exercise, goes to the admin page
export const addExercise = async (exercise) => {
    const data = await request.post(`${backendURL}/exercises/`, exercise) 
    return data.body;
}