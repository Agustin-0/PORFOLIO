export default function Section({id, children}){
    return(
    <section id={id} className="py-16 dark:bg-darkmode-secundary scroll-mt-24">
        {children}
    </section>
    )
}