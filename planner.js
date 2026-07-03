// Load subjects when page opens
let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

displaySubjects();


// Add Subject
function addSubject() {

    let subject = document.getElementById("subject").value.trim();
    let examDate = document.getElementById("examDate").value;
    let difficulty = document.getElementById("difficulty").value;

    if (subject === "" || examDate === "" || difficulty === "") {
        alert("Please fill all fields.");
        return;
    }

    subjects.push({
        name: subject,
        examDate: examDate,
        difficulty: difficulty
    });

    localStorage.setItem("subjects", JSON.stringify(subjects));

    document.getElementById("subject").value = "";
    document.getElementById("examDate").value = "";
    document.getElementById("difficulty").value = "";

    displaySubjects();

    alert("Subject Added Successfully!");
}


// Display Subjects
function displaySubjects() {

    let list = document.getElementById("subjectList");

    list.innerHTML = "";

    subjects.forEach((item, index) => {

        list.innerHTML += `

        <li>

            <strong>${item.name}</strong><br>

            📅 ${item.examDate}<br>

            ⭐ ${item.difficulty}

            <br><br>

            <button onclick="deleteSubject(${index})">

                Delete

            </button>

        </li>

        <br>

        `;

    });

}


// Delete Subject
function deleteSubject(index) {

    subjects.splice(index, 1);

    localStorage.setItem("subjects", JSON.stringify(subjects));

    displaySubjects();

}