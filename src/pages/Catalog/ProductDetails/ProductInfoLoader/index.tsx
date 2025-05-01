import ContentLoader from "react-content-loader";

export function ProductInfoLoader() {
  return (
    <ContentLoader 
      viewBox="0 0 360 380" 
      height={300} 
      width={360}>

    <rect x="0" y="0" rx="10" ry="10" width="280" height="180" />
    <rect x="0" y="190" rx="0" ry="0" width="280" height="20" />
    <rect x="0" y="215" rx="0" ry="0" width="239" height="20" />
    <rect x="0" y="242" rx="0" ry="0" width="274" height="20" />

    </ContentLoader>
  )
}