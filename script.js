let btn = document.getElementById("generatorBtn");
let marksInput = document.getElementById("marks");
let marksValue = document.getElementById("marksValue");

/* Show marks value while sliding */
marksInput.addEventListener("input", function () {
    marksValue.innerText = marksInput.value;
});

/* Get values & generate card */
btn.addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    /* Gender */
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let gender = genderInput ? genderInput.value : "--";

    /* Courses */
    let selectedCourses = document.querySelectorAll('input[type="checkbox"]:checked');
    let course = [];

    selectedCourses.forEach((c) => {
        course.push(c.value);
    });

    /* Marks */
    let marks = marksInput.value;

    /* Show Card Data */
    document.getElementById("cardName").innerText = name || "Student Name";

    document.getElementById("cardRoll").innerText = roll
        ? "Roll No: " + roll
        : "Roll No: --";

    document.getElementById("cardEmail").innerText = email
        ? "Email: " + email
        : "Email: --";

    document.getElementById("cardAge").innerText = age
        ? "Age: " + age
        : "Age: --";

    document.getElementById("cardGender").innerText = "Gender: " + gender;

    document.getElementById("cardCourse").innerText = course.length
        ? "Course: " + course.join(", ")
        : "Course: --";

    document.getElementById("cardMarks").innerText =
        "Marks: " + marks + "/100";

    /* Image Upload */
    const photoInput = document.getElementById("photo");
    const cardImage = document.getElementById("cardImage");

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            cardImage.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        cardImage.src = "https://picsum.photos/200";
    }
});
