import GithubImage from '../../../../public/github.png'
import LinkedinImage from '../../../../public/linkedin.svg'

export default interface Route {
    uri: string
    name: string
}

export function NewRoutes(): Route[] {
    return [] = [
        { uri: "/about", name: "About"},
        { uri: "/projects", name: "Projects"},
        { uri: "/resume.pdf", name: "Resume"},
    ]
}