import Navbar from "../Components/Navbar";
import styles from "./Diagnosis.module.css"
import Image from "next/image";
import edit_icon from "@/app/image/editicon.svg";
import delete_icon from "@/app/image/deleteicon.svg";
import plus_icon from "@/app/image/plusicon.svg";


  const diagnosisData = [
  {
    id: 1,
    title: "Set your goals for your first 90 days",
    description: "An average healthy 7 year old boy weighs about 50 lb (23 kg)...",
    dateCreated: "Oct 12, 2022"
  },
  {
    id: 2,
    title: "Blood Pressure Monitoring",
    description: "Monitor patient’s systolic and diastolic values weekly.",
    dateCreated: "Nov 5, 2023"
  },
  {
    id: 3,
    title: "Diabetes Management",
    description: "Insulin dosage to be adjusted based on blood sugar reports.",
    dateCreated: "Dec 1, 2023"
  },
  {
    id: 4,
    title: "Heart Rate Evaluation",
    description: "Keep a record of heart rate below 100 bpm during rest.",
    dateCreated: "Jan 20, 2024"
  },
  {
    id: 5,
    title: "Lung Capacity Check",
    description: "Pulmonary function test advised every 6 months.",
    dateCreated: "Feb 8, 2024"
  },
  {
    id: 6,
    title: "Vitamin Deficiency Screening",
    description: "Check for D3 and B12 in semi-annual tests.",
    dateCreated: "Mar 18, 2024"
  },
  {
    id: 7,
    title: "Allergy History Documentation",
    description: "Note reactions to common allergens and severity level.",
    dateCreated: "Apr 4, 2024"
  },
  {
    id: 8,
    title: "Vaccination Reminder",
    description: "Next dose due by mid-August for Hepatitis B.",
    dateCreated: "May 12, 2024"
  },
  {
    id: 9,
    title: "Mental Health Follow-up",
    description: "Schedule follow-up for mild anxiety treatment.",
    dateCreated: "Jun 25, 2024"
  },
  {
    id: 10,
    title: "Cholesterol Control Plan",
    description: "Dietary and medication plan to manage LDL and HDL levels.",
    dateCreated: "Jul 1, 2024"
  }
];

export default function diagnosisDashboard() {
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
            <h1 className={styles.headerTitle}>Diagnosis</h1>
           <button className={styles.createTicketBtn}>
  <Image src={plus_icon} alt="Add" className={styles.iconStyle} />
  CREATE TICKET
</button>

          </div>
        </header>

        {/* Main Content */}
        <main className={styles.main}>
          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.addHardwareBtn}>Add Diagnosis</button>

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
                  <th className={styles.tableHeaderCell}>title</th>
                  <th className={styles.tableHeaderCell}>Description</th>
                  <th className={styles.tableHeaderCell}>Date Created</th>
                  <th className={`${styles.tableHeaderCell} ${styles.tableHeaderCellCenter}`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {diagnosisData.map((item) => (
                  <tr key={item.id} className={styles.tableRow}>
                    <td className={`${styles.tableCell} ${styles.tableCellNumber}`}>{item.id}</td>
                    <td className={styles.tableCell}>{item.title}</td>
                    <td className={styles.tableCell}>{item.description}</td>
                    <td className={`${styles.tableCell} ${styles.tableCellGray}`}>{item.dateCreated}</td>
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
<div className={styles.paginationNoData}>
      <button className={styles.pageBtn}>{"< Previous"}</button>
      <button className={styles.pageBtn}>{"Next >"}</button>
    </div>
        </main>
      </div>
    </div>
  )
}
