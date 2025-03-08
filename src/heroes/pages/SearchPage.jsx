import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../Components';
import queryString from 'query-string';
import { getHeroByName } from '../helpers';



export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroByName( q );

    const showMsg = ( q.length === 0 ) ? {} : { display: 'none' };
    const showError = ( q.length > 0 && heroes.length === 0 ) ? {} : { display: 'none' };

    const { searchText, onInputChange, onResetForm } = useForm( {
        searchText: q,
    } );

    const onSearchSubmit = ( e ) => {
        e.preventDefault();

        console.log( searchText );


        navigate( `?q=${ searchText }` );
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <input
                            type='text'
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={ searchText }
                            onChange={ onInputChange }
                        />

                        <button
                            className='btn btn-outline-primary mt-2'
                        >
                            Search
                        </button>

                    </form>


                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    <div className='alert alert-primary' style={ showMsg }> search a hero</div>
                    <div className='alert alert-danger' style={ showError }> no hero with { q }</div>

                    { heroes.map( ( hero ) => (
                        <HeroCard key={ hero.id } { ...hero } />
                    ) ) }
                </div>
            </div>
        </>
    );
};
