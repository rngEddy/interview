function hasMutation(dna){
    var mutation = false
    let tabla = dna.map ( x => x.split("") )
    let characters = ['A', 'T', 'C', 'G'];
    tabla.forEach( word => {
        word.forEach (letter => {
            if (!characters.includes(letter)){
                throw new Error("Invalid letter: " + letter);
            }
        });
    });
    let matchingLengthRecords = tabla.filter(x => x.length == tabla.length);
    if (matchingLengthRecords.length != tabla.length) {
        throw new Error("not a NxN table")
    }
    var sequence = []
    for(let j = 0; j<tabla.length; j++){
        for(let i = 0; i+3 < tabla.length; i++){
            sequence.push(tabla[j][i]+tabla[j][i+1]+tabla[j][i+2]+tabla[j][i+3])
        }
    }
    for(let j = 0; j<tabla.length; j++){
        for(let i = 0; i+3 < tabla.length; i++){
            sequence.push(tabla[i][j]+tabla[i+1][j]+tabla[i+2][j]+tabla[i+3][j])
        }
    }
    for(let j = 0; j+3<tabla.length; j++){
        for(let i = 0; i+3 < tabla.length; i++){
            sequence.push(tabla[j][i]+tabla[j+1][i+1]+tabla[j+2][i+2]+tabla[j+3][i+3])
        }
    }
    for(let j = 0; j+3<tabla.length; j++){
        for(let i = tabla.length-1; i-3>=0; i--){
            sequence.push(tabla[j][i]+tabla[j+1][i-1]+tabla[j+2][i-2]+tabla[j+3][i-3])
        }
    }
    var m=0
    for(let value of sequence){
        if(value=="AAAA" || value=="TTTT" || value=="GGGG" || value=="CCCC")
            m+=1          
    }
    if(m>1)
        mutation=true 
    return mutation
} 

module.exports = hasMutation