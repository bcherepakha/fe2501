function getNumberAsString(num) {
    return num.toString().padStart(2, '0');
}

function getTimeAsString(date) {
    return `${getNumberAsString(date.getHours())}:${getNumberAsString(date.getMinutes())}`;
}

function getTicketsTimes(date, duration) {
    const startDate = new Date(date),
        endDate = new Date(startDate);

    endDate.setMinutes( endDate.getMinutes() + duration );

    return {
        startDate: getTimeAsString(startDate),
        endDate: getTimeAsString(endDate)
    };
}

function getDurationAsString(duration) {
    const hh = Math.floor(duration / 60),
        mm = duration % 60;

    return `${hh}h${mm}m`;
}

function getTransplantsCount(stopsLength) {
    switch(stopsLength) {
        case 0:
            return `Без пересадок`;
        case 1:
            return `1 пересадка`;
        default:
            return `${stopsLength} пересадки`;
    }

}

function renderTicketSegment(segment) {
    const $segment = document.createElement('li'),
        {origin, destination, date, stops, duration} = segment,
        {startDate, endDate} = getTicketsTimes(date, duration);

    $segment.classList.add('ticket__variant');
    $segment.innerHTML = `
        <div class="ticket__variant-item">
            <div class="ticket__variant-item-label">
                ${origin} – ${destination}
            </div>
            <div class="ticket__variant-item-value">
                ${startDate} – ${endDate}
            </div>
        </div>
        <div class="ticket__variant-item">
            <div class="ticket__variant-item-label">
                В пути
            </div>
            <div class="ticket__variant-item-value">
                ${getDurationAsString(duration)}
            </div>
        </div>
        <div class="ticket__variant-item">
            <div class="ticket__variant-item-label">
                ${getTransplantsCount(stops.length)}
            </div>
            <div class="ticket__variant-item-value">
                ${stops.join(', ')}
            </div>
        </div>
        `;

    return $segment;
}

function renderTicket(ticket) {
    const $ticket = document.createElement('div'),
        {price, carrier} = ticket,
        $segments = ticket.segments.map(renderTicketSegment);

    $ticket.classList.add('ticket');
    $ticket.innerHTML = `
        <div class="ticket__price">
            ${price} Р
        </div>
        <div class="ticket__avia-logo">
            <img class="ticket__avia-logo-img" src="http://lorempixel.com/800/100" alt="${carrier}" />
        </div>
        <ul class="ticket__variants">
        </ul>
    `;

    $ticket.querySelector('.ticket__variants').append(...$segments);

    return $ticket;
}
