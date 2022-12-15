import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "your_key",
    authDomain: "your_domain",
    projectId: "your_id",
    storageBucket: "your_storage",
    messagingSenderId: "your_sender_id",
    appId: "your_app_id"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

