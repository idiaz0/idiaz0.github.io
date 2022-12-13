



const locations = [];
const newA = [];
const makePoint = function makePoint(x, y, var1, var2){
    let p = {
        x: x,
        y: y
    }   

    let test = {
        var: var1,
        var2: var2

    }
    newA.push(p);
    newA.push(test);
    return newA;
}

const buildTest = function build(n){
    for (let i=0; i<=2; i++){
        let newArray= makePoint(i, i, 'linda', 'deysi');
        locations.push(newArray);

    }

}
buildTest(5);
console.log(locations);