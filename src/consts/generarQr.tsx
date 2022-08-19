
const generarQr = async (data) => {

    console.log("data de generar qr " + JSON.stringify(data))

    const baseUrl = "http://164.92.103.232:8001/entrance/api/v1/obtain_qr/"
    const res = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            group_id: data.grupo,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.token,
        },
    })
    const datares = await res.json()
    console.log("data de generar qr " + datares)
    return datares
}
export default generarQr