var string = 'strin+g';

for (let i = 0; i<string.length; i++){
    if (string[i] == '+'){
        return
    } else{
        console.log(string[i])
    }
}