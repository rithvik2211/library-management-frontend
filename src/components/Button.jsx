

export default function Button(params) {

    
    return(
        <>
        <button type={params.type} className="p-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800" onClick={params.fnc}>{params.buttonText}</button>
        </>   
    )
}
