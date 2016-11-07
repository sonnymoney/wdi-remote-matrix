var grabBag = ["shoe","true","99","null"];
console.log(grabBag);

var teachers = ["Matt","Thom","Kristyn","Karolin"];
console.log(teachers[2]);

// Commit "1st commit - those were easy array question"

var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

function median(values) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

median(nums);

// commit "2nd commit - finished Find the Median array question "
