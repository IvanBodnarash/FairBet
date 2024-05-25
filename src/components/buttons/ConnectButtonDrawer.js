import React from "react";
// import {
//     Drawer,
//     Button,
//     // Typography,
//     // IconButton,
// } from "@material-tailwind/react";

// export function DrawerDefault() {
//     const [open, setOpen] = React.useState(false);

//     const openDrawer = () => setOpen(true);
//     const closeDrawer = () => setOpen(false);

//     return (
//         <React.Fragment>

//             {/* Button */}
//             <Button 
//                 onClick={openDrawer} 
//                 className="justify-self-end bg-gray-700 hover:bg-indigo-900 py-1.5 px-12 mr-8 rounded-2xl lowercase">
//                     Connect
//             </Button>

//             {/* Content in Drawer */}
//             <Drawer open={open} onClose={closeDrawer} className="p-4">
//                 <h1>Drawer</h1>
//             </Drawer>
//         </React.Fragment>
//     );
// }

export default function ConnectButtonDrawer({ setIsOpen }) {
    return (
        <div>
            <button onClick={() => setIsOpen(true)} className="justify-self-end bg-gray-700 hover:bg-indigo-900 py-1.5 px-12 mr-8 rounded-2xl lowercase">
                Connect
            </button>
        </div>
    );
}