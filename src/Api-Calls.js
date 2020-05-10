import request from 'superagent';

const backend = `https://calm-escarpment-70276.herokuapp.com/exercises/`

export const addExercise = async () => request.post(`${backend}/`) 