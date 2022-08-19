const ValidarUserBECL = async (idToken) => {
    //console.log(idToken)
    const baseUrl = "http://164.92.103.232:8000/auth/api/v1/sign_in_up/"
    const a = JSON.stringify({
        token: idToken
    })
    const res = await fetch(baseUrl, {
        method: 'POST',
        body: a,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    console.log("data de la api " + data)
    return data
}
export default ValidarUserBECL