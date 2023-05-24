import {auth} from "./firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUser } from "./users";

export async function register({email, password}) {
    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = credentials.user;

        await createUser(user.uid, {
            email: user.email,
        });

        return {
            id: user.uid,
            email: user.email,
        };
    } catch(err) {
        console.error("[auth.js register()] Error al registrar el usuario. ", err);
        throw err;
    }
}

export async function login({email, password}) {
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        const user = credentials.user;
        return {
            id: user.uid,
            email: user.email,
        };
    } catch(err) {
        console.error("[auth.js login()] Error al autenticar el usuario. ", err);
        throw err;
    }
}