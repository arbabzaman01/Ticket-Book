import Image from "next/image";
import styles from "./SplitLogin.module.css";
import { useRouter } from 'next/navigation';
import dashboard_img from "@/app/image/rightimage.svg";
import logo_img from "@/app/image/logo1.svg";
export default function SplitLogin() {
    const router = useRouter();
    return (
        <div className={styles.pageWrapper}> 
            <div className={styles.container}>
                {/* LEFT */}
                <div className={styles.left}>
                    <div className={styles.box}>
                        <div className={styles.logo1}>
                            <Image src={logo_img} alt="Logo" />
                        </div>
                        <h1>Login to your account</h1>
                        <p>Please login to get access to the dashboard.</p>

                        <div className={styles.formLogin}>
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <div className={styles.rememberMe}>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <button
                            className={styles.button}
                            onClick={() => router.push('/Analytics')}
                        >
                            Login
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <div className={styles.rightimage}>
                  <Image src={dashboard_img} alt="Dashboard" />
                    </div>
                </div>
            </div>
        </div>
    );
}
