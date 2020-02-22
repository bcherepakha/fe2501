const user = {
    name: 'Vasya',
    family: "Petrov",
    get fullName() {
        return `${this.name} ${this.family}`;
    },
    set fullName(value) {
        const names = value.split(' '),
            name = names[0],
            family = names.slice(1).join(' ');

        this.name = name;
        this.family = family;
    }
}

user.name = 'Petya';

console.log( user.fullName = 'Petya Petrov' );

user.fullName = 'Vasya Petrov Save';

console.log( user.name === 'Vasya' );
console.log( JSON.stringify(user) );
