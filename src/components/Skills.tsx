import './Skills.css'
import {
    SiC, SiCplusplus, SiPython, SiJavascript,
    SiTypescript, SiOcaml, SiR,
    SiHtml5, SiReact, SiNodedotjs, SiLinux,
    SiGnubash, SiWireshark, SiGit, SiDocker,
    SiKubernetes, SiGooglecloud, SiLatex,
    SiScikitlearn,
} from 'react-icons/si'
import {
    FaJava, FaMicrochip, FaCss3Alt, FaChartLine,
    FaWaveSquare, FaProjectDiagram, FaSitemap,
} from 'react-icons/fa'
import { PiFileSql } from 'react-icons/pi'


export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <div className="section__inner">
                <h2>Skills</h2>
                {SKILLS.map((group) => (
                    <SkillGroupItem key={group.category} {...group} />
                ))}
            </div>
        </section>
    )
}

const SKILLS: SkillGroup[] = [
    {
        category: 'Languages',
        skills: [
            { label: 'Java', icon: <FaJava /> },
            { label: 'C/C++', icon: <SiCplusplus /> },
            { label: 'Python', icon: <SiPython /> },
            { label: 'JavaScript', icon: <SiJavascript /> },
            { label: 'TypeScript', icon: <SiTypescript /> },
            { label: 'OCaml', icon: <SiOcaml /> },
            { label: 'R', icon: <SiR /> },
            { label: 'SQL', icon: <PiFileSql /> },
            { label: 'Verilog', icon: <FaMicrochip /> },
        ],
    },
    {
        category: 'Web & Frameworks',
        skills: [
            { label: 'HTML', icon: <SiHtml5 /> },
            { label: 'CSS', icon: <FaCss3Alt /> },
            { label: 'React', icon: <SiReact /> },
            { label: 'Node.js', icon: <SiNodedotjs /> },
        ],
    },
    {
        category: 'Systems & Networking',
        skills: [
            { label: 'Linux', icon: <SiLinux /> },
            { label: 'Bash', icon: <SiGnubash /> },
            { label: 'FreeRTOS', icon: <FaMicrochip /> },
            { label: 'ModelSim', icon: <FaWaveSquare /> },
            { label: 'Wireshark', icon: <SiWireshark /> },
            { label: 'Mininet', icon: <FaProjectDiagram /> },
            { label: 'POX', icon: <FaSitemap /> },
        ],
    },
    {
        category: 'Tools',
        skills: [
            { label: 'Git', icon: <SiGit /> },
            { label: 'Docker', icon: <SiDocker /> },
            { label: 'Kubernetes', icon: <SiKubernetes /> },
            { label: 'Google Cloud', icon: <SiGooglecloud /> },
            { label: 'LaTeX', icon: <SiLatex /> },
            { label: 'Matplotlib', icon: <FaChartLine /> },
            { label: 'Scikit-Learn', icon: <SiScikitlearn /> },
        ],
    },
]

interface Skill {
    label: string
    icon: React.ReactNode
}

interface SkillGroup {
    category: string
    skills: Skill[]
}

const SkillItem = ({ label, icon }: Skill) => (
    <span key={label} className="skill-badge">
        {icon}
        {label}
    </span>
)

const SkillGroupItem = ({ category, skills }: SkillGroup) => (
    <div className="skills__group">
        <p className="section-label">{category}</p>
        <div className="skills__badges">
            {skills.map((skill) => (
                <SkillItem key={skill.label} {...skill} />
            ))}
        </div>
    </div>
)