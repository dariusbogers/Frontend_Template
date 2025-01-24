import React from "react";

interface ListButtonDelimiterProps {
    className: String;
}

const ListButtonDelimiter: React.FC<ListButtonDelimiterProps> = ({className}) => {
    return(<hr className={`h-px border-0 ${className}`}></hr>)
}

export default ListButtonDelimiter