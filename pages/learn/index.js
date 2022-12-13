import Link from 'next/link';

import { Card } from '~components';
import { algorithms } from '~utils/AppConstants';

const AlgoList = () => {
    return (
        <>
            <h2 class="text-center text-xl text-red-500">Learn Algorithms</h2>
            <div class="flex flex-1 max-w-full p-2 flex-wrap flex-row">
                {algorithms.map((algo, index) => {
                    const { id, name, categories, description } = algo;
                    return (
                        <Link href={`/AlgoDetails?id=${id}`} key={`algolist-${index}-${name}`}>
                            <Card title={name} content={description} tags={categories} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default AlgoList;
