"use client";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import styles from "./Team.module.css";
import Image from "next/image";
import edit_icon from "@/app/image/editicon.svg";
import delete_icon from "@/app/image/deleteicon.svg";
import Pagination from "../Components/Pagination/Pagination";
import plus_icon from "@/app/image/plusicon.svg";
import nodata_img from "@/app/image/datafound.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateTicketForm from "../Components/CreateTicketForm";

const teamsData = [
  { id: 1, firstName: "Euardo", lastName: "Lane", email: "deanna.curtis@example.com", role: "Technician", dateCreated: "Oct 12 2022" },
  { id: 2, firstName: "Kristin", lastName: "Fox", email: "sara.ahmed@example.com", role: "Admin", dateCreated: "Nov 01 2022" },
  { id: 3, firstName: "Angel", lastName: "Edward", email: "umar.farooq@example.com", role: "Technician", dateCreated: "Dec 15 2022" },
  { id: 4, firstName: "Cameron", lastName: "Richards", email: "ayesha.raza@example.com", role: "Admin", dateCreated: "Jan 03 2023" },
  { id: 5, firstName: "Cody", lastName: "Warren", email: "bilal.hassan@example.com", role: "Technician", dateCreated: "Feb 20 2023" },
  { id: 6, firstName: "Philip", lastName: "Lane", email: "zainab.malik@example.com", role: "Admin", dateCreated: "Mar 11 2023" },
  { id: 7, firstName: "Arthur", lastName: "Edwards", email: "hamza.iqbal@example.com", role: "Technician", dateCreated: "Apr 08 2023" },
  { id: 8, firstName: "Leslie", lastName: "Fox", email: "nida.qureshi@example.com", role: "Admin", dateCreated: "May 05 2023" },
  { id: 9, firstName: "Darrel", lastName: "Richards", email: "faisal.rauf@example.com", role: "Technician", dateCreated: "Jun 14 2023" },
  { id: 10, firstName: "Leslie", lastName: "Hawkins", email: "brenda.saleem@example.com", role: "Technician", dateCreated: "Jul 20 2023" },
];

export default function HardwareDashboard() {
  const [members, setMembers] = useState(teamsData);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [checkboxMode, setCheckboxMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    dateCreated: "",
  });

  const toggleCheckboxMode = () => setCheckboxMode(true);

  const handleDeleteConfirmed = () => {
    const updatedMembers = members.filter(member => !selectedMembers.includes(member.id));
    setMembers(updatedMembers);
    setShowDeleteModal(false);
    setSelectedMembers([]);
    setCheckboxMode(false);
    triggerNotification();
  };

  const triggerNotification = () => {
    toast.success(
      <div className={styles.toastContent}>
        <div className={styles.toastTitle}>Deletion Successful</div>
        <div className={styles.toastMessage}>Team member has been deleted successfully</div>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "customToast",
      }
    );
  };

  const handleAddMember = () => {
    const { firstName, lastName, email, role, dateCreated } = newMember;

    if (!firstName || !lastName || !email || !role || !dateCreated) {
      toast.error("Please fill all fields.");
      return;
    }

    const newId = members.length + 1;
    const newEntry = { id: newId, ...newMember };
    setMembers([...members, newEntry]);
    setNewMember({ firstName: "", lastName: "", email: "", role: "", dateCreated: "" });
    setShowAddMemberModal(false);
    toast.success("Member added successfully!");
  };

  const filteredMembers = members.filter((member) =>
    `${member.firstName} ${member.lastName} ${member.email} ${member.role}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>

      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Team</h1>
            <button className={styles.createTicketBtn}   onClick={handleOpenForm}>
              <Image src={plus_icon} alt="Plus Icon" className={styles.plusIcon} />
              CREATE TICKET
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.controls}>
            <div className={styles.leftControls}>
              <button className={styles.addHardwareBtn} onClick={() => setShowAddMemberModal(true)}>
                Add member
              </button>

              {checkboxMode && (
                <>
                  <button className={styles.confirmDeleteBtn} onClick={() => setShowDeleteModal(true)}>
                    Confirm Delete
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => {
                      setSelectedMembers([]);
                      setCheckboxMode(false);
                    }}
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>

            <div className={styles.searchContainer}>
              <input
                placeholder="Search members"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.tableContainer}>
            {filteredMembers.length === 0 ? (
              <div className={styles.noDataBox}>
                <Image src={nodata_img} alt="No Data Found" width={150} height={150} />
                <p className={styles.noDataText}>No Data Found</p>
              </div>
            ) : (
              <table className={styles.table}>
                <thead className={styles.tableHeader}>
                  <tr className={styles.tableHeaderRow}>
                    <th className={styles.tableHeaderCell}>
                      {checkboxMode && (
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            setSelectedMembers(e.target.checked ? filteredMembers.map((m) => m.id) : [])
                          }
                          checked={
                            filteredMembers.length > 0 &&
                            selectedMembers.length === filteredMembers.length
                          }
                        />
                      )}
                    </th>
                    <th className={styles.tableHeaderCell}>First Name</th>
                    <th className={styles.tableHeaderCell}>Last Name</th>
                    <th className={styles.tableHeaderCell}>Email</th>
                    <th className={styles.tableHeaderCell}>Role</th>
                    <th className={styles.tableHeaderCell}>Date Created</th>
                    <th className={`${styles.tableHeaderCell} ${styles.tableHeaderCellCenter}`}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className={styles.tableRow}>
                      <td className={styles.tableCell}>
                        {checkboxMode && (
                          <input
                            type="checkbox"
                            checked={selectedMembers.includes(member.id)}
                            onChange={() => {
                              setSelectedMembers((prev) =>
                                prev.includes(member.id)
                                  ? prev.filter((id) => id !== member.id)
                                  : [...prev, member.id]
                              );
                            }}
                          />
                        )}
                      </td>
                      <td className={styles.tableCell}>{member.firstName}</td>
                      <td className={styles.tableCell}>{member.lastName}</td>
                      <td className={styles.tableCell}>{member.email}</td>
                      <td className={styles.tableCell}>{member.role}</td>
                      <td className={`${styles.tableCell} ${styles.tableCellGray}`}>{member.dateCreated}</td>
                      <td className={`${styles.tableCell} ${styles.tableCellCenter}`}>
                        <div className={styles.actionsContainer}>
                          <button className={styles.actionBtn}>
                            <Image src={edit_icon} alt="Edit" width={16} height={16} />
                          </button>
                          <button className={styles.actionBtn} onClick={toggleCheckboxMode}>
                            <Image src={delete_icon} alt="Delete" width={16} height={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <Pagination />

          {showDeleteModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <div className={styles.iconWrapper}>
                  <Image src={delete_icon} alt="Delete" className={styles.iconImage} />
                </div>
                <p className={styles.modalText}>Deleting team member(s)?</p>
                <p className={styles.modalTextPara}>
                  You are about to delete member(s) from the team. This action is irreversible 
                  and can’t be undone. Do you wish to proceed?
                </p>
                <div className={styles.modalButtons}>
                  <button className={styles.cancelBtn} onClick={() => setShowDeleteModal(false)}>
                    Cancel
                  </button>
                  <button className={styles.confirmBtn} onClick={handleDeleteConfirmed}>
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {showAddMemberModal && (
            <div className={styles.addMemberOverlay}>
              <div className={styles.addMemberModal}>
                <button className={styles.closeBtn} onClick={() => setShowAddMemberModal(false)}>×</button>
                <div className={styles.addMemberHeader}>
                  <h2>Add Member</h2>
                </div>
                <div className={styles.addMemberBody}>
                  <hr className={styles.hr} />
                  <div className={styles.inputGroup}>
                    <label>First Name</label>
                    <input type="text" placeholder="Enter first name" className={styles.input}
                      value={newMember.firstName}
                      onChange={(e) => setNewMember({ ...newMember, firstName: e.target.value })}
                    />

                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name" className={styles.input}
                      value={newMember.lastName}
                      onChange={(e) => setNewMember({ ...newMember, lastName: e.target.value })}
                    />

                    <label>Email</label>
                    <input type="email" placeholder="Enter email" className={styles.input}
                      value={newMember.email}
                      onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    />

                    <label>Role</label>
                    <input type="text" placeholder="Enter role" className={styles.input}
                      value={newMember.role}
                      onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    />

                    <label>Date Created</label>
                    <div className={styles.dateInputs}>
                      <select className={styles.input} onChange={(e) =>
                        setNewMember((prev) => ({
                          ...prev,
                          dateCreated: `${e.target.value} ${prev.dateCreated.split(" ")[1] || ""} ${prev.dateCreated.split(" ")[2] || ""}`
                        }))
                      }>
                        <option value="">Month</option>
                        {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>

                      <select className={styles.input} onChange={(e) =>
                        setNewMember((prev) => ({
                          ...prev,
                          dateCreated: `${prev.dateCreated.split(" ")[0] || ""} ${e.target.value} ${prev.dateCreated.split(" ")[2] || ""}`
                        }))
                      }>
                        <option value="">Day</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>

                      <select className={styles.input} onChange={(e) =>
                        setNewMember((prev) => ({
                          ...prev,
                          dateCreated: `${prev.dateCreated.split(" ")[0] || ""} ${prev.dateCreated.split(" ")[1] || ""} ${e.target.value}`
                        }))
                      }>
                        <option value="">Year</option>
                        {[2022, 2023, 2024, 2025].map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <hr className={styles.hr} />

                  <div className={styles.buttonGroup}>
                    <button className={styles.primaryBtn} onClick={handleAddMember}>Add Member</button>
                    <button className={styles.secondaryBtn} onClick={() => setShowAddMemberModal(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        <ToastContainer />
      </div>
       {/* Modal render below */}
            {isModalOpen && <CreateTicketForm />}
    </div>
  );
}
