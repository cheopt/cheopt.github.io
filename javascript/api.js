function findUsers(page = 1) {
  console.log("Pagina: ", page);
  axios
    .get(`https://reqres.in/api/users?page=${page}`)
    .then(function (response) {
      // handle success
      // obtengo el json real que me da servidor
      const msj = {
        type: "success",
        msj: "Lista obtenida exitosamente.",
      };
      Message(msj);
      console.log(response.data);

      //invocar al componente que muestra la lista de usuarios
      UserList(response.data);
    })
    .catch(function (error) {
      // handle error
      const msj = {
        type: "danger",
        msj: error.message,
      };
      Message(msj);
    })
    .then(function () {
      console.log("buscando lista de usuarios...");
    });
}

function Message(message) {
  const divError = document.getElementById("divError");
  const alert = `
        <div class="alert alert-${message.type} alert-dismissible fade show" role="alert">
            <strong>${message.msj}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> 
    `;
  divError.innerHTML = alert;
}

function UserList(data) {
  const divError = document.getElementById("users");

  const userListTable = `
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">first_name</th>
                <th scope="col">last_name</th>
                <th scope="col">avatar</th>
                </tr>
            </thead>
            <tbody>
            ${User(data.data)}
            </tbody>
        </table>
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li> 
                ${ListPage(data.total_pages)}
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    `;

  divError.innerHTML = userListTable;
}

function User(users) {
  let usersRow = ``;
  for (let user of users) {
    usersRow += `
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.email}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>
                    <img src="${user.avatar}">
                </td>
                </tr>
            <tr>
        `;
  }
  return usersRow;
}

function ListPage(totalPages) {
  console.log(totalPages);
  let listRow = ``;
  for (let i = 0; i <= totalPages - 1; i++) {
    let page = i + 1;
    listRow += `
        <li class="page-item>
            <a onClick="findUsers(${page})" class="page-link" href="#">${page}</a>
        </li>
        `;
  }
  return listRow;
}
