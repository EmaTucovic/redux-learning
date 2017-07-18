import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link'; //active, children, onClick;


const mapStateToprops = (state, ownProps) => {
    return {
        active : ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("mapdispatchto props");
    console.log(dispatch);
    console.log(ownProps);
    return {
        onClick : () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
}

const FilterLink = connect(
    mapStateToprops,
    mapDispatchToProps
    
)(Link);

export default FilterLink;