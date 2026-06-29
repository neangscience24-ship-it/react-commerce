import { useState, useEffect } from "react"
import axios from "axios"

const useGetAllProduct = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setData(res.data)
        console.log(res.data)
      } catch (error) {
        console.log('Error: ', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDate()

  }, [])

  return{
        data,
        isLoading
  }
}
export default useGetAllProduct