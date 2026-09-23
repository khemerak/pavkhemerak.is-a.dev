function Educations () {
    return (
        <section id="educations" className={"min-h-[60vh] md:min-h-screen flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b border-mono-border"}>
            <h3 className={"text-sm uppercase tracking-widest text-mono-muted mb-8 md:mb-12 font-medium"}>Education</h3>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl"}>
                <div>
                    <h4 className={"text-lg font-medium text-mono-primary mb-4 border-b border-mono-border"}>Bachelor Degree of Computer Science <br/><span className={"text-mono-muted text-sm"}>2022-2025</span></h4>
                    <p>Royal University of Phnom Penh</p>
                </div>
                <div>
                    <h4 className={"text-lg font-medium text-mono-primary mb-4 border-b border-mono-border"}>General English as a Second Language <br/><span className={"text-mono-muted text-sm"}>2022-2024</span></h4>
                    <p>Paññāsāstra University of Cambodia</p>
                </div>
                <div>
                    <h4 className={"text-lg font-medium text-mono-primary mb-4 border-b border-mono-border"}>High School Diploma <br/><span className={"text-mono-muted text-sm"}>2015-2021</span></h4>
                    <p>Paññāsāstra University of Cambodia</p>
                </div>
            </div>

        </section>
    );
}

export default Educations;