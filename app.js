const failedTests = [
    { testName: "COBRA-T617", file: "Interchange Flow.js", owner: "unknown" },
    { testName: "COBRA-T614", file: "Interchange Flow.js", owner: "Marcos" }
];

const container = document.getElementById('tests');

failedTests.forEach((test, index) => {
    const div = document.createElement('div');
    div.className = 'test';
    div.innerHTML = `
        <strong>${test.testName}</strong><br>
        📄 ${test.file}<br>
        👤 ${test.owner}<br>
        <button onclick="markReviewed(${index})">Mark as reviewed</button>
    `;
    container.appendChild(div);
});

function markReviewed(index) {
    const divs = document.querySelectorAll('.test');
    divs[index].style.opacity = 0.5;
    divs[index].querySelector('button').disabled = true;
    divs[index].querySelector('button').textContent = 'Reviewed';
}
