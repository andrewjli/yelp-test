// var input = {
//     'Amy': {
//         'Chen': '555-555-5555',
//         'Franklin': '111-111-1111'
//     },
//     'Frank': {
//         'Chen': '666-666-6666'
//     }
//     ...
// }
// var output = {
//     'Chen': {
//         'Amy': '555-555-5555',
//         'Frank': '666-666-6666'
//     },
//     'Franklin': {
//         'Amy': '111-111-1111'
//     }
// }
//
// function invert_name_map (input)

function invert_name_map() {
    var input = {
        'Amy': {
            'Chen': '555-555-5555',
            'Franklin': '111-111-1111'
        },
        'Frank': {
            'Chen': '666-666-6666'
        }
    };

    var output = {};
    
    for (var firstName in input) {
        for (var lastName in input[firstName]) {
            if (output[lastName]) {
                output[lastName][firstName] = input[firstName][lastName];
            } else {
                var temp = {};
                temp[firstName] = input[firstName][lastName];
                output[lastName] = temp;
            }
        }
    }

    console.log(JSON.stringify(output,null,4));
    //return output;
}

invert_name_map();
