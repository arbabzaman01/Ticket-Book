'use client';
import Image from 'next/image';
import styles from './Navbar.module.css'; 
import logo_img from "@/app/image/logo1.svg";
import analytics_img from "@/app/image/AnalyticsLogo.svg";
import tickets_img from "@/app/image/TicketLogo.svg";
import customers_img from "@/app/image/Customers.svg";
import hardware_img from "@/app/image/Hardware.svg";
import team_img from "@/app/image/Team.svg";
import settings_img from "@/app/image/setting.svg";

import logout_img from "@/app/image/Logout.svg";

import { usePathname, useRouter } from 'next/navigation';





export default function Navbar({ height = "1024px" }) {
  const router = useRouter();
  
const pathname = usePathname();


  const handleLogout = () => {
  
    localStorage.clear(); 

  
    router.push('/Login'); 

    
  }

  return (
    // navbar
   <div className={styles.navbar} style={{ height }}>
     
      <div className={styles.logo}>
        <Image src={logo_img} alt="FinalMouse"  />
      </div>
<div className={styles.menuBox}>
<div
  className={ pathname === "/Analytics"
      ? styles.menuItem + " " + styles.active: styles.menuItem } onClick={() => router.push('/Analytics')}
>
  <Image src={analytics_img} alt="logo" />
  <span className={styles.analyticsText}>Analytics</span>
</div>

  <div className={ pathname ==="/Ticket"
    ? styles.menuItem + " " + styles.active : styles.menuItem} onClick={() => router.push('/Ticket')}>
  <Image src={tickets_img} alt="logo" />
  <span className={styles.analyticsText}>Ticket</span>
</div>


   <div className={pathname ==="/Customers"
    ? styles.menuItem + " " + styles.active : styles.menuItem}  onClick={() => router.push('/Customers')}>
    <Image src={customers_img} alt="logo"  />
    <span className={styles.analyticsText}>Customers</span>
  </div>

   <div className={pathname ==="/Hardware"
    ? styles.menuItem + " " + styles.active : styles.menuItem}  onClick={() => router.push('/Hardware')}>
    <Image src={hardware_img} alt="logo"  />
    <span className={styles.analyticsText}>Hardware</span>
  </div>

   <div className={pathname ==="/Team"
    ? styles.menuItem + " " + styles.active : styles.menuItem}  onClick={() => router.push('/Team')}>
    <Image src={team_img} alt="logo" />
    <span className={styles.analyticsText}>Team</span>
  </div>

  
   <div className={pathname ==="/Diagnosis"
    ? styles.menuItem + " " + styles.active : styles.menuItem}  onClick={() => router.push('/Diagnosis')}>
    <Image src={settings_img} alt="logo" />
    <span className={styles.analyticsText}>Diagnosis</span>
  </div>

   {/* <div className={pathname ==="/TagsManager"
    ? styles.menuItem + " " + styles.active : styles.menuItem}  onClick={() => router.push('/TagsManager')}>
    <Image src={tagsmanager_img} alt="logo" />
    <span className={styles.analyticsText}>Tag Manager</span>
  </div> */}
</div>


         <div className={styles.logout} onClick={handleLogout}>
      <Image src={logout_img} alt="logout" />
      <span className={styles.logoutText}>Logout</span>
    </div>
    </div>
  );
}
