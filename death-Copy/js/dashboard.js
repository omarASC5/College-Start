var database = firebase.database();
const logOut = document.getElementById('logOut');

logOut.addEventListener('click', () => {
    window.location.href = "../../index.html";
    firebase.auth().signOut();
    console.log("LOGGED OUT");
}); 



firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser == true) {
        console.log(firebaseUser)
    } else {
        //TODO: Future code for the home page will go here:
        
    }
});
