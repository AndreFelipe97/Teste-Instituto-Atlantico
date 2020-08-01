export default function FileName(fileName, project, version) {
  const file = fileName.split('.');
  const projectFormat = project.replace(' ', '_');
  return `${projectFormat}_v${version}.${file[1]}`;
}
