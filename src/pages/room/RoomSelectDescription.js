const RoomSelectDescription = ({room}) => {
    return (
        <div className="space-y-6">
            <h3 className="font-bold text-3xl font-title">Descripción</h3>
            <div className="">{room.description_max}</div>
        </div>
    )
}

export default RoomSelectDescription
