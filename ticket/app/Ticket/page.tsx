"use client"
import { useState, useMemo } from "react"
import Navbar from "../Components/Navbar"
import Image from "next/image"
import styles from "./Ticket.module.css"
import plus_img from "@/app/image/plusicon.svg"
import eyeicon from "@/app/image/eyeicon.svg"
import edit_icon from "@/app/image/editicon.svg"
import nodata_img from "@/app/image/datafound.svg"
import Pagination from "../Components/Pagination/Pagination";
import CreateTicketForm from "../Components/CreateTicketForm"

export default function TicketPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("All")

  const ticketData = [
    { rma: "001175437...", status: "Awaiting arrival", email: "georgia.young@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 8:30 am" },
    { rma: "001175438...", status: "In-queue", email: "bill.sanders@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 8:00 am" },
    { rma: "001175439...", status: "In-progress", email: "michelle.rivera@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 9:30 am" },
    { rma: "001175440...", status: "Completed", email: "deanna.curtis@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 9:30 am" },
    { rma: "001175441...", status: "Completed", email: "jackson.graham@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 9:30 am" },
    { rma: "001175442...", status: "In-progress", email: "sara.cruz@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 9:30 am" },
    { rma: "001175443...", status: "Completed", email: "willie.jennings@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 9:00 am" },
    { rma: "001175444...", status: "Completed", email: "curtis.weaver@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 9:00 am" },
    { rma: "001175445...", status: "In-queue", email: "jessica.hanson@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 8:30 am" },
    { rma: "001175446...", status: "Completed", email: "debbie.baker@example.com", hardware: "Starlight-12 Poseidon", updatedAt: "15 May 2020 8:00 am" },
  ]

  const getStatusClass = (status: string, index: number) => {
    const statusMap: { [key: string]: string[] } = {
      "Awaiting arrival": ["awaitingArrival"],
      "In-queue": ["inQueue", "inQueue2"],
      "In-progress": ["inProgress", "inProgress2"],
      Completed: ["completed", "completed2", "completed3", "completed4", "completed5"],
    }
    const colors = statusMap[status] || ["completed"]
    return colors[index % colors.length]
  }

const filteredTickets = useMemo(() => {
  let filtered = ticketData;
  if (searchQuery.trim()) {
    filtered = filtered.filter(
      (ticket) =>
        ticket.rma.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        ticket.status.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        ticket.email.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }
  if (activeTab !== "All") {
    const tabStatusMap: { [key: string]: string } = {
      "Awaiting arrival (12)": "Awaiting arrival",
      "In-queue(1)": "In-queue",
      "In-progress (14)": "In-progress",
    };
    const statusFilter = tabStatusMap[activeTab];
    if (statusFilter) {
      filtered = filtered.filter((ticket) => ticket.status === statusFilter);
    }
  }
  return filtered;
}, [searchQuery, activeTab]);



  const tabs = [
    "All",
    "Awaiting arrival (12)",
    "In-queue(1)",
    "In-progress (14)",
    "Custom1 (26)",
    "Custom2 (26)",
    "Custom3 (26)",
    "Custom4 (26)",
  ]

  const addNewTicket = () => {
    const newTicket = {
      rma: `00117${Math.floor(Math.random() * 10000)}...`,
      status: "Completed",
      email: "new.user@example.com",
      hardware: "Starlight-12 Poseidon",
      updatedAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    }
    ticketData.push(newTicket)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => {
    setIsModalOpen(true);
  };
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.rightSide}>
        <div className={styles.headerSection}>
          <div className={styles.headerContent}>
            <h1 className={styles.pageTitle}>Tickets</h1>
            <div className={styles.buttonBox} onClick={addNewTicket}>
              <Image src={plus_img} alt="Plus" width={16} height={16} />
              <span className={styles.createButtonText}  onClick={handleOpenForm}>CREATE TICKET</span>
            </div>
          </div>
        </div>

        <div className={styles.tabsSection}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabsList}>
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={activeTab === tab ? styles.tabActive : styles.tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className={styles.scrollArrow}>›</div>
          </div>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search by RMA, Issue or Status"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
<div className={styles.contentSection}>
{filteredTickets.length === 0 ? (
  <>
    <div className={styles.emptyState}>
      <div className={styles.emptyContent}>
        <Image src={nodata_img} alt="No Data Found" />
        <p>No Data Found</p>
      </div>
    </div>

    {/* 20px gap below white box, pagination outside */}
    <div className={styles.paginationNoData}>
      <button className={styles.pageBtn}>{"< Previous"}</button>
      <button className={styles.pageBtn}>{"Next >"}</button>
    </div>

    {/* Bottom space */}
    <div className={styles.pageBottomSpace}></div>
  </>
) : (


  // your existing tableContainer code stays same

            <div className={styles.tableContainer}>
              <div className={styles.tableHeaders}>
                <div className={styles.headerCell}>RMA</div>
                <div className={styles.headerCell}>Status</div>
                <div className={styles.headerCell}>Customer Email</div>
                <div className={styles.headerCell}>Hardware</div>
                <div className={styles.headerCell}>Updated at</div>
                <div className={styles.headerCell}>Actions</div>
              </div>
              <div className={styles.tableBody}>
                {filteredTickets.map((ticket, index) => (
                  <div key={`${ticket.rma}-${index}`} className={styles.tableRow}>
                    <div className={styles.dataCell}>{ticket.rma}</div>
                    <div className={styles.dataCell}>
                      <span className={`${styles.statusBadge} ${styles[getStatusClass(ticket.status, index)]}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <div className={styles.dataCell}>{ticket.email}</div>
                    <div className={styles.dataCell}>{ticket.hardware}</div>
                    <div className={styles.dataCell}>{ticket.updatedAt}</div>
                    <div className={styles.dataCell}>
                      <div className={styles.actionIcons}>
                        <Image src={eyeicon} alt="View" width={16} height={16} />
                        <Image src={edit_icon} alt="Edit" width={16} height={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

 {filteredTickets.length > 0 && (
  <div className={styles.paginationFixData}>
    <Pagination />
  </div>
)}



      </div>
        {/* Modal render below */}
      {isModalOpen && <CreateTicketForm />}
    </div>
  )
}
