import { useEffect, useState } from "react";


const useCycle = () => {
    const [cycle, setCycle] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('cycle.json')
        .then(res => res.json())
        .then(data => {
            setCycle(data)
            setLoading(false)
        })
    },[])

    return [cycle, loading]
};

export default useCycle;