import noprojects from "../assets/noprojects.png"
import Button from "./Button.jsx";


const NoProject = ({onAddProject}) => {
    return (
    <div className="mt-24 text-center w-2/3">
        <img src={noprojects} alt="Image" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4">No Projects Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <div className="mt-8">
            <Button onClick = {onAddProject}>
                Add New Project
            </Button>
        </div>
    </div>
    )
}

export default NoProject;