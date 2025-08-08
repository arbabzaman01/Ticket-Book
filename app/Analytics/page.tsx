'use client';
import { useState } from "react";
import Navbar from '../Components/Navbar';
import Image from "next/image";
import plus_icon from "@/app/image/plusicon.svg"
import ellipse_img from '@/app/image/Ellipse.svg';
import card3_img from '@/app/image/card3.svg';
import customerissue_img from '@/app/image/customerIssues.svg';
import card6_img from '@/app/image/card6.svg';
import CreateTicketForm from "../Components/CreateTicketForm";
import styles from './Analytics.module.css';

export default function AnalyticsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.page}>
      <Navbar height="1161px" />

      <div className={styles.rightside}>
        <div className={styles.box1}>
          <div className={styles.innerbox}>
            <div className={styles.text}>Analytics</div>

  
 <button className={styles.createTicketBtn}  onClick={handleOpenForm}>
              <Image src={plus_icon} alt="Add" width={16} height={16} style={{ marginRight: "8px" }} />
              CREATE TICKET
            </button>
       
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.innerbox2}>
            <div className={styles.heading}>Welcome Back</div>
            <div className={styles.paragraph}>
              Get an Overview of all the stats from this page
            </div>
          </div>
        </div>

        <div className={styles.ticketRow}>
          <div className={styles.ticketStats}>Ticket Stats</div>
          <div className={styles.ticketLine}></div>
        </div>

        <div className={styles.box}>
          <div className={styles.card}>
            <div className={styles.headingcard1}>Summary</div>

            <div className={styles.grayBox}>
              <span className={styles.grayBoxText}>Awaiting unit arrival</span>
              <div className={styles.statusBadge}>06</div>
            </div>

            <div className={styles.grayBox}>
              <span className={styles.grayBoxText}>In-queue</span>
              <div className={styles.statusBadge}>12</div>
            </div>

            <div className={styles.grayBox}>
              <span className={styles.grayBoxText}>In-progres</span>
              <div className={styles.statusBadge}>02</div>
            </div>

            <div className={styles.grayBox}>
              <span className={styles.grayBoxText}>Resolved</span>
              <div className={styles.statusBadge}>24</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.overview}>Overview</div>
            <div className={styles.totalTickets}>Total Tickets</div>

            <div className={styles.ticketCount}>
              <span className={styles.ticketMain}>24</span>
              <span className={styles.ticketSub}>/40</span>
            </div>

            <div className={styles.ellipseWrapper}>
              <Image src={ellipse_img} alt="Ellipse" />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.headingcard3}>Latest Tickets</div>

            <div className={styles.ticketList}>
              <div className={styles.ticketBox}>
                <div className={styles.ticketText}>
                  <span>1.</span>
                  <span>gmail</span>
                </div>
                <Image src={card3_img} alt="card3_img" className={styles.ticketcard3_img} />
              </div>

              <div className={styles.ticketBox}>
                <div className={styles.ticketText}>
                  <span>2.</span>
                  <span>yahoo</span>
                </div>
                <Image src={card3_img} alt="card3_img" className={styles.ticketcard3_img} />
              </div>

              <div className={styles.ticketBox}>
                <div className={styles.ticketText}>
                  <span>3.</span>
                  <span>outlook</span>
                </div>
                <Image src={card3_img} alt="card3_img" className={styles.ticketcard3_img} />
              </div>

              <div className={styles.ticketBox}>
                <div className={styles.ticketText}>
                  <span>4.</span>
                  <span>hotmail</span>
                </div>
                <Image src={card3_img} alt="card3_img" className={styles.ticketcard3_img} />
              </div>

              <div className={styles.buttonCard3}>
                View All
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ticketRow}>
          <div className={styles.ticketStats}>Tag Stats</div>
          <div className={styles.ticketLine}></div>
        </div>

        <div className={styles.box}>
          <div className={styles.card}>
            <div className={styles.titlecard4}>Customer Issue</div>
            <p className={styles.description4}>Total issues: 6</p>
            <div className={styles.imageWrapper4}>
              <Image src={customerissue_img} alt="Customer Issues" className={styles.image4} />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.titlecard5}>Overview</div>

            <div className={styles.boxcard5}>
              <div className={styles.totaltags}>
                <p>Total Tags</p>
                <p className={styles.title2}>06</p>
              </div>
            </div>

            <div className={styles.grayline}></div>

            <div className={styles.secondboxcard5}>
              <div className={styles.totaltags}>
                <p>Total Tags</p>
                <p className={styles.title2}>06</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.titlecard6}>Overview</div>
            <p className={styles.description6}>Total issues: 6</p>
            <div className={styles.imageWrapper6}>
              <Image src={card6_img} alt="Overview" className={styles.image6} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal render below */}
      {isModalOpen && <CreateTicketForm />}
    </div>
  );
}
