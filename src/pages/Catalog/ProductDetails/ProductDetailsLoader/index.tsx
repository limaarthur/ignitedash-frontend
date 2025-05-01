import ContentLoader from "react-content-loader";

export function ProductDetailsLoader() {
  return (
    <ContentLoader 
      viewBox="0 0 400 160" 
      height={160} 
      width={400}
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >

    <rect x="0" y="0" rx="4" ry="4" width="300" height="20" />
    <rect x="0" y="30" rx="3" ry="3" width="100%" height="10" />
    <rect x="0" y="50" rx="3" ry="3" width="90%" height="10" />
    <rect x="0" y="70" rx="3" ry="3" width="95%" height="10" />
    <rect x="0" y="90" rx="3" ry="3" width="85%" height="10" />

    </ContentLoader>
  )
}