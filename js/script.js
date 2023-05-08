const urlAPI = 'http://44.211.156.25:443/users/';

document.getElementById('enlace').addEventListener('click', function(e) {
    e.preventDefault();
    deleteUser();
});

function deleteUser(){
    const email = document.getElementById('email').value;
    if (email!==null && email!==undefined){
        userAction(email)
    } else {
        alert('Email inválido.')
    }
};

const userAction = async (email) => {
    const response = await fetch(urlAPI + 'getByEmail/' + email, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const userData = await response.json(); 
    if (userData!==null && userData!==undefined){
        const userId = userData.idUser;

        const response2 = await fetch(urlAPI + userId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Account deleted.')
    } else {
        alert('Email inválido.')
    }

}