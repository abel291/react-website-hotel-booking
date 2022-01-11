const Label = ({ htmlFor, className, children }) => {
    return (
        <label className={"block font-medium text-sm " + className} htmlFor={htmlFor}>
            {children}
        </label>
    )
}

export default Label
