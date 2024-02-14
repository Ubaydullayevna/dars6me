import ThemeController from "./ThemeController";

function AsHeader() {
  return (
    <header className="mx-auto  w-full max-w-[740px] px-5">
      <div className="flex items-center justify-between pb-10 pt-10">
        <h1 className="text-4xl font-bold">Manage your todos</h1>
        <ThemeController />
      </div>
    </header>
  );
}

export default AsHeader;
