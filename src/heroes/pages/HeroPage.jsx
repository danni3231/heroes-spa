import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

    const navigate = useNavigate();

	const { id } = useParams();

	const hero = useMemo(()=> getHeroById(id),[id]);
    
    const onNavigateBack = () => {
        navigate(-1);
    };

	if (!hero) {
		return <Navigate to='/marvel' />;
	}

	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img
					className='img-thumbnail'
					src={`/assets/heroes/${id}.jpg`}
					alt={hero.superhero}
				/>
			</div>

            <div className="col-8">
                <h1>{hero.superhero}</h1>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Alter ego:</b> {hero.alter_ego} </li>
                    <li className='list-group-item'> <b>Publisher</b> {hero.publisher} </li>
                    <li className='list-group-item'> <b>First appearance</b> {hero.first_appearance} </li>
                </ul>

                <h5 className='mt-3'>characters</h5>
                <p>{hero.characters}</p>

                <button className='btn btn-primary mt-3' onClick={onNavigateBack}>
                    Volver
                </button>
            </div>
	
		</div>
	);
};
