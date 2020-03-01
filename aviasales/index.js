let appState = {
    transplants: [1, 2, 0, 3],
    sorting: 'speed'
};

const $ticketsList = document.querySelector('.tickets-list'),
    transplantForm = new TransplantForm({
        value: appState.transplants,
        selector: '.transplant',
        onChange
    }),
    sortForm = new SortForm({
        value: appState.sorting,
        selector: '.tickets-switcher',
        onChange
    });

renderTickets(getTickets());

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

function getTickets() {
    const ticketsForRender = getTicketsWithTransplants(tickets, appState.transplants);

    return sort(ticketsForRender, appState.sorting);
}

function stateChange(data) {
    appState = Object.assign(appState, data);
}

function onChange(data) {
    stateChange(data);
    renderTickets(getTickets());
}
