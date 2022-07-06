let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];

let all_grades_div = document.getElementById("all-grades");
let search_grades_div = document.getElementById("search-grades");
let A_grades_div = document.getElementById("A-grades");
let bonus_grades_div = document.getElementById("bonus-grades");
let random_grade_div = document.getElementById("random-grade");
//4.
grades.pop()
//5.
grades.push(99)
//6.
// grades.forEach((grade,index) => {
//   all_grades_div.innerHTML += `<span> #${index}: ${grade} </span>`;
// });
//7
for(let i = 0; i<grades.length;i++){
  all_grades_div.innerHTML += `<span> #${i}: ${grades[i]} </span>`;
}
//Part 2 ==============================================
function search() {
  let inputValue = document.getElementById("input").value;
  //1.
  let searchGrade = grades.filter((grade) => grade == inputValue);
  if(searchGrade.length == 0)
  search_grades_div.innerHTML = `<span>No grade found</span>`
  searchGrade.forEach((grade) => {
    search_grades_div.innerHTML = `<span> ${grade} </span>` ;
    });
}

//2.
let aGrades = grades.filter((grade) => grade >= 90);
aGrades.forEach((grade) => {
A_grades_div.innerHTML += `<span> ${grade} </span>`;
});
//4.
let BounsGrades = grades.map((grade) => grade +3);
//5.
BounsGrades.forEach((grade,index) => {
bonus_grades_div.innerHTML += `<span> #${index}: ${grade} </span>`;
});
//Part 3  ==============================================
let randomindex = Math.floor(Math.random()*grades.length);
  random_grade_div.innerHTML = `<span> #${randomindex}: ${grades[randomindex]} </span>`

