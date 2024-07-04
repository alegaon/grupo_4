let BASE_URL = 'http://localhost:5000';



// Contenedor donde se dibujan los articulos
let articleContainer = document.querySelector(".contenedor-articulos");

// Template de articulos publicados
let articlePublished = document.querySelector(".articulo.publicados");

// Template de tarea Archivada
let articleArchived = document.querySelector(".articulo.archivado");

// Templates de tareas para clonar al momento de agregar tareas al contenedor
let taskTemplates = {
    "Publicada": articlePublished.cloneNode(true),
    "Archivada": articleArchived.cloneNode(true),
};

// Quito del documento los templates
articlePublished.remove();
articleArchived.remove();

function archiveTask(event) {
    let id = event.currentTarget.task_id;

    let url = BASE_URL + '/api/tasks/archive/' + id;

    fetchData(url, "DELETE", () => {
        location.reload();
    });
}

function editTask(event) {
    let id = event.currentTarget.task_id;
    window.location.replace("pages/add_update_task.html?task_id=" + id);
}

function completeTask(event) {
    let id = event.currentTarget.task_id;

    let url = BASE_URL + '/api/tasks/complete/set/' + id;

    fetchData(url, "PUT", () => {
        location.reload(); 
    });
}

function toPendingTask(event){
    let id = event.currentTarget.task_id;

    let url = BASE_URL + '/api/tasks/complete/reset/' + id;

    fetchData(url, "PUT", () => {
        location.reload();
    });
}

function loadTasks(task_status) {
    let fetch_data = {
        'Pendientes': {
            'URL': BASE_URL + '/api/tasks/pending/',
            'TaskTemplatesName': 'Pendiente'
        },

        'Completadas': {
            'URL': BASE_URL + '/api/tasks/completed/',
            'TaskTemplatesName': 'Completada'
        },

        'Archivadas': {
            'URL': BASE_URL + '/api/tasks/archived/',
            'TaskTemplatesName': 'Archivada'
        },
    }

    if (!(task_status in fetch_data)){
        throw new Error(`El Parametro: ${task_status} no está definido!`);
    }

    fetchData(fetch_data[task_status].URL, "GET", (data) => {
        // Procesamiento de la info que llega de la API
        let tasks = [];
        for (const task of data) {
            let newTask = taskTemplates[fetch_data[task_status].TaskTemplatesName].cloneNode(true);
            newTask.querySelector("h3 .titulo").innerHTML = task.nombre;
            newTask.querySelector(".descripcion").innerHTML = task.descripcion;
            newTask.querySelector(".fecha").innerHTML = task.fecha_creacion;
            newTask.querySelector(".task_id").value = task.id;

            let archivarAction = newTask.querySelector("#Archivar");
            let editarAction =newTask.querySelector("#Editar");
            let completarAction =newTask.querySelector("#Completar");
            let pasarAPendienteAction =newTask.querySelector("#Pendiente");

            if (archivarAction) {
                archivarAction.addEventListener("click", archiveTask);
                archivarAction.task_id = task.id;
            }

            if (editarAction) {
                editarAction.addEventListener("click", editTask);
                editarAction.task_id = task.id;
            }

            if (completarAction) {
                completarAction.addEventListener("click", completeTask);
                completarAction.task_id = task.id;
            }

            if (pasarAPendienteAction) {
                pasarAPendienteAction.addEventListener("click", toPendingTask);
                pasarAPendienteAction.task_id = task.id;
            }

            tasks.push(newTask);
        }

        taskContainer.replaceChildren(...tasks);
    });
}

function setActiveFilter(event){
    for (filter in filterButtons) {
        filterButtons[filter].classList.remove("active");
    }

    event.currentTarget.classList.add("active");

    loadTasks(event.currentTarget.filterName);
}

function setFilters() {
    for (button in filterButtons){
        filterButtons[button].addEventListener("click", setActiveFilter);
        filterButtons[button].filterName = button;
    }
}

setFilters();
loadTasks('Pendientes');