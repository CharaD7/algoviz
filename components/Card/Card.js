import Image from 'next/image';
// import FitContainerImage from '../FitContainerImage/FitContainerImage';

const Card = ({ title, content, tags, img }) => {
    return (
        <div class="flex flex-col rounded-lg shadow-lg border-slate-50 bg-gray-100 m-4 p-2 overflow-y-auto max-h-30 w-11/12 sm:w-56">
            {img && (
                <Image
                    src={img}
                    alt={title}
                    quality={100}
                    width="100"
                    height="50"
                    class="flex-2 rounded-sm align-middle mx-auto"
                />
            )}

            <div class="pt-2 pb-4 flex-3 ">
                <div class="font-bold  text-center text-sm mb-1 text-gray-700">{title}</div>
                <hr />
                <p class="text-gray-400 text-sm pt-2">{content}</p>
            </div>
            {tags && tags.length > 0 && (
                <div class="flex flex-row pt-1 pb-1 flex-2 flex-wrap max-h-10">
                    {tags.map((tag, index) => {
                        return (
                            <span
                                key={`${tag}-${index}`}
                                class=" bg-gray-200 rounded-full px-3 text-xs  text-gray-700 mr-1 mb-1 inline-block flex-1 sm:w-24"
                            >
                                #{tag}
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Card;
