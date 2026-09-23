function About() {
    return (
        <section id="about" className={"min-h-[60vh] md:min-h-screen flex flex-col justify-center p-8 md:p-6 lg:p-24 border-b border-mono-border bg-mono-surface/30"}>
            <h3 className={"text-sm uppercase tracking-widest text-mono-muted mb-8 md:mb-12 font-medium"}>About</h3>
            <div className={"max-w-3xl"}>
                <p className={"text-lg md:text-2xl font-primary leading-relaxed font-light text-mono-primary"}>Recent CS graduate with 1+ year of professional experiences in Full-Stack development and deploy to cloud service. I build software with security and reliabilities first mindset.</p>
            </div>
        </section>
    )
}
export default About;