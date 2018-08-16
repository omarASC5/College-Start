
var loggedIn = false;
var database = firebase.database();
//1.
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signUp = document.getElementById('signUpBtn');



signUp.addEventListener('click', () => {   
    const txtEmail = userEmail.value;
    const txtPassword = userPassword.value;
    const auth = firebase.auth();
    const createUser = auth.createUserWithEmailAndPassword(txtEmail, txtPassword);
    const signInUser = auth.signInWithEmailAndPassword(txtEmail, txtPassword);
    console.log("SIGNED UP");
});





function writeUserData(userId, name, age, currentSchool, ethnicity, city, state, distanceFromHome, userSchoolType, userSchoolSize) {
// function writeUserData(userId, name, age) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      age: age,  
      ethnicity: ethnicity,
      city: city, //new
      state: state, //new
      school: currentSchool,
      schoolType: userSchoolType,
      schoolSize: userSchoolSize
    });
  }


//2.
// auth.signInWithEmailAndPassword(email, pass);

// //3.

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        //TODO: Future code for the dashboard will go here:
        loggedIn = true;
        const currentUid = firebaseUser.uid;
    console.log(currentUid);

        const nameInput = document.getElementById('nameInput');
        const nameTxt = nameInput.value;

        const ageInput = document.getElementById('age');
        const ageTxt = ageInput.value;

        const ethnicityInput = document.getElementById('ethnicity');
        const ethnicityTxt = ethnicityInput.value;

        const currentSchoolInput = document.getElementById('school');
        const currentSchoolTxt = currentSchoolInput.value;

        const cityInput = document.getElementById('city');
        const cityTxt = cityInput.value;

        const stateInput = document.getElementById('state');
        const stateTxt = stateInput.value;

        const schoolTypeInput = document.getElementById('schoolType');
        const schoolTypeTxt = schoolTypeInput.value;

        const schoolSizeInput = document.getElementById('schoolSize');
        const schoolSizeTxt = schoolSizeInput.value;


        firebase.database().ref('users/' + currentUid).set({
            username: nameTxt,
            age: ageTxt,
            ethnicity: ethnicityTxt,
            city: cityTxt,
            state: stateTxt,
            school: currentSchoolTxt,
            schoolType: schoolTypeTxt,
            schoolSize: schoolSizeTxt
          });
          window.location.href = "../html/dashboard.html";

        // writeUserData(currentUid, nameTxt, ageTxt, nameTxt, ageTxt, raceTxt, currentSchoolTxt, locationInput, schoolTypeTxt, schoolSizeTxt);
        
    } else {
        //TODO: Future code for the home page will go here:
        loggedIn = false;
    }
});