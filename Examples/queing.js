// script.js
class TicketQueue {
  constructor() {
    this.tickets = []; // List of unsolved tickets
    this.solvedTickets = []; // List of solved tickets
    this.updateTicketList(); // Initial update
  }

  // Submit a new ticket
  submitTicket(ticket) {
    this.tickets.push(ticket);
    this.updateTicketList(); // Update the displayed list
  }

  // Move a ticket from unsolved to solved
  solveTicket(ticketIndex) {
    const solvedTicket = this.tickets.splice(ticketIndex, 1)[0];
    this.solvedTickets.push(solvedTicket);
    this.updateTicketList(); // Update the displayed lists
  }

  // Update the ticket lists displayed on the page
  updateTicketList() {
    const ticketList = document.getElementById("ticketList");
    const solvedList = document.getElementById("solvedList");

    // Clear both lists
    ticketList.innerHTML = "";
    solvedList.innerHTML = "";

    // Add unsolved tickets to the list
    this.tickets.forEach((ticket, index) => {
      const li = document.createElement("li");
      li.textContent = ticket;
      li.addEventListener("click", () => this.solveTicket(index));
      ticketList.appendChild(li);
    });

    // Add solved tickets to the list
    this.solvedTickets.forEach((ticket) => {
      const li = document.createElement("li");
      li.textContent = ticket;
      li.classList.add("solved"); // Add the solved class for styling
      solvedList.appendChild(li);
    });
  }
}

// Initialize the TicketQueue instance
const helpDeskQueue = new TicketQueue();

// Get the input and button elements
const ticketInput = document.getElementById("ticketInput");
const submitButton = document.getElementById("submitButton");

// Handle the submit button click event
submitButton.addEventListener("click", () => {
  const ticket = ticketInput.value.trim();

  if (ticket) {
    helpDeskQueue.submitTicket(ticket);
    ticketInput.value = ""; // Clear the input field after submission
  } else {
    alert("Please enter a ticket.");
  }
});
