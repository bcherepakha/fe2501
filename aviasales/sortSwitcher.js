function SortForm(props) {
    const sortForm = document.querySelector(props.selector);

    for (let i=0; i < sortForm.elements.length; i++) {
        sortForm.elements[i].checked = sortForm.elements[i].value === props.value;
    }

    sortForm.addEventListener('change', function() {
        props.onChange({sorting: sortForm.elements['ticket-filtter'].value});
    });
}
