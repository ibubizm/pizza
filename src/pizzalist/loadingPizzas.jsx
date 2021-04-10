import ContentLoader from "react-content-loader"

function LoadingPizzas(){
    return(
        <ContentLoader 
            speed={3}
            width={240}
            height={460}
            viewBox="0 0 240 460"
            backgroundColor="#cecece"
            foregroundColor="#ecebeb"
        >
            <circle cx="120" cy="120" r="120" /> 
            <rect x="0" y="249" rx="8" ry="8" width="240" height="60" /> 
            <rect x="0" y="317" rx="8" ry="8" width="240" height="98" /> 
            <rect x="4" y="422" rx="8" ry="8" width="76" height="35" /> 
            <rect x="168" y="422" rx="15" ry="15" width="72" height="35" />
        </ContentLoader>
    )
}

export default LoadingPizzas