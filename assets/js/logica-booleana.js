const regresaTrue = ()=>{
    console.log('Regresa True');
    return true;
}

const regresaFalse = ()=>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log( true );
console.log( !true );
console.log( !false );

console.log( !regresaFalse() );
console.log( !regresaTrue() );

console.log('And');//true si todos los valores son verdaderos

console.log( true && true );
console.log( true && false );
console.log( true && !false );

console.log( '=============' );

console.log( regresaTrue() && !regresaFalse() );

console.log('OR');//si una es true , es true

console.log( true || true );

console.log( regresaTrue() || regresaFalse() );

console.log( '======*************=======' );
console.warn('Asignaciones');

const soyudefine = undefined;
const soyNull = null;
const soyfalse = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = 'Simon' && 'Hola mundo';
const a3 = soyfalse || 'no soy falso'


console.log( {a1,} )