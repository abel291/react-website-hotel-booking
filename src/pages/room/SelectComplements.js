const SelectComplements = ({ room }) => {
    return (
        <div className="space-y-6">
            <h3 className="font-bold text-3xl font-title ">Complementos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {room.complements &&
                    room.complements.map((complement, index) => (
                        <div key={index} className="flex items-center">
                            <img className="mr-3 w-6" src={"/storage/complements/" + complement.icon} alt="{complement.name }" />
                            <div>{complement.name}</div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SelectComplements
