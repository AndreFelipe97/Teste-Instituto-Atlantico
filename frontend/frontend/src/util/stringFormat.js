export default function FileName(fileName, project, version) {
    const file = fileName.split('.')
    let projectFormat = project.replace(' ', '_')
    return `${projectFormat}v${version}.${file[1]}`
}