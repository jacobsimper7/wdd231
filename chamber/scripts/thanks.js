const params = new URLSearchParams(window.location.search);

let timestamp = params.get("timestamp") || "";
let formattedDate = "";
if (timestamp) {
    const dateObj = new Date(timestamp);
    formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(dateObj);
}

document.querySelector("#result").innerHTML = `
    <h2>Confirmation Details</h2>
    <p><strong>Name:</strong> ${params.get("first") || ""} ${params.get("last") || ""}</p>
    <p><strong>Organizational Title:</strong> ${params.get("orgtitle") || ""}</p>
    <p><strong>Email:</strong> ${params.get("email") || ""}</p>
    <p><strong>Phone:</strong> ${params.get("phone") || ""}</p>
    <p><strong>Business/Organization Name:</strong> ${params.get("organization") || ""}</p>
    <p><strong>Membership Level:</strong> ${params.get("membership") || ""}</p>
    <p><strong>Description:</strong> ${params.get("description") || ""}</p>
    <p><strong>Form Submitted:</strong> ${formattedDate}</p>
`;