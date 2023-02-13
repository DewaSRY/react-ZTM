



export const getData=async<T>(url:string): promise<T>=>{
    const response=await fetch(url)
    return await response.json()
} 