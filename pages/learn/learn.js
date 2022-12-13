import { Card } from '~components';

// import { algorithms } from '../../utils/AppConstants';

const AlgoList = () => {
    return (
        <div class="flex flex-1 max-w-full p-2 flex-wrap flex-row">
            {/* {algorithms.map((algo, index) => {
                const { name, categories, description } = algo;
                return <Card key={`algolist-${index}`} title={name} content={description} tags={categories} />;
            })} */}
        </div>
    );
};

export default AlgoList;
