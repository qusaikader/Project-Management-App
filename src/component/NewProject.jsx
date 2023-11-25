import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";


const NewProject = ({onClose, appendProject}) => {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === ''){
            modal.current.open();
            return;
        }


        const data = {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        }

        appendProject(data);
    }

    return (
        <>
        <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-stone-400 mb-4">You forgot to enter a value.</p>
            <p className="text-stone-400 mb-4">Please add all value.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onClose}>Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950"
                onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input label="Title" ref={title}/>
                <Input label="Description" textarea ref={description}/>
                <Input type="date" label="Due Date"  ref={dueDate}/>
            </div>
        </div>
        </>
    );
}

export default NewProject;