
let newArr = [];

/**
 * Сортировка выборкой
 *
 * @param array
 * @returns {*}
 */
function sortSelection(array) {
  let minVal;
  let minposCenterition;

  for (let i = 0; i < array.length; i++) {
    minVal = array[i];
    minposCenterition = i;

    for (let j = i + 1; j < array.length; j++) {
      if (minVal > array[j]) {
        minposCenterition = j;
        minVal = array[j];
      }
    }

    array[minposCenterition] = array[i];
    array[i] = minVal;
  }

  return array;
}

sortSelection(newArr);

// assert.deepEqual(sortSelection(newArr), []);


/**
 * Сортировка вставкой
 *
 * @param arr
 * @returns {*}
 */
function sortInsert(arr) {
  let i, j;

  for (i = 1; i < arr.length; i++) {
    let nextVal = arr[i];

    for (j = i - 1; j >= 0 && arr[j] > nextVal; j--) {
      arr[j+1] = arr[j];
    }

    arr[j+1] = nextVal;
  }

  return arr;
}


assert.deepEqual(sortInsert(newArr), []);



let mas = [1,3,4,9,10];

function binarySearch(arr, number) {
  let length = arr.length;
  let posCenter;
  // let even;

  let firstEl = 0;
  let lastEl = arr.length - 1;

  while (firstEl <= lastEl) {

    // Позиция середины
    posCenter = Math.floor(lastEl - firstEl / 2);
    length = posCenter;

    if (posCenter == 1)
      return -1;
    // console.log(posCenter);
    // break;

    if (arr[lastEl] == number) {
      return posCenter;
    }

    if (number > arr[posCenter]) {
      firstEl = posCenter + 1;
    }
    else {
      lastEl = posCenter - 1;
    }
  }

  return -1;

}

assert.deepEqual(binarySearch(mas, 9), 3);
assert.deepEqual(binarySearch([1], 1), 0);


let obj7 = {
  value: 7,
  left: null,
  right: null
};

let obj6 = {
  value: 6,
  left: null,
  right: null
};

let obj5 = {
  value: 5,
  left: null,
  right: null
};

let obj4 = {
  value: 4,
  left: null,
  right: null
};

let obj3 = {
  value: 3,
  left: obj6,
  right: obj7
};

let obj2 = {
  value: 2,
  left: obj4,
  right: obj5
};


let root = {
  value: 1,
  left: obj2,
  right: obj3
};



/**
 * Поиск в глубину
 *
 */
function depthSearch(root) {

  // while(root)
}

depthSearch(root);