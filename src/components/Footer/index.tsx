import { WhatsappLogo, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.mainFooter}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <div className={styles.footerIcons}>
        <a 
          href="https://web.whatsapp.com/"
          target="_blank"
        >
          <WhatsappLogo size={30} color="#D3D3D3" />
        </a>
        <a 
          href="https://www.instagram.com/"
          target="_blank"
        >
          <InstagramLogo size={30 }color="#D3D3D3" />
        </a>
        <a 
          href="https://www.facebook.com/"
          target="_blank"
        >
          <FacebookLogo size={30} color="#D3D3D3" />
        </a>
      </div>
    </footer>
  );
}