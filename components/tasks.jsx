"use client"
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { checklist } from "../context/checklistState";

export default function Tasks() {
  const [groupSelected, setGroupSelected] = React.useState(JSON.parse(localStorage.getItem('sampdata') || []));
  const setcheckliststate = useSetRecoilState(checklist);
  useEffect(()=>{
    console.log("here", groupSelected);
    setcheckliststate(groupSelected);
    localStorage.setItem('sampdata', JSON.stringify(groupSelected));
  }, [groupSelected])
  // localStorage.setItem('sampdata', JSON.stringify([12,13,15,32,13,31,9]));

  const handleSubmit = () =>{}

  return (
    <div className="flex flex-col gap-1 w-full items-center	">
    <h2>Tasks</h2>
      <form onSubmit={handleSubmit}>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
          <div key={day}>
            <label>
              {day}:
              <input className="customcolor input-field" type="number" value={groupSelected[index]} onChange={(e) => setGroupSelected(prevState => {
                const newState = [...prevState];
                newState[index] = parseInt(e.target.value);
                return newState;
              })} />
            </label>
            <br />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p className="mt-4 ml-1 text-default-500">
        Selected: {groupSelected.join(", ")}
      </p>
    </div>
  );
}
