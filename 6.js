let arr1 = [
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],

    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
]

let arr2 = [
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [5]
    ],
    [
        [2]
    ]
]

function deepSum(arr) {
    let sum = 0
    for(let x = 0; x < arr.length; x++){
        for(let y = 0; y < arr[x].length; y++){
            for(let z = 0; z < arr[x][y].length; z++){
                value = arr[x][y][z]
                sum += value
            }
        }
    }
    return sum
}

console.log('Hasil 1 =>',deepSum(arr1))
console.log('Hasil 2 =>',deepSum(arr2))