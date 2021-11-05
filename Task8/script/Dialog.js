class Dialog {
    constructor() {

    }

    showModalDescription() {
        tasks.showTask();
        this.showModalAdd();
    }

    showModalEdit() {
        tasks.loadTask();
        this.showModalAdd();
    }

    showModalDelete() {
        let modalDelete = document.querySelector('.delete');
        modalDelete.style.display = 'block';
    }

    showModalAdd() {    
        modal.style.display = 'block';
    }

    hideModal() {
        modal.style.display = 'none';
    }

    hideModalDelete() {
        let modalDelete = document.querySelector('.delete');
        modalDelete.style.display = 'none';
    }
}