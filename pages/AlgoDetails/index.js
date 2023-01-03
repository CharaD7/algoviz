import { useRouter } from 'next/router';

import { algorithms } from '~utils/AppConstants';

const AlgoDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const algorithm = algorithms.filter((algo) => algo.id == id)[0];
    return (
        <div>
            <h2 class="text-center text-xl text-red-500">{algorithm.name}</h2>
        </div>
    );
};

export default AlgoDetails;
