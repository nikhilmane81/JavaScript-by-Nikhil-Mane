
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort); //callback function

grades.forEach(print); //callback function


//Function for sorting numbers in descending order
function descendingSort(x, y) {
    return y - x;
}
//Function for sorting number in ascending order
function ascendingSort(x, y) {
    return x - y;
}
function print(element) {
    console.log(element);
}