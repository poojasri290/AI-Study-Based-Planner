// Study Reminder System

function showReminder() {

    let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

    if (subjects.length === 0) {
        return;
    }

    let today = new Date();

    subjects.forEach(subject => {

        let examDate = new Date(subject.examDate);

        let daysLeft = Math.ceil(
            (examDate - today) / (1000 * 60 * 60 * 24)
        );

        if (daysLeft <= 3 && daysLeft >= 0) {

            alert(
                "📚 Reminder!\n\n" +
                subject.name +
                " exam is in " +
                daysLeft +
                " day(s).\nStart studying today!"
            );

        }

    });

}


// Motivational Quotes

function motivationalQuote() {

    let quotes = [

        "📖 Study today, succeed tomorrow.",

        "🚀 Small progress every day leads to big success.",

        "🏆 Consistency beats talent.",

        "💡 Believe in yourself.",

        "🎯 Focus on your goal."

    ];

    let random = Math.floor(Math.random() * quotes.length);

    alert(quotes[random]);

}


// Auto Reminder after 5 Seconds

window.onload = function () {

    setTimeout(showReminder, 5000);

};