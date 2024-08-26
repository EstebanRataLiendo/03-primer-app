import PropTypes from 'prop-types';


export const FirstApp = ({title ='Titulo Default',subTitle='Subtitulo Default'}) => {
    return (
    <>
        {/* se puede cargar expresiones pero no un objeto */}
        <h1 data-testid='test-title'>{title}</h1>
        {/* <h2>{newMessage}</h2>
        <h4> {nMessage.title} </h4>
        <h5> {100*100+' '+ 'String desde JSX con operaciones'} </h5>
        <code> {JSON.stringify (nMessage)} </code>
        <h3> {neMessage} </h3> */}
        <p>{subTitle}</p>

    </>
    )
}

FirstApp.propTypes= {
    title: PropTypes.string,
    subTitle: PropTypes.string//.isRequired
}

