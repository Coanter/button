import "./index.css"

export function Button(props){
    const {variant = "primary", children} = props;
    const className = 'my-button my button--${variant}'

    return <button className = {className}>{children}</button>
}

export default Button;