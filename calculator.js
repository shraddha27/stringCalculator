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
    return numArray.reduce((sum,num) => sum + num, 0);


};

module.exports = add;