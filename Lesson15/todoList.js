const {hash} = location,
    $filters = document.querySelectorAll('.filters a');

$filters.forEach(function($link) {
    if ($link.hash === hash || (hash === '' && $link.hash === '#/all') ) {
        $link.classList.add('selected');
    } else {
        $link.classList.remove('selected');
    }
});

const promise = fetch(getTaskURL())
    .then(response => response.json())
    .then(
        function(tasks) {
            const $tasksEl = tasks.map(createTask),
                $fragment = document.createDocumentFragment();

            $fragment.append(...$tasksEl);

            render($fragment, $ul);
        }
    )
    .catch(
        function(error) {
            console.dir(error);
        }
    ),
    $ul = document.querySelector('.todo-list');

function createElement(tag, props, text) {
    const $el = document.createElement(tag);

    if (text) {
        $el.innerText = text;
    }

    if (props && props.className) {
        for (const prop in props) {
            $el[prop] = props[prop];
        }
    }

    return $el;
}

// task = {userId: 1, id: 1, title: "delectus aut autem", completed: false}
function createTask(task) {
    const $li = createElement('li', null),
        $div = createElement('div', {className: 'view'}),
        $input = createElement('input', {className: 'toggle', type: 'checkbox', checked: task.completed}),
        $span = createElement('span', null, task.title),
        $btn = createElement('button', {className: 'destroy'}),
        $edit = createElement('input', {className: 'edit', value: task.title});

    $div.append($input, $span, $btn);
    $li.append($div, $edit);

    return $li;
}

function render(element, desination) {
    desination.innerText = '';
    desination.append(element);
}

function getTaskURL() {
    let taskLink = 'https://jsonplaceholder.typicode.com/todos?userId=1';

    switch (location.hash) {
        case '#/active':
            taskLink += '&completed=false';
            break;
        case '#/completed':
            taskLink += '&completed=true';
            break;
        default:
            break;
    }

    return taskLink;
}

// https://www.mockapi.io/projects/5d9969125641430014051851
