import {db} from './firebase.js';
import {setDoc, doc} from 'firebase/firestore';

export function createUser(id, {email}) {
    const userRef = doc(db, 'users', id);

    return setDoc(userRef, {
        email
    });
}