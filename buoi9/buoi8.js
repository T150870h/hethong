let id = 0;
const listStudent = [];
let editId = null;
window.onload = function () {
  const btn = document.querySelector("#submit");
  const table = document.querySelector("#tableData");
  const inputName = document.querySelector("#name");
  const inputAddress = document.querySelector("#address");
  const inputDob = document.querySelector("#dob");
  const inputScore = document.querySelector("#score");
  function clearInput() {
    inputName.value = "";
    inputAddress.value = "";
    inputDob.value = "";
    inputScore.value = "";
  }

  btn.addEventListener("click", function () {
    if (
      inputName.value === "" ||
      inputAddress.value === "" ||
      inputDob.value === "" ||
      inputScore.value === ""
    ) {
      return alert("Please fill all the fields");
    }

    if (editId !== null) {
      const indexStudentNeedEdit = listStudent.findIndex(
        (item) => item.id === editId
      );
      const newStudent = {
        id: editId,
        name: inputName.value,
        address: inputAddress.value,
        dob: inputDob.value,
        score: inputScore.value,
      };
      listStudent[indexStudentNeedEdit] = newStudent;
      editId = null;
    } else {
      const student = {
        id: id++,
        name: inputName.value,
        address: inputAddress.value,
        dob: inputDob.value,
        score: inputScore.value,
      };
      listStudent.push(student);
    }
    refreshTable();
    clearInput();
  });

  function deleteFunction(id) {
    const index = listStudent.findIndex((item) => item.id === id);
    listStudent.splice(index, 1);
    refreshTable();
  }

  function editFunction(id) {
    const index = listStudent.findIndex((item) => item.id === id);
    const student = listStudent[index];
    inputName.value = student.name;
    inputAddress.value = student.address;
    inputDob.value = student.dob;
    inputScore.value = student.score;
    editId = id;
  }

  function refreshTable() {
    table.innerHTML = "";
    for (let i = 0; i < listStudent.length; i++) {
      const student = listStudent[i];
      const row = document.createElement("tr");
      const col1 = document.createElement("td");
      const col2 = document.createElement("td");
      const col3 = document.createElement("td");
      const col4 = document.createElement("td");
      const col5 = document.createElement("td");
      const col6 = document.createElement("td");
      const btnDelete = document.createElement("button");
      const btnEdit = document.createElement("button");
      btnDelete.addEventListener("click", function () {
        deleteFunction(student.id);
      });
      btnEdit.addEventListener("click", function () {
        editFunction(student.id);
      });
      btnEdit.innerHTML = "Sửa";
      btnDelete.innerHTML = "Xóa";
      col1.innerHTML = id;
      const score = parseFloat(inputScore.value);
      if (score < 7) {
        row.style.backgroundColor = "red";
        col2.innerHTML = student.name + " (Yếu)";
      } else {
        row.style.backgroundColor = "green";
        col2.innerHTML = student.name + " (Giỏi)";
      }

      col3.innerHTML = student.address;
      col4.innerHTML = student.dob;
      col6.innerHTML = student.score;
      col5.appendChild(btnDelete);
      col5.appendChild(btnEdit);
      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      row.appendChild(col4);
      row.appendChild(col6);
      row.appendChild(col5);
      table.appendChild(row);
    }
  }
};