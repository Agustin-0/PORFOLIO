export default function Container({ children}){
    return(
        <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-32">
            {children}
        </div>
    )
}