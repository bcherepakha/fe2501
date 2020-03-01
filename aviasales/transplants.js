function TransplantForm(props) {
    // this = {}
    const transplantForm =  document.querySelector(props.selector);

    for(let i=0; i < transplantForm.elements.length; i++) {
        const input = transplantForm.elements[i];

        if (typeof input.dataset.value !== 'undefined') {
            input.checked = props.value.length === 0 || props.value.includes(+input.dataset.value);
        } else {
            input.checked = props.value.length === 0 || props.value.length === transplantForm.elements.length - 1;
        }
    }

    transplantForm.addEventListener('change', function(event) {
        const transplants = [],
            $allTransplants = transplantForm.elements['transplant_all'];

        if (event.target === $allTransplants) {
            for(let i=0; i < transplantForm.elements.length; i++) {
                const input = transplantForm.elements[i];

                if (typeof input.dataset.value !== 'undefined') {
                    input.checked = $allTransplants.checked;
                    transplants.push(+input.dataset.value);
                }
            }
        } else {
            for(let i=0; i < transplantForm.elements.length; i++) {
                const input = transplantForm.elements[i];

                if (typeof input.dataset.value !== 'undefined' && input.checked) {
                    transplants.push(+input.dataset.value);
                }
            }

            $allTransplants.checked = transplants.length + 1 === transplantForm.elements.length;
        }

        props.onChange({transplants});
    });

    this.form = transplantForm;

    // return this;
}
