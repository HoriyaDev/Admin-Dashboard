import React, { useState } from 'react';
import Header from '../../components/header/header';
import Cards from '../../components/cards/Cards';
import Table from '../../components/table/Table';
import TableHeader from '../../components/table/TableHeader';

import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { playersList, tournamentList, playerCardData, playerHeading, tournamentHeading } from '../../utils/constants';

const DashBoard = () => {

  const [playerData, setPlayerData] = useState(playersList);
  const [cardData, setCardData] = useState(playerCardData);
  const [playerTableHeading, setPlayerTableHeading] = useState(playerHeading);
  const [heading, setHeading] = useState("All Players");
  const [activeButton, setActiveButton] = useState("players");

  const handlePlayers = () => {
    setCardData(playerCardData);
    setPlayerData(playersList);
    setPlayerTableHeading(playerHeading);
    setHeading("All Players");
    setActiveButton("players");
  }

  const handleTournament = () => {
    setPlayerData(tournamentList);

    setPlayerTableHeading(tournamentHeading);
    setHeading("All Tournaments");
    setActiveButton("tournament");
  }

  return (
    <>
      <Header />
      <div className='bg-light-blue-900 w-[1320px]  rounded-3xl mx-auto'>
        <div className='bg-white w-80 flex justify-between align-bottom rounded-3xl mx-auto   '>
          <button
            type='button'
            onClick={handlePlayers}
            className={` ml-0 rounded-3xl ${activeButton === "players" ? 'bg-yellow-400 rounded w-40 ml-0 ' : ''}`} // Conditional styling
          >
            Players
          </button>
          <button
            onClick={handleTournament}
            className={` rounded-3xl ${activeButton === "tournament" ? 'bg-yellow-400 w-40' : ''}`} // Conditional styling
          >
            Tournament
          </button>
        </div>

        <Cards cardData={cardData} />
        <div className="bg-blue-gray-100 w-[1300px] mx-auto rounded-lg mt-5">
          <TableHeader heading={heading} />
          <Table playerData={playerData} playerHeading={playerTableHeading} />
        </div>
      </div>
    </>
  )
}

export default DashBoard;
