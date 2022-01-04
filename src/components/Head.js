import { MetaTags } from "react-meta-tags"

const Head = ({ title, description }) => {
    return (
        <MetaTags>
            <title>{title}</title>
            <meta name="description" content={description} />
        </MetaTags>
    )
}

export default Head
