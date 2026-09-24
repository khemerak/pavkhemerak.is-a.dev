function Skills() {
    return (
        <section id="skills" className="min-h-[60vh] md:min-h-screen flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b border-mono-border bg-mono-surface/30">
            <h3 className="text-sm uppercase tracking-widest text-mono-muted mb-8 md:mb-12 font-medium">Skills</h3>

            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-4xl ">
                <div>
                    <h4 className="text-md lg:text-lg font-medium text-mono-primary mb-6 border-b border-mono-border pb-4">Full-Stack & Systems Development</h4>
                    <p className="text-base md:text-lg text-mono-secondary leading-relaxed font-light">
                        Knowledgable in GoLang, Java, Spring Boot, TypeScript, NextJS/ReactJS, RestAPI
                    </p>
                </div>

                <div>
                    <h4 className="text-md lg:text-lg font-medium text-mono-primary mb-6 border-b border-mono-border pb-4">Cloud & Infrastructure</h4>
                    <p className="text-base md:text-lg text-mono-secondary leading-relaxed font-light ">AWS (EC2, S3, VPC, IAM), Google Cloud, Oracle Cloud, Linux Administration, VirtualBox, VMware</p>
                </div>

                <div>
                    <h4 className="text-md lg:text-lg font-medium text-mono-primary mb-6 border-b border-mono-border pb-4">Containers & DevOps</h4>
                    <p className="text-base md:text-lg text-mono-secondary leading-relaxed font-light ">Git, GitHub, GitLab, Bash Scripting, Docker, Postman, CI/CD pipelines</p>
                </div>

                <div>
                    <h4 className="text-md lg:text-lg font-medium text-mono-primary mb-6 border-b border-mono-border pb-4">Networking & Security</h4>
                    <p className="text-base md:text-lg text-mono-secondary leading-relaxed font-light">
                        TCP/IP, DNS, DHCP, VLANs, Routing & Switching, Network Hardening, Fortinet Security fundamentals
                    </p>
                </div>

                <div>
                    <h4 className="text-md lg:text-lg font-medium text-mono-primary mb-6 border-b border-mono-border pb-4">Databases & Tools</h4>
                    <p className="text-base md:text-lg text-mono-secondary leading-relaxed font-light">
                        PostgreSQL, MySQL, MS SQL Server, SQL, Radis, MariaDB 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;