import { uploadPhoto, createUser } from "./utils"

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then((promise) => {
            console.log(`${promise[0].body} ${promise[1].firstName} ${promise[1].lastName}`)
        })
        .catch((error) => {
             console.log("Signup system offline")
        }) 
}
