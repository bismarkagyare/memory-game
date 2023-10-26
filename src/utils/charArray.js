const importAll = async (context) => {
  const modules = Object.fromEntries(
    await Promise.all(
      Object.entries(context).map(async ([path, moduleFn]) => [
        path,
        await moduleFn(),
      ])
    )
  );

  return modules;
};

const imagesContext = import.meta.glob('../assets/characterImages/*.webp');
const images = await importAll(imagesContext);

const characters = Object.entries(images).map(([path, module]) => {
  const name = path.match(/\/([^\/]+)\.webp$/)[1];

  return {
    name: name,
    image: module.default,
  };
});

export default characters;
