// import React, { useEffect, useState } from 'react';
// import Header from '../../components/header/header';
// import Cards from '../../components/cards/Cards';
// import Table from '../../components/table/Table';
// import TableHeader from '../../components/table/TableHeader';
// import { playersList, tournamentList, playerCardData, playerHeading, tournamentHeading } from '../../utils/constants';

// const DashBoard = () => {
//   const [playerData, setPlayerData] = useState(playersList); // Original data
//   const [cardData, setCardData] = useState(playerCardData);
//   const [playerTableHeading, setPlayerTableHeading] = useState(playerHeading);
//   const [heading, setHeading] = useState("All Players");
//   const [activeButton, setActiveButton] = useState("players");
//   const [filteredData, setFilteredData] = useState(playersList); // Add filtered state
//   //const [selectedRow , setSelectedRow] = useState(playersList)

//   const handlePlayers = () => {
//     setCardData(playerCardData);
//     setPlayerData(playersList);
//     setPlayerTableHeading(playerHeading);
//     setHeading("All Players");
//     setActiveButton("players");
//     setFilteredData(playersList); // Reset to original data
//   }

//   const handleTournament = () => {
//     setPlayerData(tournamentList);
//     setPlayerTableHeading(tournamentHeading);
//     setHeading("All Tournaments");
//     setActiveButton("tournament");
//     setFilteredData(tournamentList); 
//   }


//   const handleSearch = (search) => {
//     if (search === "") {
//       setFilteredData(playerData); 
//     } else {
//       const filtered = playerData.filter((item) => {
//         return (item.playerName || item.tournamentName).toLowerCase().includes(search.toLowerCase());
//       });
//       setFilteredData(filtered);
//     }
  

//   };



    

//   const handleArray = (value=5) => {
//     console.log("🚀 ~ orignal ~ count:", filteredData.length);
//     let originalArray = playerData; // Reset to the full list of players or tournaments
//     if (value === 5) {
//       const newArray = originalArray.slice(0, value);
//       console.log("🚀 count5:", newArray, value);
//       setFilteredData(newArray);
//     }
//     if (value === 10) {
//       const newArray = originalArray.slice(0, value);
//       console.log("🚀 count10:", newArray, value);
//       setFilteredData(newArray);
//     }
//     if (value === 15) {
//       const newArray = originalArray.slice(0, value);
//       console.log("🚀 count15:", newArray, value);
//       setFilteredData(newArray);
//     }
//   };
  

   

//   return (
//     <>
//       <Header />
//       <div className='bg-light-blue-900 w-[1320px] h-[1160px] relative rounded-3xl mx-auto '>
//         <div className='bg-white absolute mx-auto w-80 mt-5 ml-[500px] flex justify-between items-center  rounded-3xl '>
//           <button
//             type='button'
//             onClick={handlePlayers}
//             className={`ml-5 rounded-3xl   ${activeButton === "players" ? 'bg-yellow-400 rounded px-6  -ml-3 ' : ''}`}
//           >
//             Players
//           </button>
//           <button
//             onClick={handleTournament}
//             className={`rounded-3xl mr-5  ${activeButton === "tournament" ? 'bg-yellow-400 px-6 -mr-3 ' : ''}`}
//           >
//             Tournament
//           </button>
//         </div>

//         <Cards cardData={cardData} />
//         <div className="bg-blue-gray-100 w-[1300px] mb-7 h-[890px] mx-auto rounded-lg mt-5">
//           <TableHeader heading={heading} onSearch={handleSearch} onSelect={handleArray} /> 
//           <Table playerData={filteredData}  playerHeading={playerTableHeading} /> 
//         </div>
//       </div>
//     </>
//   );
// }

// export default DashBoard;







import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Cards from '../../components/cards/Cards';
import Table from '../../components/table/Table';
import TableHeader from '../../components/table/TableHeader';
import { playersList, tournamentList, playerCardData, playerHeading, tournamentHeading } from '../../utils/constants';

const DashBoard = () => {
  const [playerData, setPlayerData] = useState(playersList);
  const [cardData, setCardData] = useState(playerCardData);
  const [playerTableHeading, setPlayerTableHeading] = useState(playerHeading);
  const [heading, setHeading] = useState("All Players");
  const [activeButton, setActiveButton] = useState("players");
  const [filteredData, setFilteredData] = useState(playersList);

  const handlePlayers = () => {
    setCardData(playerCardData);
    setPlayerData(playersList);
    setPlayerTableHeading(playerHeading);
    setHeading("All Players");
    setActiveButton("players");
    setFilteredData(playersList);
  };

  const handleTournament = () => {
    setPlayerData(tournamentList);
    setPlayerTableHeading(tournamentHeading);
    setHeading("All Tournaments");
    setActiveButton("tournament");
    setFilteredData(tournamentList);
  };

  const handleSearch = (search) => {
    if (search === "") {
      setFilteredData(playerData);
    } else {
      const filtered = playerData.filter((item) =>
        // (item.playerName || item.tournamentName).toLowerCase().includes(search.toLowerCase())
      (item.playerName || item.tournamentName).toLowerCase().includes(search.toLowerCase())

      );
      setFilteredData(filtered);
    }
  };

  const handleArray = (value = 5) => {
    let originalArray = playerData;
    const newArray = originalArray.slice(0, value);
    setFilteredData(newArray);
  };

 

  return (
    <>
      <Header />
      <div className='bg-light-blue-900 w-[1320px] h-[1160px] relative rounded-3xl mx-auto'>
        <div className='bg-white absolute mx-auto w-80 mt-5 ml-[500px] flex justify-between items-center rounded-3xl'>
          <button
            type='button'
            onClick={handlePlayers}
            className={`ml-5 rounded-3xl ${activeButton === "players" ? 'bg-yellow-400 rounded px-6 -ml-3' : ''}`}
          >
            Players
          </button>
          <button
            onClick={handleTournament}
            className={`rounded-3xl mr-5 ${activeButton === "tournament" ? 'bg-yellow-400 px-6 -mr-3' : ''}`}
          >
            Tournament
          </button>
        </div>

        <Cards cardData={cardData} />
        <div className="bg-blue-gray-100 w-[1300px] mb-7 h-[890px] mx-auto rounded-lg mt-5">
          <TableHeader heading={heading} onSearch={handleSearch} onSelect={handleArray} />
          <Table playerData={filteredData} playerHeading={playerTableHeading}  />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
