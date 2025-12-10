import MasonryLayout from '../../components/masonry-layout';

export default function MasonryLayoutDemo() {
  return (
    <MasonryLayout>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 1</div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 2</div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 3</div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 4</div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 5</div>
      <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 6</div>
    </MasonryLayout>
  );
}
