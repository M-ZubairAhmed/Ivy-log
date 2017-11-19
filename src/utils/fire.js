import * as firebase from 'firebase'
import { firebaseSecrets } from './secrets'

const fire = firebase.initializeApp(firebaseSecrets)

export const fireDatabase = fire.database()

export const fireAuth = fire.auth
