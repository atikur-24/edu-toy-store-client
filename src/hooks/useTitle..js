import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title =`Edu Emporim | ${title}`;
    }, [title])
}

export default useTitle;