function searchExam() {
    const courseCode = document.getElementById('courseCode').value;
    const resultsSection = document.getElementById('resultsSection');

    // Clear previous results
    resultsSection.innerHTML = '';

    // Dummy data for demonstration
    const examData = [
        { course: 'COMP 101', date: '2024-12-15', time: '9:00 AM', location: 'Room 101' },
        { course: 'MATH 201', date: '2024-12-16', time: '1:00 PM', location: 'Room 202' },
        { course: 'HIST 301', date: '2024-12-17', time: '11:00 AM', location: 'Room 303' }
    ];

    // Filter results based on course code
    const filteredExams = examData.filter(exam => exam.course.toLowerCase().includes(courseCode.toLowerCase()));

    // Display results
    if (filteredExams.length > 0) {
        filteredExams.forEach(exam => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <strong>Course:</strong> ${exam.course}<br>
                <strong>Date:</strong> ${exam.date}<br>
                <strong>Time:</strong> ${exam.time}<br>
                <strong>Location:</strong> ${exam.location}
            `;
            resultsSection.appendChild(resultItem);
        });
    } else {
        resultsSection.innerHTML = '<p>No exams found for the entered course code.</p>';
    }
}
