
import React from 'react'
import Cards from './components/Cards'
import amazonimg from './assets/amazon.jpg'

const jobopenings = [
  {
    img: "https://imgs.search.brave.com/bZPY5KFGckvtEdvVeXVU518z-eAJvyopsZh3m6v-_Zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODYxLzY0Ny9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1iYWNrZ3JvdW5k/LWZyZWUtcG5nLnBu/Zw",
    brandname: "Google",
    day: "2 hours ago",
    level: "Senior",
    type: "Backend Developer",
    type1: "Full-time",
    charge: "$120/hour",
    location: "Mountain View, CA"
  },
  {
    img: "https://imgs.search.brave.com/DbKhgEWeyuOFeiYL0U5JuPGYDRrjQ0pQ6IjVzle41Js/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81Mi81OC9t/aWNyb3NvZnQtdGVj/aG5vbG9neS1jb3Jw/b3JhdGlvbi1jb21w/dXRlci12ZWN0b3It/NDYzNTUyNTguanBn",
    brandname: "Microsoft",
    day: "5 days ago",
    level: "Junior",
    type: "UI/UX Designer",
    type1: "Part-time",
    charge: "$60/hour",
    location: "Redmond, WA"
  },
  {
    img: "https://imgs.search.brave.com/kjAbMXJ5x9hzQWtuGKZE9T2TjFs-vQ3011HXJduDVog/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1sb2dv/LW1lYW5pbmctNTAw/eDI1MC5qcGc",
    brandname: "Amazon",
    day: "1 week ago",
    level: "Senior",
    type: "Cloud Solutions Architect",
    type1: "Full-time",
    charge: "$100/hour",
    location: "Seattle, WA"
  },
  {
    img: "https://imgs.search.brave.com/mlVrr3tFP4G5pgc3grLHwxAzj43bb-bQJPb24YnjRgE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OC8yNC8yMy8xMi9h/cHBsZS03NDA4ODgz/XzY0MC5wbmc",
    brandname: "Apple",
    day: "3 days ago",
    level: "Junior",
    type: "Frontend Developer",
    type1: "Full-time",
    charge: "$70/hour",
    location: "Cupertino, CA"
  },
  {
    img: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    brandname: "Meta",
    day: "2 days ago",
    level: "Senior",
    type: "AI Research Engineer",
    type1: "Full-time",
    charge: "$130/hour",
    location: "Menlo Park, CA"
  },
  {
    img: "https://imgs.search.brave.com/FvKJWm5l2c5n-uCK4ixGzPCn_R9gK7xWa9bHIjF-IKg/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzcxLzUxLzc1/LzM2MF9GXzEwNzE1/MTc1ODFfWVhJc1VX/UFFHQk9zSnEwN0JL/azB5OHA2RWJYcnVa/dTcuanBn",
    brandname: "Netflix",
    day: "4 hours ago",
    level: "Junior",
    type: "Data Analyst",
    type1: "Part-time",
    charge: "$55/hour",
    location: "Los Gatos, CA"
  },
  {
    img: "https://imgs.search.brave.com/1wVaHxqACCDS9nNn3G6mPhQzQl70_cz6l6au_upH__M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzQ4NC9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    brandname: "Tesla",
    day: "6 days ago",
    level: "Senior",
    type: "Embedded Systems Engineer",
    type1: "Full-time",
    charge: "$110/hour",
    location: "Palo Alto, CA"
  },
  {
   img:"https://imgs.search.brave.com/tcZpETNDKQA_TGKQI8i8-1kcfDxrx8QL3CwRykbDM7I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MDg5NWYxNGQ1OThh/NTAwMDQ0OGVhOTku/cG5n",
    brandname: "Nvidia",
    day: "1 day ago",
    level: "Senior",
    type: "Machine Learning Engineer",
    type1: "Full-time",
    charge: "$140/hour",
    location: "Santa Clara, CA"
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG.png",
    brandname: "Adobe",
    day: "3 hours ago",
    level: "Junior",
    type: "Product Designer",
    type1: "Part-time",
    charge: "$65/hour",
    location: "San Jose, CA"
  },
  {
    img: "https://imgs.search.brave.com/6HLVNsll9sI8QF46w8Ii3ABmHcFcRnXB1ZlmCn9SFzc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MTM3OGQ1NTRiOTY2/MDAwMDRmNjc2ZTcu/cG5n",
    brandname: "IBM",
    day: "2 weeks ago",
    level: "Senior",
    type: "DevOps Engineer",
    type1: "Full-time",
    charge: "$95/hour",
    location: "Armonk, NY"
  }
];

function App() {
  return (
  
<div className="parent">
      { 
      jobopenings.map((job,index) => ( 
        <div key={index}> 
          <Cards  img={job.img} brandname={job.brandname} day={job.day} level={job.level}  type={job.type} type1={job.type1} charge={job.charge} location={job.location}  />
        </div>
        )
      ) }
     
    </div>
   
  )
}

export default App