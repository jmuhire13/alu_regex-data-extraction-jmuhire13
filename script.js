function extractData() {
    let text = document.getElementById("textInput").value; // Get input text
    let outputDiv = document.getElementById("output"); // Output display

    // Regular Expressions
    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    let urlRegex = /(https?:\/\/[^\s]+)/g;
    let phoneRegex = /(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g;
    let currencyRegex = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;
    let timeRegex = /(\b\d{1,2}:\d{2} ?(AM|PM)?\b)/gi;  // Matches 24-hour & 12-hour time

    // Extract Data
    let emails = text.match(emailRegex) || [];
    let urls = text.match(urlRegex) || [];
    let phoneNumbers = text.match(phoneRegex) || [];
    let currencies = text.match(currencyRegex) || [];
    let times = text.match(timeRegex) || [];

    // Display Results
    outputDiv.innerHTML = `
        <strong>Emails:</strong> ${emails.join(", ") || "None found"}<br>
        <strong>URLs:</strong> ${urls.join(", ") || "None found"}<br>
        <strong>Phone Numbers:</strong> ${phoneNumbers.join(", ") || "None found"}<br>
        <strong>Currency Amounts:</strong> ${currencies.join(", ") || "None found"}<br>
        <strong>Times:</strong> ${times.join(", ") || "None found"}
    `;
}