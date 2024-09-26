 function add(numbers) {


    if(!numbers || numbers == "") return 0;

    let delimiter = /,|\n/;
    if(numbers.startsWith("//")){

        const delimit = numbers.match(/^\/\/(.+)\n/);
        const escapedDelimiter = delimit[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiter = new RegExp(escapedDelimiter, "g");
        numbers = numbers.slice(delimit[0].length);
    }

    const numArray = numbers.split(delimiter).map(Number);
    
    const negativeNumbers = numArray.filter(num => num < 0);
    if(negativeNumbers.length){
        //console.log(`Negative numbers not allowed : ${negativeNumbers.join(", ")}`);
        throw new Error(`Negative numbers not allowed : ${negativeNumbers.join(", ")}`) 
    }

    const filteredNumArray = numArray.filter(num => num <= 1000);
    //console.log("filteredNumArray",filteredNumArray);

    return filteredNumArray.reduce((sum,num) => sum + num, 0);


};

module.exports = add;