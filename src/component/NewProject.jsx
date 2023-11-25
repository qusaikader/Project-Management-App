import { useRef } from "react";
import Input from "./Input.jsx";


const NewProject = ({onClose, appendProject}) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        const data = {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        }

        appendProject(data);
    }

    return (
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
    );
}

export default NewProject;