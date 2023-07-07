const useMediaQuery = () =>{
    return /Mobi/i.test(navigator.userAgent);
}
export default useMediaQuery;