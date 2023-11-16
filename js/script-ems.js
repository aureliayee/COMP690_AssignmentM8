// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [99887760, 'Amy Apple', 1230, 'amy@vectacorp.com', 'Administrative'],
    [99887761, 'Bobby Bob', 1231, 'bobby@vectacorp.com', 'Engineering'],
    [99887762, 'Cheryl Cherry', 1232, 'Cheryl@vectacorp.com', 'Executive'],
    [99887763, 'Darren Dom', 1233, 'Darren@vectacorp.com', 'Marketing'],
    [99887764, 'Elly Elephant', 1234, 'Elly@vectacorp.com', 'Quality Assurance']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
storage = localStorage.getItem('employees') || ''
if (storage.length > 0) {
    //tasks = storage.split('|') // WITHOUT JSON.PARSE
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
const $ = id => document.getElementById(id)
let empTable = $('empTable')
let tableBody = empTable.getElementsByTagName('tbody')[0]
let empForm = $('addForm')
let empCount = employees.length

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees)

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = $('id').value
    let empName = $('name').value
    let empExtension = $('extension').value
    let empEmail = $('email').value
    let empDepartment = $('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let employee = [empId, empName, empExtension, empEmail, empDepartment]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(employee)

    // BUILD THE GRID
    buildGrid(employees)

    // RESET THE FORM
    empForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    //CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED 
    //DISPLAY CONFIRMATION OF THE DELETE TO THE USER
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            rowIndex = e.target.parentElement.parentElement.rowIndex
        // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex-1, 1)
        // BUILD THE GRID
            buildGrid(employees)
        }
        
}
});


// BUILD THE EMPLOYEES GRID
function buildGrid(tableData) {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    for(var i = 1;i<empTable.rows.length;){
        empTable.deleteRow(i);
    }

    tableData.forEach(function(rowData) {
        let row = document.createElement('tr')

      rowData.forEach(function(cellData) {
        let cell = document.createElement('td')
        cell.appendChild(document.createTextNode(cellData))
        row.appendChild(cell);
      });
      tableBody.appendChild(row)
      // CREATE THE DELETE BUTTON
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-danger btn-sm float-end delete'           //ADD BOOTSTRATP CLASSES FOR A BUTTON
        let textDelete = deleteBtn.appendChild(document.createTextNode('X'))     //CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
        deleteBtn.appendChild(textDelete)                                        //APPEND TEXT NODE TO DELETE BUTTON
        let cellDelete = row.insertCell()                                        //APPEND DELETE BUTTON TO LI
        cellDelete.appendChild(deleteBtn)
    });

    // UPDATE EMPLOYEE COUNT
    empCount = employees.length
    $('empCount').innerHTML = empCount

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))

};

