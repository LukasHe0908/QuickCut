export default function BorderWrapper({ className = '', children }) {
  return <div className={'border-small p-1 rounded-small border-default-200 ' + className}>{children}</div>;
}
