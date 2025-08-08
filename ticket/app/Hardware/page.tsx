'use client';
import Navbar from "../Components/Navbar";
import styles from "./Hardware.module.css"
import Image from "next/image";
import edit_icon from "@/app/image/editicon.svg";
import delete_icon from "@/app/image/deleteicon.svg";
import Pagination from "../Components/Pagination/Pagination";
import plus_icon from "@/app/image/plusicon.svg"
import CreateTicketForm from "../Components/CreateTicketForm";
import { useState } from "react";


const hardwareData = [
  { id: 1, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 2, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 3, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 4, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 5, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 6, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 7, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 8, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 9, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
  { id: 10, type: "Mouse", model: "MS-1945", dateAdded: "Oct 12, 2022" },
]

export default function HardwareDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenForm = () => {
      setIsModalOpen(true);
    };
  return (
    <div className={styles.container}>
      {/* Navbar with wrapper */}
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>

      <div className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Hardware</h1>
        
           <button className={styles.createTicketBtn} onClick={handleOpenForm}>
  <Image src={plus_icon} alt="Add" className={styles.iconStyle} />
  CREATE TICKET
</button>

          </div>
        </header>

        {/* Main Content */}
        <main className={styles.main}>
          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.addHardwareBtn}>Add hardware</button>

            <div className={styles.searchContainer}>
              <input placeholder="Search members" className={styles.searchInput} />
            </div>
          </div>

          {/* Table */}
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead className={styles.tableHeader}>
                <tr className={styles.tableHeaderRow}>
                  <th className={`${styles.tableHeaderCell} ${styles.tableHeaderCellNumber}`}></th>
                  <th className={styles.tableHeaderCell}>Hardware type</th>
                  <th className={styles.tableHeaderCell}>Model</th>
                  <th className={styles.tableHeaderCell}>Date Added</th>
                  <th className={`${styles.tableHeaderCell} ${styles.tableHeaderCellCenter}`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {hardwareData.map((item) => (
                  <tr key={item.id} className={styles.tableRow}>
                    <td className={`${styles.tableCell} ${styles.tableCellNumber}`}>{item.id}</td>
                    <td className={styles.tableCell}>{item.type}</td>
                    <td className={styles.tableCell}>{item.model}</td>
                    <td className={`${styles.tableCell} ${styles.tableCellGray}`}>{item.dateAdded}</td>
                    <td className={`${styles.tableCell} ${styles.tableCellCenter}`}>
                      <div className={styles.actionsContainer}>
                   
<button className={styles.actionBtn}>
  <Image src={edit_icon} alt="Edit" className={styles.iconStyle} />
</button>

<button className={styles.actionBtn}>
  <Image src={delete_icon} alt="Delete" className={styles.iconStyle} />
</button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

    
          {/* Pagination */}
   <Pagination/>
        </main>
      </div>
        {/* Modal render below */}
            {isModalOpen && <CreateTicketForm />}
    </div>
  )
}
