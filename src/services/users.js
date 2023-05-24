import {db} from './firebase.js';
import {setDoc, doc} from 'firebase/firestore';

export function createUser(id, {
    email,
    nombre,
    apellido,
    nacimiento,
    nivel,
    genero,
    pais,
    ciudad,
    barrio,
    telefono,
    terminos}) {
    const userRef = doc(db, 'users', id);

    return setDoc(userRef, {
        email,
        nombre,
        apellido,
        nacimiento,
        nivel,
        genero,
        pais,
        ciudad,
        barrio,
        telefono,
        terminos
    });
}