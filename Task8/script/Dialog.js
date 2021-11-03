class Dialog {
    constructor() {

    }

    showModalDescription() {

    }

    showModalEdit(id) {
        tasks.loadTask(id);
        this.showModalAdd();
    }

    showModalDelete() {

    }

    showModalAdd() {    
        modal.style.display = "block";
    }

    hideModal() {
        modal.style.display = "none";
    }
}