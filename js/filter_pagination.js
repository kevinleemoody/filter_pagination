
/////////////global variables

const page = document.querySelector(".page");
const completeListOfStudents = document.querySelectorAll(".student-item");
const hideStudentsDiv = document.createElement("div");
const pageButtonsUl = document.createElement("ul");
const pageButtonsDiv = document.createElement("div");
const studentsPerPage = 10;


//Seach through the list of students
//adapted from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list

const searchBar = document.getElementById("myInput")
const pageHeader = document.querySelector(".page-header");
pageHeader.appendChild(searchBar);
searchBar.offsetRight;


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("pagination");
    li = ul.getElementsByTagName("active");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}








//////////Append elements for pagination

pageButtonsDiv.className = "pagination";
pageButtonsDiv.appendChild(pageButtonsUl);
// This broke the code
// pageButtonsDiv.style.position = "fixed";
// pageButtonsDiv.style.bottom = "0px";
// // pageButtonsDiv.setAttribute("position","fixed")
// // pageButtonsDiv.setAttribute("bottom","0px")
page.appendChild(pageButtonsDiv);

////////////The showPage Function

const showPage = (list, button) => {
 //     Loop over items in the list parameter
  for (let i = 0; i < completeListOfStudents.length; i++) {
    completeListOfStudents[i].style.display = "none";
  }
//-- If the index of a list item is ​>=​ the index of 
//the first item that should be shown on the page
//     -- ​&&​ the list item index is ​<=​ the index of the 
//last item that should be shown on the page, show it
//     */
  if (list.length === 0) {
       hideStudentsDiv.style.display = "block";
  }
    else {
      let startIndex = (button - 1) * studentsPerPage;
      let endIndex = startIndex + studentsPerPage;
    for (let i = startIndex; i < endIndex && i < list.length; i++) {
       list[i].style.display = "block";
  }
       hideStudentsDiv.style.display = "none";
  }
};
/* Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
   When each link is clicked, the showPage function displays the 
   corresponding page (set of ten students), and highlights that page's 
   link. For example, clicking the link to page 2 will display students 
   11 through 20 and highlight button 2. */




const appendPageLinks = studentList => {
  let numOfStudents = studentList.length;
  let numOfPages = Math.ceil(numOfStudents / studentsPerPage);
  let selectedButton = 1;
  pageButtonsUl.innerHTML = "";

  showPage(studentList, selectedButton);

   for (let i = 0; i < numOfPages; i++) {
    let button = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.href = "#";
     if (i === 0) {
      anchor.className = "active";
    }
    
    anchor.textContent = i + 1;
    button.appendChild(anchor);
    pageButtonsUl.appendChild(button);
  }
 
  pageButtonsUl.addEventListener("click", e => {
    let previousButton = document.querySelector(".active");
    previousButton.className = "";
    selectedButton = e.target.textContent;
    e.target.className = "active";
    showPage(studentList, selectedButton);
  });
};

// function to make links 
appendPageLinks(completeListOfStudents);








