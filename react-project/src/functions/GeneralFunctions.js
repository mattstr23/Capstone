
// ==================
// for registering
// ==================

export const sendData = async (object) => {

await fetch('http://localhost:3001/registerUser' , {
    method: 'POST',
    headers: { "Content-type" : "application/json"},
    body: JSON.stringify(object)
} )

}

// ===============
// for logging in
// ===============

export const sendLoginData = async (object) => {
    
    await fetch('http://localhost:3001/loginUser' , {
        method: 'GET',
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify(object)
    })
}