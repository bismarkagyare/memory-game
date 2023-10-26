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

const imagesContext = import.meta.glob('../assets/wantedImages/*.webp');
const wantedArray = await importAll(imagesContext);

export default wantedArray;
