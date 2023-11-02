const importAll = async (context) => {
  const modulePaths = Object.keys(context);
  const modules = await Promise.all(
    modulePaths.map(async (path) => await context[path]())
  );
  return modules;
};

const imagesContext = import.meta.glob('../assets/wantedImages/*.webp');
const wantedArray = await importAll(imagesContext);

export default wantedArray;
