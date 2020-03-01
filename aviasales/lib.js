/** Sort tickets by cheap or speed
 * @param tickets   Array       array of tickets
 * @param sort      string      sort of tickets [cheap or speed]
 * @return tickets  Array
*/
function sort(tickets, sort) {
    switch(sort) {
        case 'cheap':
            return tickets.sort(function(ticket1, ticket2) {
                return ticket1.price - ticket2.price;
            });
        break;
        default:
            sortSegmentsInTicketsByDuration(tickets);

            return tickets.sort(function(ticket1, ticket2) {
                const [speedSegment1] = ticket1.segments,
                    speedSegment2 = ticket2.segments[0];

                return speedSegment1.duration - speedSegment2.duration;
            });
        break;
    }
}

function sortSegmentsInTicketsByDuration(tickets) {
    return tickets.forEach(function(ticket) {
        return ticket.segments.sort(sortSegmentByDuration);
    });
}

function sortSegmentByDuration(segment1, segment2) {
    return segment1.duration - segment2.duration;
}

// transplants = [0, 2, 1]
function getTicketsWithTransplants(tickets, transplants) {
    return tickets.filter(function(ticket) {
        if (transplants.length === 0) {
            return true;
        }

        const transplantsInTicket = ticket.segments
            .map(function(segment) {
                return segment.stops.length;
            }); // [0, 3]

        return transplantsInTicket.some(function(transplant) {
            return transplants.includes(transplant);
        });
    }).map(function(ticket) {
        const newTicket = Object.assign({}, ticket);

        newTicket.segments = ticket.segments
            .filter(function(segment) {
                return transplants.length === 0 || transplants.includes(segment.stops.length);
            });

        return newTicket;
    });
}
