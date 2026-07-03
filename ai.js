function generateRecommendation() {

    let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

    if (subjects.length === 0) {
        document.getElementById("aiResult").innerHTML =
            "No subjects available.";
        return;
    }

    let today = new Date();

    let bestSubject = "";
    let highestScore = -1;

    subjects.forEach(subject => {

        let exam = new Date(subject.examDate);

        let daysLeft = Math.ceil(
            (exam - today) / (1000 * 60 * 60 * 24)
        );

        let difficultyScore = 1;

        if (subject.difficulty === "Medium") {
            difficultyScore = 2;
        }

        if (subject.difficulty === "Hard") {
            difficultyScore = 3;
        }

        // AI Priority Score
        let score = (difficultyScore * 10) - daysLeft;

        if (score > highestScore) {
            highestScore = score;
            bestSubject = subject;
        }

    });

    document.getElementById("aiResult").innerHTML = `
        📚 <b>${bestSubject.name}</b><br><br>

        ⭐ Difficulty : ${bestSubject.difficulty}<br>

        📅 Exam Date : ${bestSubject.examDate}<br><br>

        🤖 AI Recommendation:<br>
        Study this subject first because it has the highest priority.
    `;
}