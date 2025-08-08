'use client';
import CreateTicketForm from "../Components/CreateTicketForm";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import styles from "./Customers.module.css";
import Image from "next/image";
import edit_icon from "@/app/image/editicon.svg";
import delete_icon from "@/app/image/deleteicon.svg";
import Pagination from "../Components/Pagination/Pagination";
import plus_icon from "@/app/image/plusicon.svg";

const customersData = [
  { id: 1, username: "hamza_khan", email: "hamza.khan@example.com", orderNumber: "#ORD-1001", orderAdded: "Jan 05, 2023" },
  { id: 2, username: "sana_malik", email: "sana.malik@example.com", orderNumber: "#ORD-1002", orderAdded: "Feb 11, 2023" },
  { id: 3, username: "bilal_ahmed", email: "bilal.ahmed@example.com", orderNumber: "#ORD-1003", orderAdded: "Mar 22, 2023" },
  { id: 4, username: "ayesha_kazmi", email: "ayesha.kazmi@example.com", orderNumber: "#ORD-1004", orderAdded: "Apr 14, 2023" },
  { id: 5, username: "usman_javed", email: "usman.javed@example.com", orderNumber: "#ORD-1005", orderAdded: "May 03, 2023" },
  { id: 6, username: "maria_zafar", email: "maria.zafar@example.com", orderNumber: "#ORD-1006", orderAdded: "Jun 19, 2023" },
  { id: 7, username: "ali_raza", email: "ahsan.raza@example.com", orderNumber: "#ORD-1007", orderAdded: "Jul 27, 2023" },
  { id: 8, username: "nimra_saeed", email: "nimra.saeed@example.com", orderNumber: "#ORD-1008", orderAdded: "Aug 08, 2023" },
  { id: 9, username: "zubair_hussain", email: "zubair.hussain@example.com", orderNumber: "#ORD-1009", orderAdded: "Sep 15, 2023" },
  { id: 10, username: "hina_yousuf", email: "hina.yousuf@example.com", orderNumber: "#ORD-1010", orderAdded: "Oct 01, 2023" },
];



export default function HardwareDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => {
    setIsModalOpen(true);
  };
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>

      <div className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Customers</h1>
            <button className={styles.createTicketBtn}  onClick={handleOpenForm}>
              <Image src={plus_icon} alt="Add" width={16} height={16} style={{ marginRight: "8px" }} />
              CREATE TICKET
            </button>
          </div>
        </header>

        {/* Controls */}
        <main className={styles.main}>
          <div className={styles.controls}>
            <div className={styles.searchContainer}>
              <input placeholder="Search members" className={styles.searchInput} />
            </div>
          </div>

          {/* Table */}
       <div className={styles.tableContainer}>
  <table className={styles.table}>
    <thead className={styles.tableHeader}>
      <tr className={styles.tableHeaderRow}>
        <th className={styles.tableHeaderCell}>ID</th> {/*  Added ID column */}
        <th className={styles.tableHeaderCell}>Username</th>
        <th className={styles.tableHeaderCell}>Email</th>
        <th className={styles.tableHeaderCell}>Order No.</th>
        <th className={styles.tableHeaderCell}>Order Added</th>
        <th className={`${styles.tableHeaderCell} ${styles.tableHeaderCellCenter}`}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {customersData.map((customer) => (
        <tr key={customer.id} className={styles.tableRow}>
          <td className={styles.tableCell}>{customer.id}</td> {/* ✅ Show ID */}
          <td className={styles.tableCell}>{customer.username}</td>
          <td className={styles.tableCell}>{customer.email}</td>
          <td className={styles.tableCell}>{customer.orderNumber}</td>
          <td className={`${styles.tableCell} ${styles.tableCellGray}`}>{customer.orderAdded}</td>
          <td className={`${styles.tableCell} ${styles.tableCellCenter}`}>
            <div className={styles.actionsContainer}>
              <button className={styles.actionBtn}>
                <Image src={edit_icon} alt="Edit" width={16} height={16} />
              </button>
              <button className={styles.actionBtn}>
                <Image src={delete_icon} alt="Delete" width={16} height={16} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          {/* Pagination */}
          <Pagination />
        </main>
      </div>
       {/* Modal render below */}
            {isModalOpen && <CreateTicketForm />}
    </div>
  );
}
