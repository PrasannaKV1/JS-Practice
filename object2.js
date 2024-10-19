const student={
    name:'john',
    age:20
}
Object.preventExtensions(student);
const isextentable = Object.isExtensible(student);
const teacher={
    namet:'Rekha'
}
Object.seal(teacher);
const isSealed=Object.isSealed(teacher);

console.log(isextentable);
console.log(isSealed);

