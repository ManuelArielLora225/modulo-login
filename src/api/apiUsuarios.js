import { useState, useEffect } from "react";

export function fetchApi(url){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {

    setLoading(true)
    
    fetch(url)
        .then((res) => {
            if(!res.ok) new Error('Este usuario no esta registrado')
               return res.json()
        })
        .then((data) => {
            setData(data)
            setError(null)
        })
        .catch((err) => {
          res.statusCode(400).json(`A habido un error: ${error}`)
          setData(null)
        })
        .finally(() => { setLoading(false)})
    }, [url])

    return { data, error, loading }

}
