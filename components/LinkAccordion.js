import withAccordion from '../hoc/accordion.hoc'

const Link = ({label, ...props}) => <a {...props}>{label}</a>

export default withAccordion(Link)
