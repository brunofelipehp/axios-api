
const url = "http://localhost:5501/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response);
    })
    .catch(error => console.error(error))
}

function getUser(id){

    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar

    } )
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => {
    console.log(response.data);
    })
    .catch(error => console.error(error))
    }



const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio Janeiro"
}

const userUpdated = {
    name: "Marcelo Calvis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
    }

//addNewUser(newUser)
getUsers()
getUser(2)
updateUser(3, userUpdated)