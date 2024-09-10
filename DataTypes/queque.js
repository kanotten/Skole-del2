class TicketQueue {
  constructor() {
    // Create an empty list to hold all the tickets (students waiting for help)
    // The constructor initializes the queue when a new instance of the class is created.
    this.tickets = [];
  }

  // Submit a ticket to the end of the queue (a student asks for help)
  submitTicket(ticket) {
    // Add the student's ticket to the end of the list
    this.tickets.push(ticket);
    // Example:
    // Queue: []
    // Student A submits a ticket.
    // Queue: ["Student A: Help with math homework"]
    // Student B submits a ticket.
    // Queue: ["Student A: Help with math homework", "Student B: Help with science project"]
  }

  // Assist the next student (remove the first ticket from the queue)
  assistNextStudent() {
    // First, check if the queue is empty (no students waiting for help)
    if (this.isQueueEmpty()) {
      return "No students in line for help.";
    }
    // If there are students in line, remove and return the first ticket in the queue
    // `shift()` removes the first element of the array and shifts the rest forward
    return this.tickets.shift();
    // Example:
    // Queue: ["Student A: Help with math homework", "Student B: Help with science project"]
    // After calling assistNextStudent(), the queue becomes:
    // Queue: ["Student B: Help with science project"]
  }

  // View the next ticket without removing it (peek at the first student in line)
  viewNextTicket() {
    // Check if there are no students in line
    if (this.isQueueEmpty()) {
      return "No students in line.";
    }
    // Return the first ticket in the queue without removing it
    return this.tickets[0];
    // Example:
    // Queue: ["Student A: Help with math homework", "Student B: Help with science project"]
    // Calling viewNextTicket() will return:
    // "Student A: Help with math homework"
    // But the queue will remain the same
  }

  // Check if the queue is empty (no students waiting for help)
  isQueueEmpty() {
    // If the length of the tickets array is 0, the queue is empty
    return this.tickets.length === 0;
  }

  // Check how many students are in line for help
  ticketsInLine() {
    // Return the length of the tickets array, which is the number of students in line
    return this.tickets.length;
    // Example:
    // Queue: ["Student A: Help with math homework", "Student B: Help with science project"]
    // Calling ticketsInLine() will return:
    // 2 (because there are 2 students waiting)
  }

  // View all the tickets in the queue (see the full list of students waiting for help)
  viewAllTickets() {
    // Return the full array of tickets
    return this.tickets;
    // Example:
    // Queue: ["Student A: Help with math homework", "Student B: Help with science project"]
    // Calling viewAllTickets() will return:
    // ["Student A: Help with math homework", "Student B: Help with science project"]
  }
}

// Example usage of the ticket system
const helpDeskQueue = new TicketQueue();

// Students submit tickets for help
helpDeskQueue.submitTicket("Student A: Help with math homework");
helpDeskQueue.submitTicket("Student B: Help with science project");
helpDeskQueue.submitTicket("Student C: Help with coding assignment");

console.log(helpDeskQueue.viewAllTickets()); // Output: ['Student A: Help with math homework', 'Student B: Help with science project', 'Student C: Help with coding assignment']
console.log(helpDeskQueue.viewNextTicket()); // Output: 'Student A: Help with math homework'
console.log(helpDeskQueue.assistNextStudent()); // Output: 'Student A: Help with math homework'
console.log(helpDeskQueue.viewAllTickets()); // Output: ['Student B: Help with science project', 'Student C: Help with coding assignment']
console.log(helpDeskQueue.ticketsInLine()); // Output: 2
