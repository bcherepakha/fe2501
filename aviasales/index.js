const $ticketsList = document.querySelector('.tickets-list');

renderTickets(tickets);

function renderTickets(tickets) {
    $ticketsList.innerText = '';

    const $tickets = tickets.map(renderTicketListItem);

    $ticketsList.append(...$tickets);
}

function renderTicketListItem(ticket) {
    const $el = document.createElement('li');

    $el.classList.add('tickets-list__item');
    $el.append(renderTicket(ticket));

    return $el;
}
