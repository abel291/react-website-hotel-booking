const TitleSection = ({ title, subTitle }) => {
    return (
        <>
            <div>
                <span className="tracking-wide uppercase text-gray-400 text-sm">{title}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-title">{subTitle}</h2>
            </div>
        </>
    )
}

export default TitleSection
