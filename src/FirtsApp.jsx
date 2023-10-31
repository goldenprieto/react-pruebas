import PropTypes from 'prop-types';

export const FirstApp  = ( {title, subTitle} ) =>{
    console.log();
   
    return(
        <>
            <h1>{ title }</h1>

            <div>{ subTitle }</div>
        </>
    )
}

FirstApp.propTypes = {
 title: PropTypes.string.isRequired,
 subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'El come pollo'
}
