function setTitle(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}

export function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
    document.querySelector("#courseTitle").textContent = `${course.code} - ${course.name}`;
    document.querySelector("#courseDescription").textContent = `This course covers the fundamentals of web
frontend development, including HTML, CSS, and JavaScript. Students will learn to create responsive and interactive web applications.`;
    document.querySelector("#courseInstructor").textContent = "Brother Bingham";
    document.querySelector("#courseCredits").textContent = "3 Credits";
    document.querySelector("#courseSchedule").textContent = "Monday, Wednesday, Friday 9:00 AM - 10:15 AM";
}
export function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNumber}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}