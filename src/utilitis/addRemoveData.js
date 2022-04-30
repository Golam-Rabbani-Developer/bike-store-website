
const addRemoveData = (data, id) => {
    console.log(data.quantity)
    const url = `http://localhost:5000/bikes/${id}`
    fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

export default addRemoveData;