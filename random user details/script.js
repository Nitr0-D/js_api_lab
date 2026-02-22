
const user = []
let pictureFrame = document.getElementById('picture')
let namePerson = document.getElementById('namePlaceholder')
let jobtitle = document.getElementById('jobtitle')
let email = document.getElementById('emailValue')
let phone = document.getElementById('phoneValue')
let company = document.getElementById('companyValue')
let address = document.getElementById('addressValue')


async function fetchRandomUser() {
    try{
        const response = await fetch('https://dummyjson.com/users?limit=100')
        const data = await response.json()
        user.push(...data.users)
    }catch(err){
    pictureFrame.innerHTML = '<p>Sorry. There was an error fetching the required information</p>'
    namePerson.innerHTML = '<p>Sorry. There was an error fetching the required information</p>'
    jobtitle.HTML = '<p>Sorry. There was an error fetching the required information</p>'
    email.innerHTML = '<p>Sorry. There was an error fetching the required information</p>'
    phone.innerHTML = '<p>Sorry. There was an error fetching the required information</p>'
    company.innerHTML = '<p>Sorry. There was an error fetching the required information</p>'
    address.innerHTML = '<p>Sorry. There was an error fetching the required information</p>'
    }
    let random = Math.floor(Math.random() * user.length)
    pictureFrame.innerHTML = `<img src="${user[random].image}" alt="profile picture">`
    namePerson.innerText = `${user[random].firstName} ${user[random].lastName}`
    jobtitle.innerText = `${user[random].company.title}`
    email.innerText = `${user[random].email}`
    phone.innerText = `${user[random].phone}`
    company.innerText = `${user[random].company.name}`
    address.innerText = `${user[random].address.address}, ${user[random].address.city}, ${user[random].address.state}, ${user[random].address.postalCode}`
}



fetchRandomUser();