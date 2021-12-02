class Dialog {
    constructor() {

    }

    showModalDescription() {
        modal.style.display = 'block';
        tasks.showTask();
    }

    showModalEdit(event) {
        event.stopPropagation();
        modal.style.display = 'block';
        tasks.loadTask();
    }

    showModalDelete(event) {
        event.stopPropagation();
        let modalDelete = document.querySelector('.delete');
        modalDelete.style.display = 'block';
    }

    showModalAdd() {
        modal.style.display = 'block';
        tasks.addTask();
    }

    hideModal() {
        modal.style.display = 'none';
    }

    hideModalDelete() {
        let modalDelete = document.querySelector('.delete');
        modalDelete.style.display = 'none';
    }

    showError(email, password, name) {
        let error = document.querySelector('.error');

        error.innerHTML = `${errors(email, password, name)}`;
        error.style.display = 'block';

        setTimeout(()=>{
            error.style.display = 'none';
        }, 2000); 
    }

    showErrorVerificate() {
        let error = document.querySelector('.error');

        error.innerHTML = `This user is not found`;
        error.style.display = 'block';

        setTimeout(()=>{
            error.style.display = 'none';
        }, 2000); 
    }
}