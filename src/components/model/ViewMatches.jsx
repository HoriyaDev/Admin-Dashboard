
import React from 'react';
import { MdClose } from "react-icons/md";
import AllMatches from '../matches/AllMatches';
import Completed from '../matches/Completed';
import Confirmed from '../matches/Confirmed';
import { useState } from 'react';

const ViewMatches = ({ open, onCloseModel }) => {
    const [selected, setSelected] = useState("allmatches");
    const [active, setActive] = useState("allmatches");

    const handleAllMatches = () => {
        setSelected("allmatches");
        setActive("allmatches");
    };

    const handleCompleted = () => {
        setSelected("completed");
        setActive("completed");
    };

    const handleConfirmed = () => {
        setSelected("confirmed");
        setActive("confirmed");
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className='bg-white w-[420px] h-[630px] rounded-2xl text-center p-2 overflow-y-auto scrollbar-custom scrollable-container'>
                <div className='flex justify-between'>
                    <h1>Player Profile/View Matches</h1>
                    <button className="bg-blue-gray-100 rounded-full">
                        <MdClose size={'15px'} className='text-black' onClick={onCloseModel} />
                    </button>
                </div>
                <div className='flex justify-evenly items-center mt-3'>
                    <button type='button' className={`px-3 py-1 rounded-3xl  bg-blue-gray-50 text-sm ${active === "allmatches" ? "bg-orange-500" : " "}`} onClick={handleAllMatches}>All Matches</button>
                    <button type='button' className={`px-3 py-1 rounded-3xl  bg-blue-gray-50 text-sm ${active === "completed" ? "bg-orange-500" : " "}`} onClick={handleCompleted}>Completed</button>
                    <button type='button' className={`px-3 py-1 rounded-3xl bg-blue-gray-50 text-sm ${active === "confirmed" ? "bg-orange-500" : " "}`} onClick={handleConfirmed}>Confirmed</button>
                </div>
                <div>
                    {selected === "allmatches" ? <AllMatches /> : null}
                    {selected === "completed" ? <Completed /> : null}
                    {selected === "confirmed" ? <Confirmed /> : null}
                </div>
            </div>
        </div>
    );
}

export default ViewMatches;
