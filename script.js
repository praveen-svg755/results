function searchHallTicket() {
    const hallTicketInput = document.getElementById('hallTicketInput').value.trim();
    const resultImage = document.getElementById('resultImage');
    const errorMessage = document.getElementById('errorMessage');

    // The hall ticket number from the image
    const correctHallTicket = '3191169';

    // Reset previous results
    resultImage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Check if the entered hall ticket number matches
    if (hallTicketInput === correctHallTicket) {
        resultImage.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}