import styles from './AuthCard.module.css';

type AuthCardProps = {
  title: string;
  children?: React.ReactNode;
}

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className={styles.authCardContainer}>
      <h1 className={styles.authCardTitle}>
        {title}
      </h1>
      {children}
    </div>
  )
}