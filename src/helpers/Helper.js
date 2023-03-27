/**
 * Navigate to the route
 * @param {()=>void} navigate 
 * @param {string} route 
 */
export const goToThePage = (navigate, route) => {
    
    try {
        navigate(route)
        
    } catch (error) {
        console.error("error in navigating page: ", error)
    }
}