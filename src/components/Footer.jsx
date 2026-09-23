function Footer() {
    return (
        <div className={"min-h-[10vh] flex flex-col justify-center pl-4 border-b border-mono-border bg-mono-surface/30"}>
            <h4 className="text-sm uppercase tracking-widest text-mono-muted">
                Contact Me:
                <a href="pavkhemerak.official@gmail.com" className="lowercase text-mono-primary hover:text-mono-secondary transition-colors duration-200">
                    pavkhemerak.official@gmail.com
                </a><br />
                <a href="https://t.me/pavkhemerak" className="pl-[6.8rem] lowercase text-mono-primary hover:text-mono-secondary transition-colors duration-200">
                    +855 14 945 699
                </a>
            </h4>
        </div>
    )
}
export default Footer;