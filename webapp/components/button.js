window.Button = ({React}) => {
  const [value, setValue] = React.useState(1)
  const props = {onClick: () => setValue(i => i + 1)}
  return React.createElement('button', {...props}, ['click me ', value])
}
