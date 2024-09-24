import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";


 export const playerCardData = [
    {   
        id:1,
        h1: "Total Players",
        number:"25,300",
        text:" vs last month ",
        src:"Line.png",
        icon:<FaArrowUp className='text-green-400' />
    },
    {   
        id:2,
        h1: "Tournaments",
        number:"15,320",
        text:" vs last month ",
        src:"_Chart.png",
        icon:<FaArrowDown className='text-red-400' />


    },
    {   
        id:3,
        h1: "Reported Player",
        number:"220",
        text:" vs last month " ,
        src:"_Chart.png",
        icon:<FaArrowDown className='text-red-400' />
    },
 ]




export const playersList = [
  {
    id: 1,
    playerName: "John Doe",
    playerId: "#124234",
    ranking: "01",
    wins: "80%",
    preferences: "Right-handed",
    gender: "Male",
    email: "johndoe@example.com",
    lastLogin: "02 JAN 2024",
  },
  {
    id: 2,
    playerName: "Jane Smith",
    playerId: "#124235",
    ranking: "02",
    wins: "75%",
    preferences: "Right-handed",
    gender: "Female",
    email: "janesmith@example.com",
    lastLogin: "01 JAN 2024",
  },
  {
    id: 3,
    playerName: "Robert Brown",
    playerId: "#124236",
    ranking: "03",
    wins: "78%",
    preferences: "Right-handed",
    gender: "Male",
    email: "robertbrown@example.com",
    lastLogin: "03 JAN 2024",
  },
  {
    id: 4,
    playerName: "Emily Davis",
    playerId: "#124237",
    ranking: "04",
    wins: "82%",
    preferences: "Right-handed",
    gender: "Female",
    email: "emilydavis@example.com",
    lastLogin: "02 JAN 2024",
  },
  {
    id: 5,
    playerName: "Michael Wilson",
    playerId: "#124238",
    ranking: "05",
    wins: "77%",
    preferences: "Right-handed",
    gender: "Male",
    email: "michaelwilson@example.com",
    lastLogin: "04 JAN 2024",
  },
  {
    id: 6,
    playerName: "Sarah Johnson",
    playerId: "#124239",
    ranking: "06",
    wins: "74%",
    preferences: "Right-handed",
    gender: "Female",
    email: "sarahjohnson@example.com",
    lastLogin: "03 JAN 2024",
  },
  {
    id: 7,
    playerName: "David Martinez",
    playerId: "#124240",
    ranking: "07",
    wins: "79%",
    preferences: "Right-handed",
    gender: "Male",
    email: "davidmartinez@example.com",
    lastLogin: "02 JAN 2024",
  },
  {
    id: 8,
    playerName: "Laura White",
    playerId: "#124241",
    ranking: "08",
    wins: "81%",
    preferences: "Right-handed",
    gender: "Female",
    email: "laurawhite@example.com",
    lastLogin: "01 JAN 2024",
  },
  {
    id: 9,
    playerName: "James Harris",
    playerId: "#124242",
    ranking: "09",
    wins: "76%",
    preferences: "Right-handed",
    gender: "Male",
    email: "jamesharris@example.com",
    lastLogin: "03 JAN 2024",
  },
  {
    id: 10,
    playerName: "Olivia Lewis",
    playerId: "#124243",
    ranking: "10",
    wins: "78%",
    preferences: "Right-handed",
    gender: "Female",
    email: "olivialewis@example.com",
    lastLogin: "02 JAN 2024",
  },
  {
    id: 11,
    playerName: "William Clark",
    playerId: "#124244",
    ranking: "11",
    wins: "75%",
    preferences: "Right-handed",
    gender: "Male",
    email: "williamclark@example.com",
    lastLogin: "04 JAN 2024",
  },
  {
    id: 12,
    playerName: "Sophia Rodriguez",
    playerId: "#124245",
    ranking: "12",
    wins: "80%",
    preferences: "Right-handed",
    gender: "Female",
    email: "sophiarodriguez@example.com",
    lastLogin: "03 JAN 2024",
  },
  {
    id: 13,
    playerName: "Alexander Hall",
    playerId: "#124246",
    ranking: "13",
    wins: "74%",
    preferences: "Right-handed",
    gender: "Male",
    email: "alexanderhall@example.com",
    lastLogin: "02 JAN 2024",
  },
  {
    id: 14,
    playerName: "Mia Walker",
    playerId: "#124247",
    ranking: "14",
    wins: "77%",
    preferences: "Right-handed",
    gender: "Female",
    email: "miawalker@example.com",
    lastLogin: "01 JAN 2024",
  },
  {
    id: 15,
    playerName: "Benjamin King",
    playerId: "#124248",
    ranking: "15",
    wins: "79%",
    preferences: "Right-handed",
    gender: "Male",
    email: "benjaminking@example.com",
    lastLogin: "04 JAN 2024",
  },
];

export const tournamentList = [
  {
    id: 1,
    tournamentName: "Champions League",
    date: "15 FEB 2024",
    level: "Professional",
    availablePlaces: "10",
    playerJoined: "8",
    address: "123 Stadium Avenue, City, Country",
    price: "$150",
    createdBy: "Admin"
  },
  {
    id: 2,
    tournamentName: "Grand Slam Open",
    date: "22 MAR 2024",
    level: "Advanced",
    availablePlaces: "12",
    playerJoined: "10",
    address: "45 Court Street, City, Country",
    price: "$200",
    createdBy: "Admin"
  },
  {
    id: 3,
    tournamentName: "Regional Cup",
    date: "05 APR 2024",
    level: "Intermediate",
    availablePlaces: "20",
    playerJoined: "15",
    address: "789 Park Lane, City, Country",
    price: "$100",
    createdBy: "User123"
  },
  {
    id: 4,
    tournamentName: "National Championship",
    date: "10 MAY 2024",
    level: "Expert",
    availablePlaces: "8",
    playerJoined: "6",
    address: "321 Arena Road, City, Country",
    price: "$250",
    createdBy: "Admin"
  },
  {
    id: 5,
    tournamentName: "Beginner's Tournament",
    date: "30 JUN 2024",
    level: "Beginner",
    availablePlaces: "16",
    playerJoined: "12",
    address: "654 Playground Boulevard, City, Country",
    price: "$50",
    createdBy: "User456"
  },
  {
    id: 6,
    tournamentName: "City Invitational",
    date: "20 JUL 2024",
    level: "Intermediate",
    availablePlaces: "18",
    playerJoined: "14",
    address: "555 City Park, City, Country",
    price: "$120",
    createdBy: "Admin"
  },
  {
    id: 7,
    tournamentName: "Elite Series",
    date: "12 AUG 2024",
    level: "Advanced",
    availablePlaces: "14",
    playerJoined: "11",
    address: "222 Elite Road, City, Country",
    price: "$180",
    createdBy: "User789"
  },
  {
    id: 8,
    tournamentName: "Winter Classic",
    date: "01 SEP 2024",
    level: "Professional",
    availablePlaces: "12",
    playerJoined: "9",
    address: "999 Winter Avenue, City, Country",
    price: "$160",
    createdBy: "Admin"
  },
  {
    id: 9,
    tournamentName: "Summer Showdown",
    date: "15 OCT 2024",
    level: "Beginner",
    availablePlaces: "20",
    playerJoined: "17",
    address: "333 Summer Street, City, Country",
    price: "$70",
    createdBy: "User123"
  },
  {
    id: 10,
    tournamentName: "Autumn Championship",
    date: "30 NOV 2024",
    level: "Expert",
    availablePlaces: "10",
    playerJoined: "8",
    address: "444 Autumn Lane, City, Country",
    price: "$220",
    createdBy: "Admin"
  },
  {
    id: 11,
    tournamentName: "Spring Masters",
    date: "12 DEC 2024",
    level: "Advanced",
    availablePlaces: "15",
    playerJoined: "13",
    address: "555 Spring Boulevard, City, Country",
    price: "$190",
    createdBy: "Admin"
  },
  {
    id: 12,
    tournamentName: "Holiday Cup",
    date: "25 DEC 2024",
    level: "Intermediate",
    availablePlaces: "20",
    playerJoined: "19",
    address: "666 Holiday Street, City, Country",
    price: "$130",
    createdBy: "User789"
  },
  {
    id: 13,
    tournamentName: "New Year Challenge",
    date: "05 JAN 2025",
    level: "Beginner",
    availablePlaces: "22",
    playerJoined: "21",
    address: "777 New Year Avenue, City, Country",
    price: "$60",
    createdBy: "Admin"
  },
  {
    id: 14,
    tournamentName: "Winter Cup",
    date: "20 FEB 2025",
    level: "Intermediate",
    availablePlaces: "18",
    playerJoined: "16",
    address: "888 Winter Street, City, Country",
    price: "$140",
    createdBy: "Admin"
  },
  {
    id: 15,
    tournamentName: "Pro Invitational",
    date: "10 MAR 2025",
    level: "Professional",
    availablePlaces: "10",
    playerJoined: "9",
    address: "999 Pro Road, City, Country",
    price: "$210",
    createdBy: "Admin"
  }
];

 export const joinedPlayers = [
  {
    src: "pic3.jpg",
    name: "John Doe",
    text: "Win 12 out of 16 matches",
    email: "john.doe@example.com",
    licenseNumber: "AB123456",
    telephone: "+1234567890",
    winningRatio: "75%"
  },
  {
    src: "pic4.jpg",
    name: "Jane Smith",
    text: "Win 12 out of 16 matches",
    email: "jane.smith@example.com",
    licenseNumber: "XY987654",
    telephone: "+0987654321",
    winningRatio: "75%"
  },
  {
    src: "pic5.jpg",
    name: "Sam Johnson",
    text: "Win 12 out of 16 matches",
    email: "sam.johnson@example.com",
    licenseNumber: "CD654321",
    telephone: "+1122334455",
    winningRatio: "75%"
  }
];

  
  
  
export const playerHeading = [{
  h1:"Player",
  h2:"Player Id",
  h3:"Ranking",
  h4:"Wins",
  h5:"Preference",
  h6:"Gender",
  h7:"Email",
  h8:"Last Login",
  h9:"Action",
}]

export const tournamentHeading = [{
  h1:"Tournament Name",
  h2:"Date",
  h3:"Level",
  h4:"Available Places",
  h5:"Player Joined",
  h6:"Address ",
  h7:"Price",
  h8:"Action"

}]


 export const reportedPlayer = [
  {
    player: "John Doe",
    playerId: "P001",
    playerEmail: "john.doe@example.com",
    reportBy: "Admin",
    reportDate: "2024-09-01",
    reason: "Late submission",
    src: "pic4.jpg"
  },
  {
    player: "Jane Smith",
    playerId: "P002",
    playerEmail: "jane.smith@example.com",
    reportBy: "Coach",
    reportDate: "2024-08-30",
    reason: "Missed practice",
     src: "pic4.jpg"
  },
  {
    player: "Michael Johnson",
    playerId: "P003",
    playerEmail: "michael.j@example.com",
    reportBy: "Referee",
    reportDate: "2024-08-29",
    reason: "Disrespectful behavior",
     src: "pic4.jpg"
  },
  {
    player: "Emily Davis",
    playerId: "P004",
    playerEmail: "emily.d@example.com",
    reportBy: "Admin",
    reportDate: "2024-08-28",
    reason: "Unapproved absence",
     src: "pic4.jpg"
  },
  {
    player: "David Brown",
    playerId: "P005",
    playerEmail: "david.b@example.com",
    reportBy: "Coach",
    reportDate: "2024-08-27",
    reason: "Poor performance",
     src: "pic4.jpg"
  },
  {
    player: "Olivia Wilson",
    playerId: "P006",
    playerEmail: "olivia.w@example.com",
    reportBy: "Referee",
    reportDate: "2024-08-26",
    reason: "Late arrival",
     src: "pic4.jpg"
  },
  {
    player: "Sophia Miller",
    playerId: "P007",
    playerEmail: "sophia.m@example.com",
    reportBy: "Admin",
    reportDate: "2024-08-25",
    reason: "Missed deadline",
    src: "pic4.jpg"
  },
  {
    player: "James Taylor",
    playerId: "P008",
    playerEmail: "james.t@example.com",
    reportBy: "Coach",
    reportDate: "2024-08-24",
    reason: "Missed match",
     src: "pic4.jpg"
  },
  {
    player: "Isabella Martinez",
    playerId: "P009",
    playerEmail: "isabella.m@example.com",
    reportBy: "Referee",
    reportDate: "2024-08-23",
    reason: "Violation of rules",
   src: "pic4.jpg"
  },
  {
    player: "William Garcia",
    playerId: "P010",
    playerEmail: "william.g@example.com",
    reportBy: "Admin",
    reportDate: "2024-08-22",
    reason: "Poor attendance",
    src: "pic4.jpg"
  },
  {
    player: "Lucas Lee",
    playerId: "P011",
    playerEmail: "lucas.l@example.com",
    reportBy: "Coach",
    reportDate: "2024-08-21",
    reason: "Unprepared",
    src: "pic4.jpg"
  },
  {
    player: "Ava White",
    playerId: "P012",
    playerEmail: "ava.w@example.com",
    reportBy: "Referee",
    reportDate: "2024-08-20",
    reason: "Unsportsmanlike conduct",
    src: "pic4.jpg"
  },
  {
    player: "Mia Harris",
    playerId: "P013",
    playerEmail: "mia.h@example.com",
    reportBy: "Admin",
    reportDate: "2024-08-19",
    reason: "Incomplete paperwork",
    src: "pic4.jpg"
  },
  {
    player: "Elijah Clark",
    playerId: "P014",
    playerEmail: "elijah.c@example.com",
    reportBy: "Coach",
    reportDate: "2024-08-18",
    reason: "Failure to follow instructions",
    src: "pic4.jpg"
  },
  {
    player: "Charlotte Lewis",
    playerId: "P015",
    playerEmail: "charlotte.l@example.com",
    reportBy: "Referee",
    reportDate: "2024-08-17",
    reason: "Inappropriate language",
   src: "pic4.jpg"
  }
];
export const ranking = [
  {
    victory:"Victories: ", 
    defeat:"Defeats: ",
    wining:"Wining Ratio: ",
    total:"Total Matches: "


}]

export const partner = [
  {
    id:"01",
    src:"pic3.jpg",
    name:"Cheyenne Ekstrom",
    wins: "89% wins"
  },
  {
    id:"02",
    src:"pic4.jpg",
    name:"Lydia Westervelt",
    wins:" 82% wins"
  },
  {
    id:"01",
    src:"pic7.jpg",
    name:"Adison Torff",
    wins:" 88% wins"
  },

]

export const RankingPlayers = [
  {
    id: "01",
    src: "pic3.jpg",
    name: "Cheyenne Ekstrom",
    wins: "89% "
  },
  {
    id: "02",
    src: "pic3.jpg",
    name: "Lydia Westervelt",
    wins: "82% "
  },
  {
    id: "03",
    src: "pic3.jpg",
    name: "Adison Torff",
    wins: "88% "
  },
  {
    id: "04",
    src: "pic3.jpg",
    name: "Zane McGregor",
    wins: "76% "
  },
  {
    id: "05",
    src: "pic3.jpg",
    name: "Aliza Finn",
    wins: "91% "
  },
  {
    id: "06",
    src: "pic3.jpg",
    name: "Mateo Reyes",
    wins: "85% "
  },
  {
    id: "07",
    src: "pic3.jpg",
    name: "Janelle Johnson",
    wins: "83% "
  },
  {
    id: "08",
    src: "pic3.jpg",
    name: "Miles Everett",
    wins: "79% "
  },
  {
    id: "09",
    src: "pic3.jpg",
    name: "Ruby Harrington",
    wins: "92% "
  },
  {
    id: "10",
    src: "pic3.jpg",
    name: "Leo Williams",
    wins: "87% "
  }
];

export const AllMatche = [
  { id: 1, name: "John Doe", src: "pic3.jpg", percentage: "75%" },
  { id: 2, name: "Jane Smith", src: "pic4.jpg", percentage: "85% "},
  { id: 3, name: "Alice Johnson", src: "pic5.jpg", percentage: "90%" },
  { id: 4, name: "Bob Brown", src: "pic6.jpg", percentage: "80%" }
];
